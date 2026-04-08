const fs = require('fs');

const mathData = fs.readFileSync('math-data.js', 'utf8');

// Find the Chapter 8 block precisely
// We look for "chapter": "त्रिकोणमिति का परिचय" and follow it to the end of that object
const ch8Regex = /\{\s*"subject":\s*"Mathematics",\s*"class_level":\s*"10",\s*"chapter":\s*"त्रिकोणमिति का परिचय"[\s\S]*?"pyq": \{/m;
const match = mathData.match(ch8Regex);

if (!match) {
    console.error("Chapter 8 IQ block not found");
    process.exit(1);
}

let ch8Block = match[0];

// Replacement function for fractions using .frac utility
function replaceWithFrac(text) {
    if (!text) return text;
    
    // Pattern: capture things on either side of /, handle parens
    // Pattern 1: (expr) / (expr) 
    text = text.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '<span class=\"frac\"><span class=\"num\">$1</span><span class=\"den\">$2</span></span>');
    
    // Pattern 2: (expr) / simple
    text = text.replace(/\(([^()]+)\)\s*\/\s*([A-Za-z0-9θ√°]+)/g, '<span class=\"frac\"><span class=\"num\">$1</span><span class=\"den\">$2</span></span>');
    
    // Pattern 3: simple / (expr)
    text = text.replace(/([A-Za-z0-9θ√°]+)\s*\/\s*\(([^()]+)\)/g, '<span class=\"frac\"><span class=\"num\">$1</span><span class=\"den\">$2</span></span>');
    
    // Pattern 4: simple / simple
    // Avoid stuff that's already in tags like class= or style=
    text = text.replace(/(?<![="])\s*([A-Za-z0-9θ√°]+)\s*\/\s*([A-Za-z0-9θ√°]+)(?!["'])/g, (match, p1, p2) => {
        // Exclude common words or attributes
        const excludes = ["images", "img", "alt", "width", "span", "class", "frac", "num", "den"];
        if (excludes.includes(p1.toLowerCase()) || excludes.includes(p2.toLowerCase())) return match;
        return `<span class=\"frac\"><span class=\"num\">${p1}</span><span class=\"den\">${p2}</span></span>`;
    });
    
    return text;
}

// Extract only answer lines to avoid breaking tags
let lines = ch8Block.split('\n');
let newLines = lines.map(line => {
    if (line.includes('"answer":')) {
        // Only replace inside the answer string
        let parts = line.split('"answer": "');
        if (parts.length > 1) {
            let answerContent = parts[1].replace(/",?$/m, '');
            let updated = replaceWithFrac(answerContent);
            return parts[0] + '"answer": "' + updated + '",';
        }
    }
    return line;
});

const newCh8Block = newLines.join('\n');
const newMathData = mathData.replace(ch8Block, newCh8Block);

fs.writeFileSync('math-data.js', newMathData);
console.log("Successfully updated Chapter 8 IQ fractions with robust regex.");
