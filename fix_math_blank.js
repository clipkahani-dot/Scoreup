const fs = require('fs');

const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

// The corrupted Chapter 8 start looks like:
// {
//     "chapter": "त्रिकोणमिति का परिचय",

const corruptedStart = '{\n        "chapter": "त्रिकोणमिति का परिचय",';
const fixedStart = '{\n        "subject": "Mathematics",\n        "class_level": "10",\n        "chapter": "त्रिकोणमिति का परिचय",';

if (content.includes(corruptedStart)) {
    content = content.replace(corruptedStart, fixedStart);
    fs.writeFileSync(path, content);
    console.log("Successfully restored Mathematics subject and class_level to Chapter 8.");
} else {
    // Try with different whitespace if direct match fails
    const corruptedStartRegex = /\{\s*"chapter":\s*"त्रिकोणमिति का परिचय",/;
    if (corruptedStartRegex.test(content)) {
        content = content.replace(corruptedStartRegex, '{\n        "subject": "Mathematics",\n        "class_level": "10",\n        "chapter": "त्रिकोणमिति का परिचय",');
        fs.writeFileSync(path, content);
        console.log("Successfully restored Mathematics subject and class_level to Chapter 8 (regex).");
    } else {
        console.error("Could not find the corrupted start of Chapter 8.");
    }
}
