const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const locationNamesTranslations = {
  "Japan": { en: "Japan", ja: "日本" },
  "Kyoto": { en: "Kyoto", ja: "京都" },
  "Sigiriya": { en: "Sigiriya", ja: "シギリヤ" }
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

let newStr = '\n  // Added philosophy locations translations\n';
for (const [key, value] of Object.entries(locationNamesTranslations)) {
  newStr += `  "${key}": { en: "${value.en}", ja: "${value.ja}" },\n`;
}

const newContent = content.slice(0, lastClosingBrace) + newStr + content.slice(lastClosingBrace);
fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Philosophy locations translations added successfully!");
