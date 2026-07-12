const fs = require('fs');
const transcriptPath = 'C:\\\\Users\\\\Lap.lk\\\\.gemini\\\\antigravity-ide\\\\brain\\\\615bb74e-5403-4ab0-a860-0d74d7322ac5\\\\.system_generated\\\\logs\\\\transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\\n');

for (const line of fileLines) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.step_index === 93) {
      console.log(JSON.stringify(data.tool_calls, null, 2));
      break;
    }
  } catch (e) {}
}
