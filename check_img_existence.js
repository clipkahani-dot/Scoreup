const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');
const imgDir = 'images/';

// Find all src="images/..." references
const regex = /src=\\"images\/([^\\"]+)\\"/g;
let match;
const uniqueImages = new Set();
while ((match = regex.exec(content)) !== null) {
    uniqueImages.add(match[1]);
}

console.log(`Total unique images referenced: ${uniqueImages.size}`);
const missing = [];
uniqueImages.forEach(img => {
    if (!fs.existsSync(imgDir + img)) {
        missing.push(img);
    }
});

if (missing.length > 0) {
    console.log("CRITICAL: Missing images found!");
    missing.forEach(m => console.log(` - ${m}`));
} else {
    console.log("All referenced images exist in the images/ directory.");
}
