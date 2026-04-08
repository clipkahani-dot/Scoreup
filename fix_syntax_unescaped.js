const fs = require('fs');

const files = ['math-data.js', 'science-data.js', 'hindi-data.js', 'non-hindi-data.js', 'sanskrit-data.js', 'english-data.js'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Fix unescaped educational-diagram class
    // Find <img class="educational-diagram" and change to <img class=\"educational-diagram\"
    content = content.replace(/class="educational-diagram"/g, 'class=\\"educational-diagram\\"');

    fs.writeFileSync(file, content);
    console.log(`Successfully fixed syntax in ${file}`);
});
