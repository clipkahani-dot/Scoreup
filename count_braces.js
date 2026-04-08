const fs = require('fs');
const c = fs.readFileSync('math-data.js', 'utf8');
let open = 0, close = 0;
for (let ch of c) {
    if (ch === '{') open++;
    if (ch === '}') close++;
}
console.log('Open braces:', open, 'Close braces:', close, 'Diff:', open - close);
