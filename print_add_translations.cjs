const fs = require('fs');
const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/eae23d86-bb2b-40b6-b06a-541c1f3cd270/.system_generated/logs/transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

// Find last write_to_file for add_translations.cjs
for (let i = fileLines.length - 1; i >= 0; i--) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('add_translations.cjs')) {
          console.log(`Found add_translations.cjs at line ${i}. Length: ${call.args.CodeContent.length}`);
          fs.writeFileSync('add_translations_restored.cjs', call.args.CodeContent, 'utf8');
          break;
        }
      }
    }
  } catch (e) {}
  if (fs.existsSync('add_translations_restored.cjs')) break;
}

// Find last write_to_file for add_final_tags.cjs
for (let i = fileLines.length - 1; i >= 0; i--) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('add_final_tags.cjs')) {
          console.log(`Found add_final_tags.cjs at line ${i}. Length: ${call.args.CodeContent.length}`);
          fs.writeFileSync('add_final_tags_restored.cjs', call.args.CodeContent, 'utf8');
          break;
        }
      }
    }
  } catch (e) {}
  if (fs.existsSync('add_final_tags_restored.cjs')) break;
}
