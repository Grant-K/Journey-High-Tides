"""
FTB Quests Auto-Generator
Parses KubeJS recipe/item dumps and generates SNBT quest files.
"""

import json
import os
import re
import random
import hashlib

MC = "C:\\Users\\skyco\\AppData\\Roaming\\PrismLauncher\\instances\\Journey High Tides 0425-Reborn\\minecraft"
EXPORTS = os.path.join(MC, "kubejs_exports")
QUESTS_DIR = os.path.join(MC, "config", "ftbquests", "quests")

# ---- Tier definitions: mod namespace -> tier order ----
TIER_MAP = {
    "minecraft": 0,
    "farmersdelight": 1,
    "create": 2,
    "createaddition": 2,
    "create_central_kitchen": 2,
    "create_dd": 2,
    "create_enchantment_industry": 2,
    "create_sa": 2,
    "create_interior": 2,
    "create_ore_excavation": 2,
    "immersivepetroleum": 3,
    "mekanism": 4,
    "mekanismadditions": 4,
    "mekanismgenerators": 4,
    "mekanismtools": 4,
    "jei": 5,
    "jeouraplus": 5,
}

# Mods to exclude from quest generation
SKIP_MODS = {
    "kubejs", "kotlinforforge", "kffmod", "cloth_config",
    "architectury", "jei", "jeouraplus", "jei_mekanism",
    "jade", "journeymap", "xerox", "fml", "neoforge",
    "alltheleaks", "badoptimizations", "searchables",
    "connectivity", "crashutilities", "nochatreports",
    "patchouli", "bookshelf", "configured", "modernfix",
    "embeddium", "oculus", "rubidium", "canary",
    "ferritecore", "lazydfu", "memoryleakfix",
    "smoothboot", "threadtweak", "fastload",
    "citadel", "geckolib", "resourcefulconfig",
    "resourcefullib", "structureessentials", "tips",
    "tipthewolf", "toastcontrol", "mouse_tweaks",
    "controlling", "languagefix", "justzoom",
}

# Tier display names
TIER_NAMES = {
    0: "getting_started",
    1: "early_survival",
    2: "create_engineering",
    3: "industrial",
    4: "mekanism_advanced",
    5: "late_game",
}

TIER_TITLES = {
    0: "Getting Started",
    1: "Early Survival",
    2: "Create Engineering",
    3: "Industrial Age",
    4: "Mekanism Advanced",
    5: "Late Game",
}


def gen_id():
    """Generate a random 64-bit hex ID like FTB Quests expects."""
    return format(random.getrandbits(64), '016X')


def snbt_escape(s):
    """Escape a string for SNBT format."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')


def item_to_snbt(item_id, count=1):
    """Create SNBT item tag."""
    return f'{{id:"{item_id}",Count:{count}b}}'


def mod_from_id(item_id):
    """Extract mod namespace from item ID."""
    if ':' in item_id:
        return item_id.split(':')[0]
    return "unknown"


def nice_name(item_id):
    """Convert item ID to human-readable name."""
    name = item_id.split(':')[-1] if ':' in item_id else item_id
    name = re.sub(r'[_\-]+', ' ', name)
    return name.title()


def load_data():
    with open(os.path.join(EXPORTS, "all_recipes.json")) as f:
        recipes = json.load(f)
    with open(os.path.join(EXPORTS, "all_items.json")) as f:
        items = json.load(f)
    return recipes, items


def categorize_recipes(recipes):
    """Group recipes by mod namespace and tier."""
    by_mod = {}
    for r in recipes.get("recipes", []):
        rid = r.get("id", "")
        rtype = r.get("type", "")
        result = r.get("result", "")
        inputs = r.get("inputs", [])

        if not rid or rid == "Function":
            continue
        if not result and not rtype:
            continue

        # Determine mod from recipe ID
        mod = mod_from_id(rid)
        if mod in SKIP_MODS:
            continue
        if not result:
            continue

        tier = TIER_MAP.get(mod, 3)  # default tier 3

        if mod not in by_mod:
            by_mod[mod] = {"tier": tier, "recipes": []}
        by_mod[mod]["recipes"].append({
            "recipe_id": rid,
            "type": rtype,
            "result": result,
            "inputs": inputs,
        })

    return by_mod


def build_recipe_type_filter(recipes_for_chapter):
    """Get dominant recipe types for a mod."""
    types = {}
    for r in recipes_for_chapter:
        t = r.get("type", "crafting")
        types[t] = types.get(t, 0) + 1
    return types


def generate_chapter_snbt(mod, recipes, chapter_id):
    """Generate SNBT for a single chapter."""
    # Sort recipes by result name for consistent ordering
    recipes.sort(key=lambda r: r["result"])

    # Limit quests per chapter to avoid overwhelming (can be tuned)
    MAX_QUESTS = 50
    recipes = recipes[:MAX_QUESTS]

    # Grid layout: 4 columns
    COLS = 4
    quest_blocks = []

    # Track which items are used as inputs for dependencies
    result_to_quest_id = {}

    for idx, r in enumerate(recipes):
        quest_id = gen_id()
        task_id = gen_id()
        reward_id = gen_id()

        result_item = r["result"]
        inputs = r.get("inputs", [])
        x = (idx % COLS) * 2.0
        y = (idx // COLS) * 2.0

        # Build task - item submission task
        if inputs:
            # Use first input as the task icon
            first_input = inputs[0] if isinstance(inputs[0], str) else inputs[0][0]
            icon_snbt = item_to_snbt(first_input)
        else:
            icon_snbt = item_to_snbt(result_item)

        # Item task type
        task = (
            f'{{{{id:"{task_id}",type:"item",icon:{icon_snbt},'
            f'item:"{result_item}",count:1,consume_items:false}}}}'
        )

        # Reward the output item
        reward_count = r.get("resultCount", 1)
        reward_snbt = item_to_snbt(result_item, reward_count)
        reward = f'{{{{id:"{reward_id}",type:"item",item:{reward_snbt}}}}}'

        # Dependencies: quests for input items
        deps = []
        for inp in inputs:
            if isinstance(inp, str) and inp in result_to_quest_id:
                deps.append(result_to_quest_id[inp])
            elif isinstance(inp, list):
                for alt in inp:
                    if alt in result_to_quest_id:
                        deps.append(result_to_quest_id[alt])
                        break

        dep_str = ""
        if deps:
            dep_list = ",".join(f'"{d}"' for d in set(deps))
            dep_str = f'dependencies:[{dep_list}],'

        quest_snbt = (
            f'{{id:"{quest_id}",{dep_str}'
            f'title:"{snbt_escape(nice_name(result_item))}",'
            f'icon:{icon_snbt},'
            f'tasks:[{task}],'
            f'rewards:[{reward}],'
            f'x:{x}.0d,y:{y}.0d}}'
        )

        result_to_quest_id[result_item] = quest_id
        quest_blocks.append(f"\t\t{quest_snbt}")

    chapter_snbt = (
        f'{{filename:"{mod}",id:"{chapter_id}",'
        f'order_index:0,title:"{snbt_escape(nice_name(mod))}",'
        f"quests:[\n{',\n'.join(quest_blocks)}\n\t]}}"
    )

    return chapter_snbt, result_to_quest_id


def generate_questbook():
    recipes, items = load_data()
    print(f"Loaded {len(recipes.get('recipes', []))} recipes, {items.get('count', 0)} items")

    by_mod = categorize_recipes(recipes)
    print(f"Categorized into {len(by_mod)} mods")

    # Group by tier
    by_tier = {}
    for mod, data in by_mod.items():
        tier = data["tier"]
        if tier not in by_tier:
            by_tier[tier] = {}
        by_tier[tier][mod] = data

    # Create chapters directory
    chapters_dir = os.path.join(QUESTS_DIR, "chapters")
    os.makedirs(chapters_dir, exist_ok=True)

    # Track all quest IDs for dependency linking across chapters
    global_quest_map = {}
    chapter_links = []

    # Generate chapter files per tier
    for tier in sorted(by_tier.keys()):
        tier_name = TIER_NAMES.get(tier, f"tier_{tier}")
        tier_title = TIER_TITLES.get(tier, f"Tier {tier}")

        for mod, data in sorted(by_tier[tier].items()):
            chapter_id = gen_id()
            recipes_list = data["recipes"]

            if not recipes_list:
                continue

            chapter_snbt, quest_map = generate_chapter_snbt(
                mod, recipes_list, chapter_id
            )
            global_quest_map.update(quest_map)

            # Write chapter file
            chapter_file = os.path.join(chapters_dir, f"{mod}.snbt")
            with open(chapter_file, "w") as f:
                f.write(chapter_snbt)
            print(f"  Generated chapter: {mod} ({len(recipes_list)} quests)")

            chapter_links.append(
                f'{{chapter:"{chapter_id}",'
                f'title:"{snbt_escape(tier_title)} - {snbt_escape(nice_name(mod))}"}}'
            )

    # Update data.snbt
    data_snbt = """{
\tdefault_autoclaim_rewards: "disabled"
\tdefault_consume_items: false
\tdefault_quest_disable_jei: false
\tdefault_quest_shape: "circle"
\tdefault_reward_team: false
\tdetection_delay: 20
\tdisable_gui: false
\tdrop_book_on_death: false
\tdrop_loot_crates: false
\temergency_items_cooldown: 300
\tfallback_locale: "en_us"
\tgrid_scale: 0.5d
\thide_excluded_quests: false
\tlock_message: ""
\tloot_crate_no_drop: {
\t\tboss: 0
\t\tmonster: 600
\t\tpassive: 4000
\t}
\tpause_game: false
\tprogression_mode: "linear"
\tshow_lock_icons: false
\tverify_on_load: false
\tversion: 13
}"""

    with open(os.path.join(QUESTS_DIR, "data.snbt"), "w") as f:
        f.write(data_snbt)

    print(f"\nGenerated questbook in {QUESTS_DIR}")
    print(f"Total chapters: {len(chapter_links)}")


if __name__ == "__main__":
    generate_questbook()
