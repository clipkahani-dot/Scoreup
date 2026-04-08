const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// We need to find every answer string and if it contains an <img> tag, move it to the very start of the string value.
// And update its class.

// First, let's update the class globally.
content = content.replace(/class=\\"educational-diagram\\"/g, 'class=\\"math-diagram-float educational-diagram\\"');

// Now, move the <img> tag to the FRONT of the "answer" value.
// We'll target "answer": " ... <img ...> ... "
// We'll use a script to iterate over the matches to handle multiple <br> tags cleanly.

const answerRegex = /"answer":\s*"([^"]+)"/g;
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
            // Clean up any double <br> or spaces left behind
            text = text.replace(/(<br>)+/g, '<br>').replace(/^(<br>)+|(<br>)+$/g, '');
            // Put img at the very beginning
            return `"answer": "${imgTag}${text}"`;
        }
    }
    return match;
});

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Upgraded Mathematics diagram layout to Floating Right.");
