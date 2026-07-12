const fs = require('fs');
const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/eae23d86-bb2b-40b6-b06a-541c1f3cd270/.system_generated/logs/transcript_full.jsonl';
const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (JSON.stringify(data).includes('PageHero.tsx') && JSON.stringify(data).includes('MouseTrail')) {
      console.log(`--- MATCH AT LINE ${i} ---`);
      if (data.tool_calls) {
        for (const call of data.tool_calls) {
          console.log(`Tool call: ${call.name}`);
          if (call.args) {
            console.log("args:", JSON.stringify(call.args).substring(0, 300));
          }
        }
      }
      if (data.content) {
        console.log("content snippet:", data.content.substring(0, 300));
      }
    }
  } catch (e) {}
}
