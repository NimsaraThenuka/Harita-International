const fs = require('fs');
const path = require('path');

const langContextPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
const langContextContent = fs.readFileSync(langContextPath, 'utf8');

const translations = {};
const regex = /"([^"]+)"\s*:\s*\{\s*en\s*:\s*"([^"]+)"\s*,\s*ja\s*:\s*"([^"]+)"\s*\}/g;
let match;
while ((match = regex.exec(langContextContent)) !== null) {
  translations[match[1].trim()] = { en: match[2], ja: match[3] };
}

const cleanTranslations = {};
Object.keys(translations).forEach(k => {
  cleanTranslations[k.replace(/\\n/g, '\n').replace(/\\"/g, '"').trim()] = translations[k];
});

console.log(`Parsed ${Object.keys(cleanTranslations).length} translations.`);

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
  
  const tRegex = /t\(\s*(["'`])([\s\S]+?)\1\s*\)/g;
  let tMatch;
  while ((tMatch = tRegex.exec(content)) !== null) {
    const key = tMatch[2].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim();
    if (!cleanTranslations[key]) {
      missingKeys.add(key);
    }
  }

  const heroMatches = content.match(/<PageHero[\s\S]+?\/>/g);
  if (heroMatches) {
    heroMatches.forEach(hero => {
      const attrs = ['tag', 'tagSub', 'title', 'titleAccent', 'subtitle'];
      attrs.forEach(attr => {
        const regexAttr = new RegExp(`${attr}\\s*=\\s*"([^"]+)"`);
        const m = hero.match(regexAttr);
        if (m) {
          const key = m[1].replace(/\\n/g, '\n').replace(/\\"/g, '"').trim();
          if (!cleanTranslations[key]) {
            missingKeys.add(key);
          }
        }
      });
    });
  }
});

console.log("Missing translations keys found:");
console.log(JSON.stringify(Array.from(missingKeys), null, 2));
fs.writeFileSync('missing.json', JSON.stringify(Array.from(missingKeys), null, 2));
