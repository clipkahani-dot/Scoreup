const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');

// The sequence is usually:   } \n ] \n } , \n "pyq"
// My file has:               } , \n "pyq" 

// This regex finds the last object close in any list followed by "pyq"
// and ensures it has the array-close ] and the object-close }
const finalReNest = /\}\s*,?\s*"pyq":/g;

if (finalReNest.test(content)) {
    console.log('Found the missing closure point. Applying full structural realignment...');
    const fixedContent = content.replace(finalReNest, '}\n            ]\n        },\n        "pyq":');
    fs.writeFileSync('math-data.js', fixedContent, 'utf8');
} else {
    console.log('Regex did not match. Trying alternate...');
    const alt = /\}\s*\]\s*,\s*"pyq":/g; // If one is already there
}

// Final syntax check inside the script
const check = require('child_process').spawnSync('node', ['-c', 'math-data.js']);
if (check.status === 0) {
    console.log('SYNTAX IS NOW 100% VALID!');
} else {
    console.log('STILL ERRORS:', check.stderr.toString());
}
