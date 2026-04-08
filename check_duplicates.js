const fs = require('fs');
const path = 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(path, 'utf8');

// Remove the variable declaration part
const jsonLike = content.replace(/const\s+mathData\s*=\s*/, '').trim().replace(/;$/, '');

try {
    const data = eval(jsonLike);
    const chapters = {};
    data.forEach((ch, idx) => {
        const key = ch.subject + '|' + ch.chapter;
        if (chapters[key]) {
            console.error('CRITICAL: Duplicate Chapter Found: ' + key + ' at index ' + idx + ' (already found at ' + chapters[key] + ')');
        }
        chapters[key] = idx;
    });
} catch (e) {
    console.error('JS EVAL ERROR: ' + e.message);
}
