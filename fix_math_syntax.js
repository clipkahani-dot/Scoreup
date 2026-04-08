const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// The error is around line 1032-1034 where there are duplicate closing brackets.
// We look for the pattern of double closing brackets that shouldn't be there.
// Specifically:
/*
1030:                 }
1031:         ]
1032: }
1033:         ]
1034: }
1035:     },
*/

const badPattern = /        \]\n        \}\n        \]\n        \}/;
if (badPattern.test(content)) {
    console.log('Found double brackets pattern. Fixing...');
    const fixedContent = content.replace(badPattern, '        ]\n        }');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('Syntax fixed!');
} else {
    // Try a more flexible match if whitespace differs
    const badPatternFlexible = /\]\s*\}\s*\]\s*\}/;
    const match = content.match(badPatternFlexible);
    if (match && match.index > 100000) { // Safety check to be near our chapter
        console.log('Found flexible double brackets pattern. Fixing...');
        // We want to keep the first ] and } and remove the rest
        const fixedContent = content.substring(0, match.index) + ']\n        }' + content.substring(match.index + match[0].length);
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log('Syntax fixed (flexible)!');
    } else {
        console.error('Could not find the syntax error pattern automatically.');
    }
}
