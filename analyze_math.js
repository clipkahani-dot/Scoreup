const fs = require('fs');
const c = fs.readFileSync('math-data.js', 'utf8');
const lines = c.split('\n').length;
const bytes = Buffer.byteLength(c, 'utf8');
console.log('Lines:', lines, '| Size:', Math.round(bytes/1024), 'KB');
const chapters = (c.match(/"chapter":/g) || []).length;
console.log('Total chapters found:', chapters);
// Count slash fractions remaining 
const slashPattern = /\d\s*\/\s*\d|sin\s*θ\s*\/|cos\s*θ\s*\/|tan\s*θ\s*\//g;
const slashes = (c.match(slashPattern) || []).length;
console.log('Approximate fraction slashes found:', slashes);
