#!/usr/bin/env node
// Generates a basic kubejs balance patch from the manifest produced by scan_mods_for_recipes.js
// This is a starter patch with placeholders that you can customize.
const fs = require('fs');
const path = require('path');

const manifestPath = process.argv[2] || path.resolve(process.cwd(), 'kubejs_exports', 'recipes_and_items_from_mods.json');
const outPatchDir = path.resolve(process.cwd(), 'kubejs', 'server_scripts');
const outPatchPath = path.join(outPatchDir, 'balance_from_mods.js');

function ensureDir(dir){ if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
ensureDir(outPatchDir);

if (!fs.existsSync(manifestPath)) {
  console.error('Manifest not found at', manifestPath);
  console.error('Run: node tools/scan_mods_for_recipes.js <mods_dir> to generate it first.');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const recipes = manifest.recipes || [];

let patch = '';
patch += "// Auto-generated balance patch from mods for exploration/Create balance\n";
patch += "onEvent('recipes', event => {\n";

recipes.forEach((r, idx) => {
  if (!r.output) return; // skip if no output
  const rid = r.id || `mod_recipe_${idx}`;
  patch += `  // Balancing: ${rid} -> ${r.output}\n`;
  patch += `  event.remove({ output: '${r.output}' });\n`;
  patch += `  // TODO: insert patched/new shape for ${r.output} derived from inputs: ${r.inputs ? r.inputs.join(',') : ''}\n`;
  patch += `  // Example (replace with real IDs):\n`;
  patch += `  // event.shaped('${r.output}', [ 'AAA', 'ABA', 'AAA' ], { A: 'create:brass_sheet', B: 'create:gearbox' });\n`;
});

patch += "});\n";

fs.writeFileSync(outPatchPath, patch, 'utf8');
console.log('Wrote kubejs patch to', outPatchPath);
