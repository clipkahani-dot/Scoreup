const fs = require('fs');

let jsData = fs.readFileSync('science-data.js', 'utf8');

// Replace style=\"...\" with class=\"educational-diagram\"
jsData = jsData.replace(/style=\\".*?\\"/g, 'class=\\"educational-diagram\\"');

fs.writeFileSync('science-data.js', jsData, 'utf8');
console.log('Updated science-data.js styling');
