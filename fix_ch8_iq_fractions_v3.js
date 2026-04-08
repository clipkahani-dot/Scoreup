const fs = require('fs');

let content = fs.readFileSync('math-data.js', 'utf8');

// 1. Fix the corruption caused by the previous script (images/math)
content = content.replace(/i<span class="frac"><span class="num">mages<\/span><span class="den">math<\/span><\/span>_/g, 'images/math_');

// 2. Define a safer fraction replacement for Trig/Math Chapter 8
// We target "answer" fields in Chapter 8
const ch8Start = content.indexOf('"chapter": "त्रिकोणमिति का परिचय"');
const ch8End = content.indexOf('"chapter":', ch8Start + 100); // Approximate end

let ch8Block = content.substring(ch8Start, ch8End);

function safeFracReplace(text) {
    // Whitelist for math terms: sin, cos, tan, cot, sec, cosec, θ, A-C, P-R, numbers, √, °, k
    const term = '([A-Za-z0-9θ√°k\\s\\+\\-\\(\\)\\.]+)';
    
    // We only want to match if it's NOT inside a tag
    // This is a simplified check for JSON strings
    
    // Pattern: capture things like "sin A / cos A" or "1 / √3"
    // We avoid matching across HTML tags or into src/href
    
    let current = text;
    let iterations = 0;
    while (iterations < 10) {
        let next = current.replace(/([A-Za-z0-9θ√°k\(\)\.]+(?:\s+[A-Za-z0-9θ√°k\(\)\.]+)*)\s*\/\s*([A-Za-z0-9θ√°k\(\)\.]+(?:\s+[A-Za-z0-9θ√°k\(\)\.]+)*)(?![^<]*>)/g, (match, p1, p2) => {
            // Check if p1 or p2 are suspiciously long or contain path-like chars (unlikely with this regex)
            if (p1.length > 30 || p2.length > 30) return match;
            
            // Clean up
            let n = p1.trim();
            let d = p2.trim();
            
            // If it's already a span, ignore
            if (n.includes("<span") || d.includes("<span")) return match;
            
            // Exclude common pitfalls
            const excludes = ["images", "img", "alt", "width", "span", "class", "frac", "num", "den", "Step"];
            if (excludes.some(e => n.toLowerCase().includes(e) || d.toLowerCase().includes(e))) return match;

            return `<span class=\"frac\"><span class=\"num\">${n}</span><span class=\"den\">${d}</span></span>`;
        });
        if (next === current) break;
        current = next;
        iterations++;
    }
    return current;
}

// Line by line processing for safety
let lines = ch8Block.split('\n');
let newLines = lines.map(line => {
    if (line.includes('"answer":')) {
        let match = line.match(/"answer":\s*"(.*)",?$/);
        if (match) {
            let answer = match[1];
            // Don't process if it's already very complex or contains tags we might break
            // Actually, we want to replace the slashes.
            let updated = safeFracReplace(answer);
            return line.replace(answer, updated);
        }
    }
    return line;
});

let updatedCh8Block = newLines.join('\n');
content = content.replace(ch8Block, updatedCh8Block);

fs.writeFileSync('math-data.js', content);
console.log("Cleaned up and updated Chapter 8 fractions safely.");
