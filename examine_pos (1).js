const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// The file currently ends with:
//   }      <- line 1657: closes importantQuestions structure (should close the chapter object)
// ]        <- line 1658: closes the array
// ;        <- end of const declaration
//
// But deep parser says depth is 2, meaning we need 2 more } 
// We need:
//     }        <- closes pyq object (already there at line 1656)
//   }          <- closes chapter data object (already there at line 1657) 
// }            <- closes outer chapter object in array (MISSING)
// ]            <- closes array (line 1658)
//
// Wait - this is NOT inside JSON object; the array element IS the chapter object.
// In the structure, each chapter is: { subject, chapter, importantQuestions, pyq }
// So the ] closes the array, and each {} is a chapter element.
// 
// The depth is 2, meaning either:
// 1. Two chapter objects are not closed
// 2. The entire array has 2 objects unclosed
//
// Looking at the end:
//     }    <- closes pyq object
//   }      <- closes chapter dict 
// ]        <- should close the array
//
// But depth 2 means we need [ { "short" ... } ... { "long" ... } ]
// i.e. one chapter's pyq.short and pyq.long were opened but not closed
// OR the importantQuestions itself is still open
//
// Let's check around position 271273 (the last { before the end)
// which is the { in "pyq": { 

const jsonContent = content.replace(/^const mathData = /, '').replace(/;\s*$/, '');

// Find line numbers for positions around 271273
const before = jsonContent.substring(271150, 271350);
console.log('Content around the last open brace:');
console.log(before);

// Also get the actual line number
const linesUntilPos = jsonContent.substring(0, 271273).split('\n').length;
console.log('\nLine number in file (approx):', linesUntilPos + 1);
