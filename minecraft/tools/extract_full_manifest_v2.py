#!/usr/bin/env python3
"""
Comprehensive extractor for ALL recipes and items from mod jars.
Handles: data/*/recipes/*.json, assets/emi/recipe/defaults/*.json,
         assets/*/models/item/*.json, assets/*/items/*.json
"""
import sys, os, json, zipfile
from collections import defaultdict

def parse_recipe_json(data, namespace, recipe_id):
    """Extract structured recipe info from a JSON object."""
    recipe = {'id': recipe_id, 'type': data.get('type', 'unknown'), 'namespace': namespace}
    
    # Output
    output = None
    if 'result' in data:
        res = data['result']
        if isinstance(res, str): output = res
        elif isinstance(res, dict):
            output = res.get('id') or res.get('item') or ''
    elif 'outputs' in data and data['outputs']:
        res = data['outputs'][0]
        if isinstance(res, str): output = res
        elif isinstance(res, dict): output = res.get('id') or res.get('item') or ''
    recipe['output'] = output

    # Inputs - ingredients
    inputs = []
    if 'ingredients' in data:
        for ing in data['ingredients']:
            if isinstance(ing, str): inputs.append(ing)
            elif isinstance(ing, dict):
                inputs.append(ing.get('item') or f"#{ing.get('tag', '')}")
    
    # Inputs - pattern (shaped)
    if 'pattern' in data:
        recipe['pattern'] = data['pattern']
    if 'key' in data:
        keys = {}
        for k, v in data['key'].items():
            if isinstance(v, str): keys[k] = v
            elif isinstance(v, dict): keys[k] = v.get('item') or f"#{v.get('tag', '')}"
        recipe['keys'] = keys
    
    recipe['inputs'] = inputs
    return recipe

def scan_jar(jar_path):
    recipes = []
    items = set()
    try:
        with zipfile.ZipFile(jar_path, 'r') as z:
            names = z.namelist()
            for name in names:
                if not name.endswith('.json'): continue
                
                # 1. Standard recipes: data/<ns>/recipes/<path>.json
                if '/data/' in name and '/recipes/' in name:
                    try:
                        data = json.loads(z.read(name))
                    except: continue
                    parts = name.split('/')
                    ns = parts[1] if len(parts) > 1 else 'minecraft'
                    try:
                        ri = parts.index('recipes')
                        rel = '/'.join(parts[ri+1:]).replace('.json', '')
                    except: continue
                    rid = f"{ns}:{rel}"
                    recipes.append(parse_recipe_json(data, ns, rid))

                # 2. EMI recipe defaults: assets/emi/recipe/defaults/<mod>.json
                elif name.startswith('assets/emi/recipe/defaults/') and name.endswith('.json'):
                    try:
                        data = json.loads(z.read(name))
                    except: continue
                    # These contain lists of recipe IDs
                    if isinstance(data, dict):
                        for section in ['crafting', 'smelting', 'blasting', 'smoking', 'campfire_cooking',
                                       'stonecutting', 'smithing', 'fuel']:
                            if section in data and isinstance(data[section], list):
                                for rid in data[section]:
                                    recipes.append({'id': rid, 'type': section, 'namespace': 'emi_default', 'output': None, 'inputs': []})

                # 3. Items: assets/<ns>/models/item/<item>.json
                elif '/assets/' in name and '/models/item/' in name:
                    parts = name.split('/')
                    try:
                        ai = parts.index('assets')
                        ns = parts[ai+1]
                        item_name = parts[-1].replace('.json', '')
                        items.add(f"{ns}:{item_name}")
                    except: continue

                # 4. Items: assets/<ns>/items/<item>.json (newer format)
                elif '/assets/' in name and '/items/' in name and '/models/' not in name:
                    parts = name.split('/')
                    try:
                        ai = parts.index('assets')
                        ns = parts[ai+1]
                        item_name = parts[-1].replace('.json', '')
                        items.add(f"{ns}:{item_name}")
                    except: continue
    except Exception as e:
        pass
    return recipes, items

def main():
    mods_dir = sys.argv[1]
    out_file = sys.argv[2]
    
    all_recipes = []
    all_items = set()
    mod_counts = []

    for filename in sorted(os.listdir(mods_dir)):
        if not filename.endswith('.jar'): continue
        jar_path = os.path.join(mods_dir, filename)
        r, i = scan_jar(jar_path)
        if r or i:
            print(f"  {filename}: {len(r)} recipes, {len(i)} items")
            all_recipes.extend(r)
            all_items.update(i)
            mod_counts.append({'jar': filename, 'recipes': len(r), 'items': len(i)})

    # Deduplicate recipes by ID
    seen = set()
    unique_recipes = []
    for r in all_recipes:
        if r['id'] not in seen:
            seen.add(r['id'])
            unique_recipes.append(r)

    manifest = {
        'meta': {
            'mods_scanned': len(mod_counts),
            'total_raw_recipes': len(all_recipes),
            'unique_recipes': len(unique_recipes),
            'total_unique_items': len(all_items),
            'mods_with_data': [{'jar': m['jar'], 'recipes': m['recipes'], 'items': m['items']} for m in mod_counts]
        },
        'recipes': unique_recipes,
        'items': sorted(list(all_items))
    }

    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    print(f"\nDone! {len(unique_recipes)} unique recipes, {len(all_items)} unique items -> {out_file}")

if __name__ == '__main__':
    main()
