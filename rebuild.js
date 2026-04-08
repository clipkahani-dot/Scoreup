const fs = require('fs');
const filePath = 'math-data.js';
const content = fs.readFileSync(filePath, 'utf8').split('\n');

// We need to delete lines 1004 up to 1060.
// In 0-indexed terms, that is content.splice(1003, 57);
// But wait, I already removed line 1004 in a previous step!
// Let's check the current line 1003 and 1004 to be sure.

console.log('Line 1003:', content[1002]); // Expected: "  },"
console.log('Line 1004:', content[1003]); // Empty line or start of junk
console.log('Line 1005:', content[1004]);

// Deleting the junk
content.splice(1003, 57); // Splice from 1004 onwards

fs.writeFileSync('math-data_repaired.js', content.join('\n'));
console.log('Repaired file saved as math-data_repaired.js');
