#!/usr/bin/env python3
"""
Extracts ALL recipes and items from all mod jars in the mods directory.
Outputs a single comprehensive manifest: kubejs_exports/full_manifest.json
"""
import sys
import os
import json
import zipfile

def extract_from_jar(jar_path):
    recipes = []
    items = set()
    try:
        with zipfile.ZipFile(jar_path, 'r') as z:
            for info in z.infolist():
                name = info.filename
                # Target data/<namespace>/recipes/<path>.json
                if not name.endswith('.json') or '/data/' not in name or '/recipes/' not in name:
                    continue
                try:
                    data = json.loads(z.read(name))
                except:
                    continue

                # Derive Recipe ID: namespace:path/to/recipe
                parts = name.split('/')
                namespace = parts[1] if len(parts) > 1 else 'minecraft'
                try:
                    recipe_idx = parts.index('recipes')
                    recipe_rel_path = '/'.join(parts[recipe_idx + 1:]).replace('.json', '')
                except ValueError:
                    continue
                
                recipe_id = f"{namespace}:{recipe_rel_path}"

                output = None
                inputs = []
                pattern = None
                keys = None

                # 1. Extract Output (result)
                if 'result' in data:
                    res = data['result']
                    if isinstance(res, str): output = res
                    elif isinstance(res, dict) and 'item' in res: output = res['item']
                elif 'outputs' in data and data['outputs']:
                    res = data['outputs'][0]
                    if isinstance(res, dict) and 'item' in res: output = res['item']
                    elif isinstance(res, str): output = res
                
                # 2. Extract Inputs
                if 'ingredients' in data:
                    for ing in data['ingredients']:
                        if isinstance(ing, str): inputs.append(ing)
                        elif isinstance(ing, dict):
                            if 'item' in ing: inputs.append(ing['item'])
                            elif 'tag' in ing: inputs.append(f"#{ing['tag']}")
                
                # 3. Shaped Patterns/Keys
                if 'pattern' in data: pattern = data['pattern']
                if 'key' in data:
                    keys = {}
                    for k, v in data['key'].items():
                        if isinstance(v, str): keys[k] = v
                        elif isinstance(v, dict) and 'item' in v: keys[k] = v['item']

                if output or inputs:
                    recipes.append({
                        'id': recipe_id,
                        'type': data.get('type', 'unknown'),
                        'output': output,
                        'inputs': inputs,
                        'pattern': pattern,
                        'keys': keys
                    })
                    if output: items.add(output)
                    for i in inputs: items.add(i)
    except Exception:
        pass
    return recipes, items

def main():
    mods_dir = sys.argv[1]
    out_file = sys.argv[2]
    
    all_recipes = []
    all_items = set()

    if not os.path.isdir(mods_dir):
        print(f"Error: Directory {mods_dir} not found.")
        sys.exit(1)

    print(f"Scanning {mods_dir}...")
    for filename in sorted(os.listdir(mods_dir)):
        if not filename.endswith('.jar'): continue
        jar_path = os.path.join(mods_dir, filename)
        r, i = extract_from_jar(jar_path)
        if r:
            print(f"  Found {len(r)} recipes in {filename}")
            all_recipes.extend(r)
            all_items.update(i)

    manifest = {
        'meta': {
            'total_recipes': len(all_recipes),
            'total_unique_items': len(all_items)
        },
        'recipes': all_recipes,
        'items': sorted(list(all_items))
    }

    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2)
    
    print(f"Done! Wrote {len(all_recipes)} recipes to {out_file}")

if __name__ == '__main__':
    main()
