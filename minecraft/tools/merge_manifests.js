#!/usr/bin/env node
// Merges multiple manifest files containing recipes and items into a single, deduplicated manifest.
// Usage: node tools/merge_manifests.js <path_to_manifest_A.json> <path_to_manifest_B.json> [<path_to_manifest_C.json> ...]
// Outputs: kubejs_exports/recipes_and_items_from_mods_combined.json

const fs = require('fs');
const path = require('path');

function loadManifest(p) {
  if (!p) return null;
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function mergeManifests(manifests) {
  const allRecipes = new Map(); // id -> recipe
  const allItems = new Set();
  for (const m of manifests) {
    if (!m) continue;
    if (Array.isArray(m.recipes)) {
      for (const r of m.recipes) {
        const id = r.id || r.name || (r.output ? 'anon:' + r.output : undefined);
        if (!id) continue;
        // prefer existing but allow duplicates across manifests to be deduped
        allRecipes.set(id, r);
        if (Array.isArray(r.inputs)) r.inputs.forEach(i => allItems.add(i));
        if (r.output) allItems.add(r.output);
      }
    }
    if (Array.isArray(m.items)) {
      m.items.forEach(it => allItems.add(it));
    }
  }
  return {
    generated_at: new Date().toISOString(),
    recipes: Array.from(allRecipes.values()),
    items: Array.from(allItems).sort()
  };
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 1) {
    console.error('Usage: node tools/merge_manifests.js <manifest1.json> <manifest2.json> [... ]');
    process.exit(2);
  }
  const manifests = argv.map(p => loadManifest(path.resolve(p))).filter(Boolean);
  const merged = mergeManifests(manifests);
  const kubeOut = path.resolve(process.cwd(), 'kubejs_exports');
  if (!fs.existsSync(kubeOut)) fs.mkdirSync(kubeOut, { recursive: true });
  const outPath = path.join(kubeOut, 'recipes_and_items_from_mods_combined.json');
  fs.writeFileSync(outPath, JSON.stringify(merged, null, 2), 'utf8');
  console.log('Wrote merged manifest to', outPath);
}

main();
