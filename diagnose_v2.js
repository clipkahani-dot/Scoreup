const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// The file currently ends with:
//         }         <- closes last question object
//       ]           <- closes importantQuestions.short array
//     },            <- closes importantQuestions object
//     "pyq": {
//       "short": [],
//       "long": []
//     }             <- closes pyq object
//   }               <- closes the inner chapter data object
//                   <- blank line (line 1656)
// ];
//
// But we need one more } to close the outer chapter wrapper in the array
// The structure for each chapter is:
// {                       <- opens chapter object in array
//   "subject": ...,
//   "chapter": ...,
//   "importantQuestions": { ... },
//   "pyq": { ... }
// }                       <- closes chapter object
//
// The } on line 1655 closes the inner object (importantQuestions body)
// Wait - let me re-examine the structure. The chapter objects in the array look like:
// {
//   "subject": "Mathematics",
//   "class_level": "10",
//   "chapter": "...",
//   "importantQuestions": { "short": [...], "long": [...] },
//   "pyq": { "short": [...], "long": [...] }
// }
//
// So the } on line 1655 ('  }') closes the chapter data object itself,
// but this object IS the array element, so it just needs ]; after.
// 
// HOWEVER, looking at the error: Unexpected token ';' at ];
// means the ] is invalid too, which means there's an unclosed { somewhere before.
//
// Let me check the last chapter's opening

const idx = content.lastIndexOf('"chapter": "प्रायिकता"');
console.log('Last chapter index:', idx);
console.log('Context 300 chars before chapter end:');
console.log(content.substring(idx - 50, idx + 100));

const subjectMatches = content.match(/"subject":\s*"Mathematics"/g);
console.log('\n\nTotal "subject" fields:', subjectMatches ? subjectMatches.length : 0);
