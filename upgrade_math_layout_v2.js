const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// Regex to match "answer": "..." where the value can contain escaped quotes \"
const answerRegex = /"answer":\s*"((?:[^"\\]|\\.)*)"/g;
const imgRegex = /<img[^>]+>/;

content = content.replace(answerRegex, (match, p1) => {
    if (imgRegex.test(p1)) {
        let text = p1;
        // Extract the img tag
        const imgMatch = text.match(imgRegex);
        if (imgMatch) {
            const imgTag = imgMatch[0];
            // Remove the img tag from its current position
            text = text.replace(imgTag, '');
            
            // Clean up any double <br> or spaces left behind (including those before/after the original img tag)
            // We want to remove the specific spacing that was around the centered image
            text = text.replace(/<br>\s*<br>/g, '<br>');
            text = text.replace(/^(<br>)+|(<br>)+$/g, '');
            
            // Put img at the very beginning of the string value
            return `"answer": "${imgTag}${text}"`;
        }
    }
    return match;
});

// Also ensure the class is updated globally if not already (safeguard)
if (!content.includes('math-diagram-float')) {
    content = content.replace(/class=\\"educational-diagram\\"/g, 'class=\\"math-diagram-float educational-diagram\\"');
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("RE-EXECUTED: Upgraded Mathematics diagram layout to Floating Right (Top Position).");
