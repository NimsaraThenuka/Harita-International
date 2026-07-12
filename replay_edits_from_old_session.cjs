const fs = require('fs');
const path = require('path');

const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/eae23d86-bb2b-40b6-b06a-541c1f3cd270/.system_generated/logs/transcript_full.jsonl';
if (!fs.existsSync(transcriptPath)) {
  console.error("Old session transcript does not exist");
  process.exit(1);
}

const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
let content = '';

for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.args && call.args.TargetFile && call.args.TargetFile.includes('LanguageContext.tsx')) {
          if (call.name === 'write_to_file') {
            console.log(`Step ${data.step_index || i}: write_to_file. Initializing content. Length: ${call.args.CodeContent.length}`);
            content = call.args.CodeContent;
          } else if (call.name === 'replace_file_content') {
            const { TargetContent, ReplacementContent } = call.args;
            console.log(`Step ${data.step_index || i}: replace_file_content.`);
            if (content.includes(TargetContent)) {
              content = content.replace(TargetContent, ReplacementContent);
              console.log("  Replaced.");
            } else {
              console.error("  TargetContent NOT found!");
            }
          } else if (call.name === 'multi_replace_file_content') {
            console.log(`Step ${data.step_index || i}: multi_replace_file_content.`);
            const { ReplacementChunks } = call.args;
            for (const chunk of ReplacementChunks) {
              const { TargetContent, ReplacementContent } = chunk;
              if (content.includes(TargetContent)) {
                content = content.replace(TargetContent, ReplacementContent);
                console.log("    Chunk replaced.");
              } else {
                console.error("    Chunk TargetContent NOT found!");
              }
            }
          }
        }
      }
    }
  } catch (e) {
    console.error("Error parsing line:", e);
  }
}

if (content) {
  const destPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');
  fs.writeFileSync(destPath, content, 'utf8');
  console.log("Chronologically reconstructed LanguageContext.tsx written! Lines:", content.split('\n').length);
} else {
  console.error("Reconstruction failed, content is empty");
}
