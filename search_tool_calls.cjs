const fs = require('fs');
const transcriptPath = 'C:\\Users\\Lap.lk\\.gemini\\antigravity-ide\\brain\\615bb74e-5403-4ab0-a860-0d74d7322ac5\\.system_generated\\logs\\transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (JSON.stringify(call).includes('LanguageContext.tsx')) {
          console.log(`Step ${data.step_index || i}: Tool "${call.name}" target/arg contains LanguageContext.tsx`);
        }
      }
    }
  } catch (e) {}
}
