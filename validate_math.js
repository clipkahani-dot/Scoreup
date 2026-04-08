const fs = require('fs');
const path = 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(path, 'utf8');

// Remove the variable declaration part
const jsonLike = content.replace(/const\s+mathData\s*=\s*/, '').trim().replace(/;$/, '');

try {
    // We use eval to handle the JS-standard object (with unquoted keys if any)
    const data = eval(jsonLike);
    console.log('SUCCESS: mathData is a valid JS array of length ' + data.length);
    
    data.forEach((ch, idx) => {
        if (!ch.chapter) console.error('Error: Chapter at index ' + idx + ' missing chapter name');
        if (!ch.importantQuestions) console.error('Error: Chapter ' + ch.chapter + ' missing importantQuestions');
        if (!ch.pyq) console.error('Error: Chapter ' + ch.chapter + ' missing pyq');
    });
} catch (e) {
    console.error('JS EVAL ERROR: ' + e.message);
    const lines = jsonLike.split('\n');
    // Find the error line if possible
    console.error('Check around: ' + e.stack);
}
