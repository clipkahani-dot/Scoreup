const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// The error is a missing ] and } before "pyq"
// Current: ... } \n "pyq":
// Target:  ... } \n ] \n }, \n "pyq":

// We look for where an answer ends but "pyq" starts without closing the array/object
// This regex looks for the end of the last long answer and the start of pyq
const structuralFix = /\}\s*"pyq":/g;
if (structuralFix.test(content)) {
    console.log('Detected missing closing brackets for question lists. Repairing...');
    content = content.replace(structuralFix, '}\n            ]\n        },\n        "pyq":');
}

// Also fix if there's only one brace missing
const structuralFix2 = /\}\s*\]\s*"pyq":/g;
if (structuralFix2.test(content)) {
    console.log('Detected missing closing brace for importantQuestions. Repairing...');
    content = content.replace(structuralFix2, '}\n            ]\n        },\n        "pyq":');
}

// Clean up any double-commas or double-brackets I might have created in earlier attempts
content = content.replace(/,\s*,\s*"pyq"/g, ',\n        "pyq"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('STRUCTURE REPAIRED & REALIGNED.');
