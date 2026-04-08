const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix corrupted artifacts (Commonly  appearing for ° or √)
const artifactRegex = new RegExp('\\uFFFD', 'g'); // Use escaped version to be safe
content = content.replace(artifactRegex, (match, offset, s) => {
    const context = s.slice(Math.max(0, offset - 10), offset + 10);
    // If it's near common angles, it's probably a degree symbol
    if (/60|30|45|90|120|180|360/.test(context)) return '°';
    // If it's near 3 or 2, it might be a root symbol (e.g. 3 -> √3)
    if (/3|2|5/.test(context)) return '√';
    return '°'; // Default to degree
});

// 2. Standardize missing degree symbols for trigonometric functions
content = content.replace(/tan\s*(\d+)(?![°\w])/g, 'tan $1°');
content = content.replace(/sin\s*(\d+)(?![°\w])/g, 'sin $1°');
content = content.replace(/cos\s*(\d+)(?![°\w])/g, 'cos $1°');

// 3. Fraction Standardization (a/b -> <span> format)
content = content.replace(/(\d+)\s*\/\s*(\d+)/g, (match, n, d, offset, s) => {
    const pre = s.slice(Math.max(0, offset - 50), offset);
    // Ignore if already formatted
    if (pre.includes('num">') || pre.includes('den">') || pre.includes('class="frac"')) return match;
    // Allow standard numeric fractions
    return `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`;
});

// 4. Bold Step Headers for pedagogy
content = content.replace(/Step\s*(\d+):/g, '<b>Step $1:</b>');

fs.writeFileSync(path, content, 'utf8');
console.log("math-data.js audit and professional cleanup successful.");
