const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// Strategy: Parse character by character to find exactly where depth goes wrong,
// correctly handling:
// 1. Double-quoted strings (with escape sequences)
// 2. Single-quoted strings (none in JS data but just in case)

let depth = 0;
let inString = false;
let escape = false;
let positions = []; // track all { positions with running depth

const stripped = content.replace(/^const mathData = /, '').replace(/;\s*$/, '');

for (let i = 0; i < stripped.length; i++) {
    const ch = stripped[i];
    
    if (escape) { escape = false; continue; }
    if (ch === '\\' && inString) { escape = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    
    if (!inString) {
        if (ch === '{') {
            depth++;
            if (depth <= 2) {
                // Get surrounding context for top-level objects
                const lineNum = stripped.substring(0, i).split('\n').length;
                const context = stripped.substring(Math.max(0, i), i + 100).replace(/\n/g, '↵');
                positions.push({ depth, pos: i, lineNum, context: context.substring(0, 80) });
            }
        }
        if (ch === '}') {
            depth--;
        }
    }
}

console.log('\nFinal depth:', depth);
console.log('\nAll top-level { openings:');
positions.forEach(p => {
    console.log(`  Depth ${p.depth} at line ~${p.lineNum}: ${p.context}`);
});

// Find the top-level chapter starts (depth goes from 0 to 1)
const stripped2 = content.replace(/^const mathData = /, '').replace(/;\s*$/, '');
let d = 0, inStr = false, esc2 = false;
let chapterStarts = [];
for (let i = 0; i < stripped2.length; i++) {
    const ch = stripped2[i];
    if (esc2) { esc2 = false; continue; }
    if (ch === '\\' && inStr) { esc2 = true; continue; }
    if (ch === '"') { inStr = !inStr; continue; }
    if (!inStr) {
        if (ch === '{') {
            d++;
            if (d === 1) chapterStarts.push(stripped2.substring(0, i).split('\n').length);
        }
        if (ch === '}') d--;
    }
}
console.log('\nTotal top-level { found (chapters):', chapterStarts.length);
console.log('Chapter start lines:', chapterStarts.join(', '));
