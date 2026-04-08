const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The corruption looks like: src=\"<span class=\"frac\"><span class=\"num\">images</span><span class=\"den\">filename.ext</span></span>\"
// We need to support .png, .jpg, .jpeg, .svg, .webp

const corruptionRegex = /src=\\"<span class=\\"frac\\"><span class=\\"num\\">images<\/span><span class=\\"den\\">([\w.]+\.(png|jpg|jpeg|svg|webp))<\/span><\/span>\\"/g;
content = content.replace(corruptionRegex, 'src=\\"images/$1\\"');

// Also cleanup any div wrappers or extra attributes that might have been missed for these extensions
// Using a flexible extension group
const cleanupRegex = /<div align=\\"center\\"><img class=\\"educational-diagram\\" src=\\"(images\/[\w.]+\.(png|jpg|jpeg|svg|webp))\\" alt=\\"[^\\"]*\\" width=\\"\d+\\"><\/div>/g;
content = content.replace(cleanupRegex, '<img src=\\"$1\\" class=\\"educational-diagram\\">');

const cleanupRegex2 = /<img class=\\"educational-diagram\\" src=\\"(images\/[\w.]+\.(png|jpg|jpeg|svg|webp))\\" alt=\\"[^\\"]*\\" width=\\"\d+\\\">/g;
content = content.replace(cleanupRegex2, '<img src=\\"$1\\" class=\\"educational-diagram\\">');

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Fixed all multi-extension image paths in math-data.js (PNG, JPG, SVG, etc.).");
