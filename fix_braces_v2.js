const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// Remove the bogus double-closing brace that was incorrectly added
// The file ends with:
//     }   <- closes pyq block
//   }     <- closes last chapter object 
// }}      <- the bogus extra braces
// ];
// 
// Fix: replace }} with } (just one extra closing brace to close the chapter wrapper)
content = content.replace(/\n}}\n\];$/, '\n}\n];');
fs.writeFileSync('math-data.js', content, 'utf8');
console.log('Removed extra brace. Done.');
