const fs = require('fs');

const files = ['math-data.js', 'science-data.js', 'hindi-data.js', 'non-hindi-data.js', 'sanskrit-data.js', 'english-data.js'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. Add class="educational-diagram" to all img tags
    content = content.replace(/<img([^>]+)>/g, (match, p1) => {
        if (!p1.includes('class=')) {
            return `<img class="educational-diagram"${p1}>`;
        }
        return match;
    });

    // 2. Ensure <pre> blocks have dark text
    content = content.replace(/<pre style='([^']+)'/g, (match, p1) => {
        if (!p1.includes('color:')) {
            return `<pre style='color: #1e293b; ${p1}'`;
        }
        return match;
    });
    
    // Also handle double quotes for pre style
    content = content.replace(/<pre style="([^"]+)"/g, (match, p1) => {
        if (!p1.includes('color:')) {
            return `<pre style="color: #1e293b; ${p1}"`;
        }
        return match;
    });

    fs.writeFileSync(file, content);
    console.log(`Successfully updated ${file}`);
});
