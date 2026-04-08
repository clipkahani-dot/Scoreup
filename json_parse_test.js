const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// Replace the var declaration to make it parseable as pure JSON array
// We don't care about the variable here, just want to find where the error is.
const jsonContent = content.replace(/^const mathData = /, '').replace(/;\s*$/, '');

try {
    JSON.parse(jsonContent);
    console.log('JSON is valid!');
} catch(e) {
    console.log('JSON Error:', e.message);
    
    // Try to narrow down by finding the line
    const pos = parseInt(e.message.match(/position (\d+)/)?.[1] || 0);
    if (pos > 0) {
        const around = jsonContent.substring(Math.max(0, pos - 150), pos + 150);
        console.log('\nAround position', pos, ':');
        console.log(around);
    }
}
