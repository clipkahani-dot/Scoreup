const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// The file currently ends with:
//   }    <- closes last chapter (line 1655)
// }      <- EXTRA, unwanted (line 1656)
// ];     <- closes array (line 1657)
//
// We need to remove the extra } on line 1656

// Replace the specific ending
content = content.replace(/(\n  \}\n)\}\n\];$/, '$1\n];');
fs.writeFileSync('math-data.js', content, 'utf8');
console.log('Fixed extra closing brace at end of file.');
