import { readFile } from 'node:fs/promises';

const locales = ['es', 'en', 'ca', 'fr'];
const sections = ['common', 'about', 'map', 'process', 'footer', 'metadata', 'not-found', 'ecosystems'];
const catalogs = Object.fromEntries(await Promise.all(locales.map(async (locale) => [locale,
  Object.fromEntries(await Promise.all(sections.map(async (section) => [section,
    JSON.parse(await readFile(new URL(`../text/${locale}/${section}.json`, import.meta.url), 'utf8')),
  ]))),
])));

function checkShape(source, translation, path) {
  if (typeof source !== typeof translation || Array.isArray(source) !== Array.isArray(translation)) throw new Error(`Type mismatch: ${path}`);
  if (typeof source === 'string') {
    if (!translation.trim()) throw new Error(`Empty translation: ${path}`);
    return;
  }
  const keys = Object.keys(source);
  if (JSON.stringify(keys.sort()) !== JSON.stringify(Object.keys(translation).sort())) throw new Error(`Missing/extra keys or array items: ${path}`);
  for (const key of keys) checkShape(source[key], translation[key], `${path}.${key}`);
}

const nodeIds = ['territorio', 'materia', 'conocimiento', 'transformacion', 'experiencia', 'compartir'];
const stepIds = ['territorio', 'materia', 'conocimiento', 'relaciones', 'transformacion', 'experiencia', 'compartir'];
for (const locale of locales) {
  checkShape(catalogs.es, catalogs[locale], locale);
  const { map, process } = catalogs[locale];
  if (JSON.stringify(map.nodes.map(({ id }) => id)) !== JSON.stringify(nodeIds)) throw new Error(`Invalid diagram IDs: ${locale}`);
  if (JSON.stringify(process.steps.map(({ id }) => id)) !== JSON.stringify(stepIds)) throw new Error(`Invalid process IDs: ${locale}`);
  if (map.center.length !== 2 || map.centerCaptionLines.length !== 3) throw new Error(`Invalid diagram line count: ${locale}`);
  for (const node of map.nodes) {
    if (!process.steps.some(({ id }) => id === node.id)) throw new Error(`Broken diagram anchor: ${locale}.${node.id}`);
  }
  console.log(`${locale}: all ${sections.length} catalogs complete; diagram anchors valid`);
}
