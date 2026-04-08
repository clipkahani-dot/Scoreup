const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// The script accidentally introduced unescaped double quotes inside strings.
// Specifically: class="frac", class="num", class="den"
// Let's replace them with escaped versions: class=\"frac\", class=\"num\", class=\"den\"

content = content.replace(/class="frac"/g, 'class=\\"frac\\"');
content = content.replace(/class="num"/g, 'class=\\"num\\"');
content = content.replace(/class="den"/g, 'class=\\"den\\"');
content = content.replace(/class="diagram-float/g, 'class=\\"diagram-float'); // Just in case
content = content.replace(/educational-diagram"/g, 'educational-diagram\\"'); // Just in case

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed unescaped quotes in math-data.js");
