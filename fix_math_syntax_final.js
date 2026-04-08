const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// Looking for the duplicate closing brackets at 1032-1034
// It looks like:
/*
1031:         ]
1032: }
1033:         ]
1034: }
1035:     },
*/

// Using a more flexible regex that accounts for line endings and spaces
const match = content.match(/\]\r?\n\s+\}\r?\n\s+\]\r?\n\s+\}/);
if (match) {
    console.log('Found duplicate brackets! Fixing...');
    const fixedContent = content.substring(0, match.index) + ']\n        }' + content.substring(match.index + match[0].length);
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('Fixed syntax error!');
} else {
    // Try even more flexible
    const match2 = content.match(/\]\s*\}\s*\]\s*\}/);
    if (match2 && match2.index > 120000) {
        console.log('Found flexible duplicate brackets! Fixing...');
        const fixedContent = content.substring(0, match2.index) + ']\n        }' + content.substring(match2.index + match2[0].length);
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log('Fixed syntax error (flexible)!');
    } else {
        console.error('Could not find the duplicate bracket pattern.');
    }
}
