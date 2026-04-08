const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// 1. Add class="educational-diagram" to all img tags if they don't have it
content = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (!p1.includes('class=')) {
        return `<img class="educational-diagram"${p1}>`;
    }
    return match;
});

// 2. Ensure <pre> blocks have dark text to be visible on light background in dark mode
content = content.replace(/<pre style='([^']+)'/g, (match, p1) => {
    if (!p1.includes('color:')) {
        return `<pre style='color: #1e293b; ${p1}'`;
    }
    return match;
});

fs.writeFileSync('math-data.js', content);
console.log("Successfully updated images and pre blocks for dark mode visibility.");
