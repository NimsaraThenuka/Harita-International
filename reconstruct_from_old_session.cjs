const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/eae23d86-bb2b-40b6-b06a-541c1f3cd270/.system_generated/logs/transcript_full.jsonl';

if (!fs.existsSync(transcriptPath)) {
  console.error("Old session transcript does not exist at path:", transcriptPath);
  process.exit(1);
}

const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
console.log("Read old session log. Total lines:", fileLines.length);

let foundContent = null;

// Search for any write_to_file or replace_file_content that has the initial large content of LanguageContext.tsx
for (let i = fileLines.length - 1; i >= 0; i--) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('LanguageContext.tsx')) {
          console.log(`Found write_to_file at line ${i}. Length:`, call.args.CodeContent.length);
          foundContent = call.args.CodeContent;
          break;
        }
      }
    }
    // Also look at tool outputs (which might be the response of reading it)
    if (!foundContent && data.content && data.content.includes("File Path:") && data.content.includes("LanguageContext.tsx") && data.content.includes("Total Lines: 978")) {
      console.log(`Found raw view_file response at line ${i}. Parsing lines...`);
      const matchLines = data.content.split('\n');
      const parsedLines = [];
      for (const ml of matchLines) {
        const m = ml.match(/^(\d+):\s*(.*)/);
        if (m) parsedLines.push(m[2]);
      }
      if (parsedLines.length > 800) {
        foundContent = parsedLines.join('\n');
        console.log(`Successfully parsed ${parsedLines.length} lines from view_file.`);
        break;
      }
    }
  } catch (e) {}
  if (foundContent) break;
}

if (foundContent) {
  const destPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
  fs.writeFileSync(destPath, foundContent, 'utf8');
  console.log("Restored LanguageContext.tsx from old session! Lines:", foundContent.split('\n').length);
} else {
  console.error("Could not find LanguageContext.tsx content in old session logs");
}
