const fs = require('fs');

// === COMPREHENSIVE MATH-DATA.JS REPAIR SCRIPT ===
// Problems identified:
// 1. Duplicate question at line 1092-1097 (orphaned, outside any chapter)
// 2. Missing opening { for chapter "वृत्त"
// 3. All images need diagram-float class and proper paths

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// === FIX 1: Remove the duplicate orphaned question block between lines 1091-1098 ===
// The block starts after the closing }, of chapter 9 and before "chapter": "वृत्त"
// Pattern: after }, (end of chapter 9 at line 1091), there's a stray { ... },
// followed by the chapter field directly without a wrapping {

// We'll find the specific orphaned block and remove it
// Find the pattern: },\n{\n  "question": ... \n}\n}, (the extra duplicate question)

// The duplicate block starts after line 1091 (},\n} for ch9 long section)
// and ends at line 1098 with another },
// Then line 1099 is "chapter": "वृत्त" which needs to be { "chapter": "वृत्त"

// Step 1: Find and remove the orphaned question block
// Pattern: after the closing of ch9 section (}}\n},\n{\n        "question":...)
// and replace with nothing

const orphanPattern = /},\n\{\n        "question": "Q4\. [^"]*\[Years: 11 \(A\)[^]*?"\n      \}\n    \]\n  \}\n\},\n/;

// More precise: the duplicate content is lines 1092-1098 in the file.
// Let's surgically find the duplicate by searching for this exact text:

const orphanStart = '\n{\n        "question": "Q4. एक बहुमंजिला भवन के शिखर से देखने पर एक 8 मी० ऊँचे भवन के शिखर और तल के अवनमन कोण क्रमशः 30° और 45° हैं। बहुमंजिला भवन की ऊँचाई और दोनों भवनों के बीच की दूरी ज्ञात कीजिए। [Years: 11 (A), 16 (C), 20 (A) II, 25 (A) II]",';

// Check how many times this question appears  
const occurrences = (content.split(orphanStart).length - 1);
console.log(`Q4 multistorey occurrences: ${occurrences}`);

// === FIX 2: The "chapter": "वृत्त" at line 1099 is missing its opening { ===
// The correct pattern should be:  ,\n{\n  "chapter": "वृत्त"
// But currently it's:            },\n  "chapter": "वृत्त"

// Let's check what's around the issue:
const circleIdx = content.indexOf('"chapter": "वृत्त"');
console.log(`Position of chapter वृत्त: ${circleIdx}`);
console.log(`Context before it (50 chars): |${content.substring(circleIdx - 50, circleIdx)}|`);

fs.writeFileSync('debug_math.txt', content.substring(circleIdx - 200, circleIdx + 200), 'utf8');
console.log("Written debug context to debug_math.txt");
