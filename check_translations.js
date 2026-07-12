const fs = require('fs');
const path = require('path');

// 1. Read translations from LanguageContext.tsx
const langContextPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
const langContextContent = fs.readFileSync(langContextPath, 'utf8');

// Parse the translations object manually or using regex
// Since it's a JS object, we can extract key-value pairs
const translations = {};
const regex = /"([^"]+)"\s*:\s*\{\s*en\s*:\s*"([^"]+)"\s*,\s*ja\s*:\s*"([^"]+)"\s*\}/g;
let match;
while ((match = regex.exec(langContextContent)) !== null) {
  translations[match[1].trim()] = { en: match[2], ja: match[3] };
}

// Also check single quoted keys or multiline keys
// Let's do a more robust parse by extracting the block between "const translations" and "};"
const transBlockMatch = langContextContent.match(/const translations[\s\S]+?=\{\s*([\s\S]+?)\n\};/);
if (transBlockMatch) {
  const lines = transBlockMatch[1].split('\n');
  lines.forEach(line => {
    // try to match "Key": { en: "...", ja: "..." }
    const m = line.match(/"([^"]+)":\s*\{\s*en:\s*"([^"]+)"\s*,\s*ja:\s*"([^"]+)"\s*\}/);
    if (m) {
      translations[m[1].trim()] = { en: m[2], ja: m[3] };
    }
  });
}

console.log(`Parsed ${Object.keys(translations).length} simple translations from context.`);

// Let's scan all .tsx files in src/pages and src/components
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
const missingKeys = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match t("...") or t('...') or t(`...`)
  const tMatches1 = content.match(/t\(\s*"([^"]+)"\s*\)/g);
  const tMatches2 = content.match(/t\(\s*'([^']+)'\s*\)/g);
  
  if (tMatches1) {
    tMatches1.forEach(m => {
      const key = m.match(/t\(\s*"([^"]+)"\s*\)/)[1].trim();
      if (!translations[key]) missingKeys.add(key);
    });
  }
  if (tMatches2) {
    tMatches2.forEach(m => {
      const key = m.match(/t\(\s*'([^']+)'\s*\)/)[1].trim();
      if (!translations[key]) missingKeys.add(key);
    });
  }

  // Also check PageHero usages e.g. tag="...", tagSub="...", title="...", titleAccent="...", subtitle="..."
  const heroMatches = content.match(/<PageHero[\s\S]+?\/>/g);
  if (heroMatches) {
    heroMatches.forEach(hero => {
      const attrs = ['tag', 'tagSub', 'title', 'titleAccent', 'subtitle'];
      attrs.forEach(attr => {
        const regexAttr = new RegExp(`${attr}\\s*=\\s*"([^"]+)"`);
        const m = hero.match(regexAttr);
        if (m) {
          const key = m[1].trim();
          if (!translations[key]) missingKeys.add(key);
        }
      });
    });
  }
});

console.log("Missing translations keys found:");
console.log(Array.from(missingKeys));
