#!/usr/bin/env node
// Scans mod jars in the instance and extracts data/recipes JSONs into a manifest
// Dependencies: adm-zip (npm i adm-zip)
const fs = require('fs');
const path = require('path');
let AdmZip;
try {
  AdmZip = require('adm-zip');
} catch (e) {
  console.error('adm-zip is not installed. Install it with: npm install adm-zip');
  process.exit(1);
}

const modsDir = process.argv[2] || path.resolve(process.cwd(), 'minecraft', 'mods');
const outDir = path.resolve(process.cwd(), 'kubejs_exports');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const manifestPath = path.join(outDir, 'recipes_and_items_from_mods.json');

function isJar(p){ return p.toLowerCase().endsWith('.jar'); }
function readZipEntries(zipPath){
  try {
    const zip = new AdmZip(zipPath);
    return zip.getEntries();
  } catch {
    return [];
  }
}

function extractJsonFromZipEntries(entries){
  // Collect data/recipes JSONs or any JSON-like recipe files within data/recipes/**
  const jsons = [];
  for (const e of entries) {
    if (e.isDirectory) continue;
    const name = e.entryName;
    if (!name.toLowerCase().endsWith('.json')) continue;
    if (name.indexOf('data/') !== -1 && (name.indexOf('recipes/') !== -1 || name.indexOf('crafting/') !== -1)) {
      jsons.push({ path: name, content: null });
    }
  }
  return jsons;
}

function tryParseJsonString(text){
  try { return JSON.parse(text); } catch { return null; }
}

function extractFromZip(zipPath){
  const zipEntries = readZipEntries(zipPath);
  const results = [];
  for (const e of zipEntries) {
    const name = e.entryName;
    if (!name.toLowerCase().startsWith('data/') || !name.toLowerCase().includes('/recipes/')) continue;
    if (!name.endsWith('.json')) continue;
    try {
      const txt = e.getData().toString('utf8');
      const json = tryParseJsonString(txt);
      if (!json) continue;
      // Derive namespace from first path segment after data/
      const parts = name.split('/');
      const ns = parts[1] || 'minecraft';
      const recipePath = parts.slice(2).join('/').replace(/\.json$/,'');
      const id = ns + ':' + recipePath;
      const type = json.type || 'unknown';
      // Try common fields for inputs/outputs
      const inputs = json.ingredients ? json.ingredients.map(ing => typeof ing === 'string' ? ing : (ing.item || (ing.tag ? 'tag:' + ing.tag : null))).filter(Boolean) : [];
      let output = null;
      if (json.result) {
        if (typeof json.result === 'string') output = json.result;
        else if (json.result.item) output = json.result.item;
      }
      if (!output && json.outputs && json.outputs.length) {
        const o = json.outputs[0];
        output = o.item || (o.result && o.result.item) ? o.item : null;
      }
      if (output || inputs.length > 0) {
        results.push({ id, type, output, inputs });
      }
    } catch { /* skip bad json */ }
  }
  return results;
}

function main(){
  const root = path.resolve(modsDir);
  if (!fs.existsSync(root)) {
    console.error('Mods directory not found:', modsDir);
    process.exit(1);
  }
  const files = fs.readdirSync(root).filter(p => isJar(p) || p.toLowerCase().endsWith('.jar'));
  const allRecipes = [];
  const allItems = new Set();
  for (const f of files){
    const full = path.join(root, f);
    const entries = extractFromZip(full);
    if (!entries) continue;
    // extractFromZip returns objects with id/output/inputs; we can push
    for (const r of entries){
      if (r.output) allItems.add(r.output);
      r.inputs.forEach(i => allItems.add(i));
      allRecipes.push(r);
    }
  }
  // Also try to include any tags in the instance data (if present)
  const manifest = {
    generated_at: new Date().toISOString(),
    recipes: allRecipes,
    items: Array.from(allItems).sort()
  };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Wrote mod-recipes manifest to', manifestPath);
}

main();
