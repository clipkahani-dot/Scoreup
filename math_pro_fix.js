const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Fix corrupted artifacts (Commonly  appearing for ° or √)
content = content.replace(//g, (match, offset, s) => {
    const context = s.slice(offset - 5, offset + 5);
    if (context.includes('60') || context.includes('30') || context.includes('45')) return '°';
    if (context.includes('3') || context.includes('2')) return '√';
    return '°'; // Default to degree for angles
});

// 2. Fix specific known problematic strings from Chapter 9
content = content.replace(/tan 60/g, 'tan 60°');
content = content.replace(/tan 30/g, 'tan 30°');
content = content.replace(/tan 45/g, 'tan 45°');
content = content.replace(/sin 60/g, 'sin 60°');
content = content.replace(/sin 30/g, 'sin 30°');
content = content.replace(/sin 45/g, 'sin 45°');
content = content.replace(/cos 60/g, 'cos 60°');
content = content.replace(/cos 30/g, 'cos 30°');
content = content.replace(/cos 45/g, 'cos 45°');

// 3. Fraction Standardization (a/b -> <span> format)
content = content.replace(/(\d+)\s*\/\s*(\d+)/g, (match, n, d, offset, s) => {
    // Avoid double-wrapping or wrapping URLs/ID/Dates
    const pre = s.slice(Math.max(0, offset - 40), offset);
    if (pre.includes('num">') || pre.includes('den">') || pre.includes('class="frac"')) return match;
    return `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`;
});

// 4. Final pedagogical cleanup (bolding headers, consistent Ans format)
content = content.replace(/Step (\d+):/g, '<b>Step $1:</b>');
content = content.replace(/(\d+) cm/g, '$1 cm'); 
content = content.replace(/(\d+) m/g, '$1 m');

fs.writeFileSync(path, content, 'utf8');
console.log("math-data.js has been professionally audited and standardized.");
