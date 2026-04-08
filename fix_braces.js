const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');

// Count braces
let open = 0, close = 0;
for (let ch of content) {
    if (ch === '{') open++;
    if (ch === '}') close++;
}
const diff = open - close;
console.log(`Brace diff: ${diff} (need ${diff} more closing braces)`);

// Add the missing closing braces before the final ];\n
const fixedContent = content.replace(/\n\];\s*$/, '\n' + '}'.repeat(diff) + '\n];');
fs.writeFileSync('math-data.js', fixedContent, 'utf8');
console.log('Applied fix. Running verification...');
