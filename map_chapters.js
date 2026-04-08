const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');

// Find positions of all top-level chapter objects
const lines = content.split('\n');
const chapterLines = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/^\s*"subject":\s*"Mathematics"/)) {
        chapterLines.push({ line: i + 1, text: lines[i] });
    }
    if (lines[i].match(/^\s*"chapter":/)) {
        chapterLines.push({ line: i + 1, text: lines[i].trim() });
    }
}

chapterLines.forEach(l => console.log(`Line ${l.line}: ${l.text.substring(0, 80)}`));
