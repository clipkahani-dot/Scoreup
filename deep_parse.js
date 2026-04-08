const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// Convert to JSON-parseable format
const jsonContent = content.replace(/^const mathData = /, '').replace(/;\s*$/, '');

// Use a custom parser to find the exact position of the error
let depth = 0;
let inString = false;
let escape = false;
let lastGoodPos = 0;
let lastOpenBrace = 0;

for (let i = 0; i < jsonContent.length; i++) {
    const ch = jsonContent[i];
    
    if (escape) { escape = false; continue; }
    if (ch === '\\') { escape = true; continue; }
    
    if (ch === '"' && !escape) {
        inString = !inString;
        continue;
    }
    
    if (!inString) {
        if (ch === '{') { 
            depth++; 
            lastOpenBrace = i;
        }
        if (ch === '}') { 
            depth--;
            if (depth < 0) {
                console.log(`EXTRA CLOSING BRACE at position ${i}`);
                console.log('Context:', jsonContent.substring(Math.max(0, i-200), i+50));
                break;
            }
        }
    }
}

console.log(`\nFinal depth: ${depth} (should be 0)`);
if (depth > 0) {
    console.log(`Missing ${depth} closing brace(s). Last open brace at position ${lastOpenBrace}`);
    console.log('Context around last open brace:', jsonContent.substring(Math.max(0, lastOpenBrace-100), lastOpenBrace+200));
}
