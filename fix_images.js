const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The corruption looks like: src=\"<span class=\"frac\"><span class=\"num\">images</span><span class=\"den\">filename.png</span></span>\"
// We need to replace it with: src=\"images/filename.png\"

const corruptionRegex = /src=\\"<span class=\\"frac\\"><span class=\\"num\\">images<\/span><span class=\\"den\\">([\w.]+\.png)<\/span><\/span>\\"/g;
const fixedContent = content.replace(corruptionRegex, 'src=\\"images/$1\\"');

fs.writeFileSync(FILE_PATH, fixedContent, 'utf8');
console.log("Fixed corrupted image paths in math-data.js.");
