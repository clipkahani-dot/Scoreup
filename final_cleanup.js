const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix corrupted symbols
// In the current file, '' is appearing where '√' or '°' should be.
// Context-sensitive replacement:
content = content.replace(/(\d+)/g, '√$1'); // 3 -> √3
content = content.replace(/(\d+)/g, '$1°'); // 60 -> 60°
content = content.replace(//g, '°');        // Catch-all (mostly for degrees in text)

// 2. Standardize fractions like 3/4 or 22/7
content = content.replace(/(\d+)\s*\/\s*(\d+)/g, (match, n, d, offset, s) => {
    // Avoid double-wrapping or wrapping URLs/paths
    const pre = s.slice(Math.max(0, offset - 50), offset);
    if (pre.includes('num">') || pre.includes('den">') || pre.includes('class="frac"')) {
        return match;
    }
    // Also avoid wrapping if it looks like a date or something else (optional, but keep it simple here)
    return `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`;
});

// 3. Specific text fixes for pedagogical consistency
content = content.replace(/Ans\./g, 'Ans.'); // Ensure consistent spacing
content = content.replace(/Step (\d+):/g, '<b>Step $1:</b>'); // Bold step headers if not already

fs.writeFileSync(path, content, 'utf8');
console.log("Cleanup and professionalization of math-data.js completed.");
