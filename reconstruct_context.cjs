const fs = require('fs');
const transcriptPath = 'C:\\Users\\Lap.lk\\.gemini\\antigravity-ide\\brain\\615bb74e-5403-4ab0-a860-0d74d7322ac5\\.system_generated\\logs\\transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = fileLines.length - 1; i >= 0; i--) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    // Check if the step has tool calls
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('LanguageContext.tsx')) {
          console.log(`Found write_to_file at Step ${data.step_index || i}. Code content length: ${call.args.CodeContent.length}`);
          fs.writeFileSync('reconstructed_LanguageContext.tsx', call.args.CodeContent, 'utf8');
          console.log("Written reconstructed content to reconstructed_LanguageContext.tsx");
          process.exit(0);
        }
      }
    }
  } catch (e) {}
}
console.log("No write_to_file call found for LanguageContext.tsx");
