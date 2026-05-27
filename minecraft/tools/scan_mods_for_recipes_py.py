#!/usr/bin/env python3
"""
Python-based manifest generator for mod recipes.
Scans a mods/ directory (jar files) and extracts data/recipes/*.json recipe data using Python's stdlib.
Produces kubejs_exports/recipes_and_items_from_mods.json with a list of discovered recipes and inputs/outputs.
"""
import sys, os, json, zipfile, datetime
from pathlib import Path

def iter_recipe_jsons_from_jar(jar_path):
    items = []
    try:
        with zipfile.ZipFile(jar_path, 'r') as z:
            for info in z.infolist():
                name = info.filename
                if not name.lower().endswith('.json'):
                    continue
                if '/data/' in name and '/recipes/' in name:
                    with z.open(info) as f:
                        try:
                            data = json.load(f)
                        except Exception:
                            continue
                        # derive id
                        parts = name.split('/')
                        ns = parts[1] if len(parts) > 1 else 'minecraft'
                        recipe_path = '/'.join(parts[2:]).replace('.json','')
                        rec_id = f"{ns}:{recipe_path}"
                        inputs = []
                        if isinstance(data.get('ingredients'), list):
                            for ing in data['ingredients']:
                                if isinstance(ing, str):
                                    inputs.append(ing)
                                elif isinstance(ing, dict):
                                    if 'item' in ing:
                                        inputs.append(ing['item'])
                                    elif 'tag' in ing:
                                        inputs.append(f"tag:{ing['tag']}")
                        output = None
                        if isinstance(data.get('result'), str):
                            output = data['result']
                        elif isinstance(data.get('result'), dict) and 'item' in data['result']:
                            output = data['result']['item']
                        if not output and isinstance(data.get('outputs'), list) and data['outputs']:
                            o = data['outputs'][0]
                            output = o.get('item') or (o.get('result') and o['result'].get('item'))
                        if output or inputs:
                            items.append({ 'id': rec_id, 'type': data.get('type','unknown'), 'output': output, 'inputs': inputs, 'pattern': data.get('pattern'), 'keys': data.get('keys') })
    except FileNotFoundError:
        return []
    except zipfile.BadZipFile:
        return []
    return items

def main():
    mods_dir = sys.argv[1] if len(sys.argv) > 1 else str(Path.cwd()) + '/minecraft/mods'
    if not os.path.isdir(mods_dir):
        print(f"Mods directory not found: {mods_dir}")
        sys.exit(2)
    recipes = []
    items = set()
    for fname in os.listdir(mods_dir):
        if not fname.lower().endswith('.jar'):
            continue
        jar_path = os.path.join(mods_dir, fname)
        recs = iter_recipe_jsons_from_jar(jar_path)
        for r in recs:
            if r.get('output'):
                items.add(r['output'])
            for inp in r.get('inputs', []):
                items.add(inp)
            recipes.append(r)
    manifest = {
        'generated_at': datetime.datetime.utcnow().isoformat() + 'Z',
        'recipes': recipes,
        'items': sorted(list(items))
    }
    out_dir = Path(mods_dir).parent / 'kubejs_exports'
    out_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = out_dir / 'recipes_and_items_from_mods.json'
    # Optional: allow exporting to an additional path for merging manifests later
    extra_export = None
    if len(sys.argv) > 2:
        extra_export = Path(sys.argv[2])
    # Write primary manifest
    with open(manifest_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    print('Wrote manifest to', manifest_path)
    # Write extra export if provided
    if extra_export:
        with open(extra_export, 'w', encoding='utf-8') as f2:
            json.dump(manifest, f2, indent=2)
        print('Wrote extra manifest to', extra_export)

if __name__ == '__main__':
    main()
