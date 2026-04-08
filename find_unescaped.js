const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// The JSON parse error says: expected , or } after property value
// This means a JSON value is incomplete - likely an unescaped quote inside a string
// Let's search for any unescaped double quotes inside answer strings

// Strategy: find all lines where <span class=" appears WITHOUT the backslash escape
const lines = content.split('\n');
let errorCount = 0;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Look for unescaped span tags inside strings
    // Pattern: inside "answer": "..." there should be class=\" not class="
    if (line.includes('class="frac"') || line.includes('class="num"') || line.includes('class="den"') || 
        line.includes('class="diagram-float"') || line.includes('class="educational-diagram"')) {
        console.log(`Line ${i + 1}: UNESCAPED QUOTES found`);
        console.log(line.substring(0, 120));
        errorCount++;
        if (errorCount > 10) {
            console.log('... (stopped at 10 errors)');
            break;
        }
    }
}
if (errorCount === 0) console.log('No unescaped class quotes found in answer strings.');
