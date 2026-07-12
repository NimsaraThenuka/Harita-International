const fs = require('fs');
const path = require('path');

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

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(__dirname, file);
  
  console.log(`Checking ${relativePath}...`);
  
  // 1. Check for JSX text nodes containing English words but no curlies
  // A simple regex to find JSX tags and text: >[Any English word and space]<
  // We can look for > followed by text containing a-zA-Z and then <
  const jsxTextRegex = />\s*([A-Za-z0-9\s.,:\-!?()'&"’“”✦—/–]+)\s*</g;
  let match;
  while ((match = jsxTextRegex.exec(content)) !== null) {
    const text = match[1].trim();
    // Ignore purely numbers, empty, or single symbols
    if (text && /[A-Za-z]/.test(text) && !text.includes('{') && !text.includes('}')) {
      console.log(`  Unwrapped JSX Text: "${text}"`);
    }
  }

  // 2. Check for attribute strings with plain English that might need wrapping
  // e.g. placeholder="...", label="..." (but not classNames, styles, src, href, etc.)
  const attrRegex = /\b(placeholder|label|tag|tagSub|title|titleAccent|subtitle|alt)\s*=\s*"([^"]+)"/g;
  while ((match = attrRegex.exec(content)) !== null) {
    const attrName = match[1];
    const attrVal = match[2].trim();
    if (attrVal && /[A-Za-z]/.test(attrVal) && !attrVal.includes('{')) {
      // Note: PageHero tags, slide tags, etc., are passed to PageHero which does the t(tag) inside,
      // but let's list them just in case.
      console.log(`  String Attribute ${attrName}="${attrVal}"`);
    }
  }
});
