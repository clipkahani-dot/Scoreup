const fs = require('fs');
const path = 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(path, 'utf8');

// Find Chapter 15 start
const ch15Start = content.lastIndexOf('{"subject":"Mathematics","class_level":"10","chapter":"प्रायिकता"');
// Wait, my integrate script used pretty printing. Let's find by content.
const prayiktaIndex = content.lastIndexOf('"chapter": "प्रायिकता"');

if (prayiktaIndex === -1) {
    console.error('Could not find Chapter 15');
    process.exit(1);
}

// Rewriting the last chapter object with correct nesting
const tailFix = `        ],
        "pyq": {
            "short": [],
            "long": []
        }
    }
}
];`;

// I'll find the last "short": [] before the pyq error
const lastLongArrayClose = content.lastIndexOf('        ]');
if (lastLongArrayClose !== -1) {
    let fixedContent = content.substring(0, lastLongArrayClose);
    fixedContent += `        ]\n    },\n    "pyq": {\n        "short": [],\n        "long": []\n    }\n}\n];`;
    fs.writeFileSync(path, fixedContent.trim() + '\n', 'utf8');
    console.log('Successfully fixed Chapter 15 structure.');
} else {
    console.error('Could not find long array end.');
}
