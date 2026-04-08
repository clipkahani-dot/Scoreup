const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\science-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The science data uses both double quotes and backticks.
// Example: "answer": " ... "
// Example: "answer": ` ... `

// First, apply the class globally
content = content.replace(/class=\\"educational-diagram\\"/g, 'class=\\"diagram-float educational-diagram\\"');
content = content.replace(/class="educational-diagram"/g, 'class="diagram-float educational-diagram"');

// Regex for double-quoted answers
const answerRegexDQ = /"answer":\s*"((?:[^"\\]|\\.)*)"/g;
// Regex for backtick answers
const answerRegexBT = /"answer":\s*`([^`]+)`/g;

const imgRegex = /<img[^>]+>/;

function processMatch(match, p1, quoteType) {
    if (imgRegex.test(p1)) {
        let text = p1;
        const imgMatch = text.match(imgRegex);
        if (imgMatch) {
            const imgTag = imgMatch[0];
            text = text.replace(imgTag, '');
            // Clean up spacing
            text = text.replace(/<br>\s*<br>/g, '<br>');
            text = text.replace(/^(<br>)+|(<br>)+$/g, '');
            // Put img at front
            if (quoteType === 'DQ') return `"answer": "${imgTag}${text}"`;
            if (quoteType === 'BT') return `"answer": \`${imgTag}${text}\``;
        }
    }
    return match;
}

content = content.replace(answerRegexDQ, (m, p1) => processMatch(m, p1, 'DQ'));
content = content.replace(answerRegexBT, (m, p1) => processMatch(m, p1, 'BT'));

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Upgraded Science diagram layout to Floating Right (Standardized).");
