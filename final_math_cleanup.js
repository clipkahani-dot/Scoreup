const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// Pattern: <div align=\"center\"><img class=\"educational-diagram\" src=\"images/filename.png\" alt=\"text\" width=\"400\"></div>
// To find and replace with cleaner version: <img src=\"images/filename.png\" class=\"educational-diagram\">
// Note: We'll keep it simple for now as the size can be controlled by CSS.

const cleanupRegex = /<div align=\\"center\\"><img class=\\"educational-diagram\\" src=\\"(images\/[\w.]+\.png)\\" alt=\\"[^\\"]*\\" width=\\"\d+\\"><\/div>/g;
content = content.replace(cleanupRegex, '<img src=\\"$1\\" class=\\"educational-diagram\\">');

// Also catch any that don't have the div but have the other attributes
const cleanupRegex2 = /<img class=\\"educational-diagram\\" src=\\"(images\/[\w.]+\.png)\\" alt=\\"[^\\"]*\\" width=\\"\d+\\">/g;
content = content.replace(cleanupRegex2, '<img src=\\"$1\\" class=\\"educational-diagram\\">');

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Cleaned up image tags in math-data.js.");
