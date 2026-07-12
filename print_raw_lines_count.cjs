const fs = require('fs');
const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/615bb74e-5403-4ab0-a860-0d74d7322ac5/.system_generated/logs/transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const line62Obj = JSON.parse(fileLines[62]);
const contentLines = line62Obj.content.split('\n');
console.log("Line 62 content line count:", contentLines.length);
console.log("First 15 lines of content:");
console.log(contentLines.slice(0, 15).join('\n'));
console.log("Last 15 lines of content:");
console.log(contentLines.slice(-15).join('\n'));
