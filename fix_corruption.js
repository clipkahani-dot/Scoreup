const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
const content = fs.readFileSync(FILE_PATH, 'utf8');

// Regex to find the corrupted image paths
// Example: <span class="frac"><span class="num">images</span><span class="den">filename.png</span></span>
const corruptionRegex = /<span class="frac"><span class="num">images<\/span><span class="den">([\w.]+\.png)<\/span><\/span>/g;

const fixedContent = content.replace(corruptionRegex, 'images/$1');

fs.writeFileSync(FILE_PATH, fixedContent, 'utf8');
console.log("Fixed corrupted image paths in math-data.js.");
