const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
const content = fs.readFileSync(filePath, 'utf8');

// We will require it dynamically or search via string
const keys = [
  "MESSAGE", "Message",
  "ALL", "All",
  "Quality",
  "Online Store", "ONLINE STORE",
  "Line Up", "Line-up", "LINE-UP",
  "Collection",
  "Trust",
  "We reply within 2 business days",
  "We normally reply within 2 business days",
  "Product purchases, wholesale, vehicle export, software development, consulting or gemstones — we usually reply within two business days.",
  "Thank you for reaching out. We will reply within two business days."
];

for (const key of keys) {
  const regex = new RegExp(`"${key}"\\s*:\\s*\\{([^}]+)\\}`);
  const match = content.match(regex);
  if (match) {
    console.log(`Key "${key}" found: {${match[1].replace(/\n/g, '').trim()}}`);
  } else {
    console.log(`Key "${key}" NOT found`);
  }
}
