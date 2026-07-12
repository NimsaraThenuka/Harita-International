const fs = require('fs');
const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/615bb74e-5403-4ab0-a860-0d74d7322ac5/.system_generated/logs/transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (JSON.stringify(call).includes('LanguageContext.tsx')) {
          console.log(`--- MATCH AT LINE ${i} (Tool: ${call.name}) ---`);
          if (call.args) {
            console.log("TargetFile:", call.args.TargetFile);
            console.log("StartLine:", call.args.StartLine);
            console.log("EndLine:", call.args.EndLine);
            if (call.args.TargetContent) console.log("TargetContent length:", call.args.TargetContent.length);
            if (call.args.ReplacementContent) console.log("ReplacementContent length:", call.args.ReplacementContent.length);
            if (call.args.CodeContent) console.log("CodeContent length:", call.args.CodeContent.length);
          }
        }
      }
    }
  } catch (e) {}
}
