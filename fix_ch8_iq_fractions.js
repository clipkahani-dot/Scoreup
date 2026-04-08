const fs = require('fs');

function frac(num, den) {
    return `<span class=\"frac\"><span class=\"num\">${num}</span><span class=\"den\">${den}</span></span>`;
}

let content = fs.readFileSync('math-data.js', 'utf8');

// Use a more restricted evaluation to get the mathData object
// We know it's assigned to a variable or part of a structure
const dataMatch = content.match(/const mathData = (\[[\s\S]*?\]);/);
if (!dataMatch) {
    console.error("Could not find mathData array");
    process.exit(1);
}

let mathData;
try {
    mathData = JSON.parse(dataMatch[1].replace(/\\"/g, '"').replace(/\\'/g, "'"));
} catch (e) {
    // Fallback if it's not strictly JSON (it's JS)
    mathData = eval(dataMatch[1]);
}

const ch8 = mathData.find(c => c.chapter && (c.chapter.includes("त्रिकोणमिति") || c.chapter.includes("त्रिकोणमिति का परिचय")));

if (!ch8) {
    console.error("Chapter 8 not found");
    process.exit(1);
}

function processText(text) {
    if (!text || typeof text !== 'string') return text;
    
    // Regular expressions for various fraction patterns
    // 1. Standard trig over trig: sin A / cos A
    // 2. Trig over number: sin A / 2
    // 3. Number over trig: 1 / sin A
    // 4. Expression over expression: (1 + sin A) / cos A
    // 5. Units/Variables: 6 / 4√3
    
    let oldText;
    do {
        oldText = text;
        
        // Pattern for something / something (avoiding existing HTML tags)
        // This is tricky. Let's try specific common ones first.
        
        text = text.replace(/([^\s<>]+)\s*\/\s*([^\s<>]+)(?![^<]*>)/g, (match, p1, p2) => {
            // Avoid double wrapping and common non-math slashes if any
            if (p1.includes("span") || p2.includes("span")) return match;
            if (p1.startsWith("http") || p1.startsWith("www")) return match;
            
            // Clean up parentheses if they wrap the entire numerator/denominator
            let num = p1.replace(/^\((.*)\)$/, '$1');
            let den = p2.replace(/^\((.*)\)$/, '$1');
            
            return frac(num, den);
        });
    } while (text !== oldText);
    
    return text;
}

// Process Short IQ
if (ch8.importantQuestions.short) {
    ch8.importantQuestions.short.forEach(q => {
        q.answer = processText(q.answer);
    });
}

// Process Long IQ
if (ch8.importantQuestions.long) {
    ch8.importantQuestions.long.forEach(q => {
        q.answer = processText(q.answer);
    });
}

// Update the content string by replacing the mathData part
const newMathDataStr = JSON.stringify(mathData, null, 4);
const updatedFileContent = content.replace(/const mathData = \[[\s\S]*?\];/, `const mathData = ${newMathDataStr};`);

fs.writeFileSync('math-data.js', updatedFileContent);
console.log("Successfully updated Chapter 8 IQ fractions.");
