const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const transcriptPath = 'C:/Users/Lap.lk/.gemini/antigravity-ide/brain/eae23d86-bb2b-40b6-b06a-541c1f3cd270/.system_generated/logs/transcript_full.jsonl';
if (!fs.existsSync(transcriptPath)) {
  console.error("Old session transcript does not exist");
  process.exit(1);
}

const fileLines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

const destPath = path.join(__dirname, 'src', 'context', 'LanguageContext.tsx');

// Step 1: Initialize content from Step 1085
let content = '';
for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.step_index === 1085 && data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.TargetFile.includes('LanguageContext.tsx')) {
          content = call.args.CodeContent;
          fs.writeFileSync(destPath, content, 'utf8');
          console.log("Initialized LanguageContext.tsx from Step 1085. Lines:", content.split('\n').length);
          break;
        }
      }
    }
  } catch (e) {}
}

if (!content) {
  console.error("Failed to initialize starting content");
  process.exit(1);
}

// Step 2: Chronologically process all edits & scripts
for (let i = 0; i < fileLines.length; i++) {
  const line = fileLines[i];
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.tool_calls) {
      for (const call of data.tool_calls) {
        if (call.args && call.args.TargetFile) {
          const target = call.args.TargetFile;
          
          if (target.includes('LanguageContext.tsx')) {
            if (call.name === 'replace_file_content') {
              const { TargetContent, ReplacementContent } = call.args;
              // Read current content from disk
              let currentContent = fs.readFileSync(destPath, 'utf8');
              if (currentContent.includes(TargetContent)) {
                currentContent = currentContent.replace(TargetContent, ReplacementContent);
                fs.writeFileSync(destPath, currentContent, 'utf8');
                console.log(`Step ${data.step_index || i}: Applied replace_file_content to LanguageContext.tsx`);
              } else {
                // Try trimmed matching
                const trimmedTarget = TargetContent.trim();
                if (currentContent.includes(trimmedTarget)) {
                  currentContent = currentContent.replace(trimmedTarget, ReplacementContent);
                  fs.writeFileSync(destPath, currentContent, 'utf8');
                  console.log(`Step ${data.step_index || i}: Applied replace_file_content (trimmed) to LanguageContext.tsx`);
                } else {
                  console.log(`Step ${data.step_index || i}: replace_file_content TargetContent NOT found in LanguageContext.tsx`);
                }
              }
            }
          } else if (target.endsWith('.cjs') || target.endsWith('.js')) {
            if (call.name === 'write_to_file') {
              // The agent wrote a script. Write it to disk and execute it!
              const scriptName = path.basename(target);
              // Avoid re-running our own current restore scripts
              if (scriptName.startsWith('scratch') || scriptName.startsWith('restore') || scriptName.startsWith('reconstruct') || scriptName.startsWith('print') || scriptName.startsWith('search')) {
                continue;
              }
              
              console.log(`Step ${data.step_index || i}: Writing script ${scriptName}`);
              fs.writeFileSync(scriptName, call.args.CodeContent, 'utf8');
              
              // Run the script
              try {
                console.log(`Step ${data.step_index || i}: Running script ${scriptName}`);
                execSync(`node ${scriptName}`, { stdio: 'inherit' });
              } catch (err) {
                console.error(`Error running script ${scriptName}:`, err.message);
              }
            }
          }
        }
      }
    }
  } catch (e) {
    // console.error("Error parsing line:", e);
  }
}

const finalContent = fs.readFileSync(destPath, 'utf8');
console.log("Reconstruction completed! Final file lines count:", finalContent.split('\n').length);
