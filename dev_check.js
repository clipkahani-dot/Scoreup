const fs = require('fs');
const content = fs.readFileSync('math-data.js');
console.log('Byte length:', content.length);
// Check first few bytes for BOM
console.log('First 5 bytes:', content.slice(0, 5));

// Try to decode as utf8
const text = content.toString('utf8');
const sample = text.substring(text.length - 500);
console.log('End of file text sample:');
console.log(sample);

// Check for syntax error
try {
    // We need to wrap it to evaluate the array
    const data = eval(text + '; mathData;');
    console.log('mathData length:', data.length);
} catch (e) {
    console.log('Syntax Error:', e.message);
}
