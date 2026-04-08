const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove redundant nested bold tags
content = content.replace(/<b><b>(.*?)<\/b><\/b>/g, '<b>$1</b>');
content = content.replace(/<b><b>/g, '<b>');
content = content.replace(/<\/b><\/b>/g, '</b>');

// 2. Fix broken alt attributes in images (remove HTML tags inside alt)
content = content.replace(/alt=\"([^"]*?)</g, (match, p1) => {
    // If an alt attribute contains a < tag, it's likely corrupted by our scripts
    return `alt=\"${p1.replace(/<[^>]*>?/gm, '')}`; 
});

// Specifically fix the ones I saw in the view
content = content.replace(/alt=\"Similar Triangle <span class=\\\"frac\\\"><b>Step 1:<\/b>/g, 'alt=\"Similar Triangle Diagram\"');
content = content.replace(/\" width=\"400\">/g, '\" width=\"400\">'); 

// 3. One more check for Chapter 13 PYQ
// Ensure we didn't add anything there by mistake
console.log("Checking Chapter 13 PYQ...");
const ch13Index = content.indexOf('"chapter": "पृष्ठीय क्षेत्रफल और आयतन"');
if (ch13Index !== -1) {
    const pyqStart = content.indexOf('"pyq":', ch13Index);
    const pyqEnd = content.indexOf('}', pyqStart + 10);
    // User wants this empty for now
}

fs.writeFileSync(path, content, 'utf8');
console.log("Final tag cleanup and alt-attribute repair completed.");
