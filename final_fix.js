const fs = require('fs');
const filePath = 'math-data.js';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

// The junk is from line 1004 to 1047 (inclusive).
// In 0-indexing, that is index 1003 to 1046.
// Splice(startIndex, deleteCount)
lines.splice(1003, 44); 

fs.writeFileSync(filePath, lines.join('\n'));
console.log('Successfully removed the junk block from line 1004 to 1047.');
