const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\science-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The issue is that my script inserted unescaped double quotes inside JS strings.
// We need to fix <span class="frac"> -> <span class=\"frac\">
// Or just globally replace class=" with class=\" for the ones I just inserted.

content = content.replace(/class="frac"/g, 'class=\\"frac\\"');
content = content.replace(/class="num"/g, 'class=\\"num\\"');
content = content.replace(/class="den"/g, 'class=\\"den\\"');

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Repaired syntax errors in science-data.js by escaping quotes in .frac tags.");
