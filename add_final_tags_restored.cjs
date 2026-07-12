const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const tagsTranslations = {
  "Signature": { en: "Signature", ja: "看板商品" },
  "Aromatic": { en: "Aromatic", ja: "極上の香り" },
  "Wellness": { en: "Wellness", ja: "健康・美容" },
  "Gift": { en: "Gift", ja: "ギフト用" },
};

const insertPos = content.indexOf('export const LanguageProvider');
if (insertPos === -1) {
  console.error("Could not find LanguageProvider.");
  process.exit(1);
}

const targetPart = content.slice(0, insertPos);
const lastClosingBrace = targetPart.lastIndexOf('};');
if (lastClosingBrace === -1) {
  console.error("Could not find the last closing brace.");
  process.exit(1);
}

let newStr = '\n  // Added food page card tags\n';
for (const [key, value] of Object.entries(tagsTranslations)) {
  newStr += `  "${key}": { en: "${value.en}", ja: "${value.ja}" },\n`;
}

const newContent = content.slice(0, lastClosingBrace) + newStr + content.slice(lastClosingBrace);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Card tags added successfully!");
