const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
const content = fs.readFileSync(FILE_PATH, 'utf8');

// Use a regex to extract the data array
const dataMatch = content.match(/const mathData = (\[[\s\S]*\]);/);
if (!dataMatch) {
    console.error("Could not find mathData array!");
    process.exit(1);
}

let mathData;
try {
    mathData = eval(dataMatch[1]);
} catch (e) {
    console.error("Error parsing mathData:", e);
    process.exit(1);
}

function professionalize(str) {
    if (typeof str !== 'string') return str;
    
    // Skip if it contains a span frac already? 
    // Maybe not, we might want to fix remaining slashes inside.
    
    let oldStr;
    let newStr = str;
    
    // Pattern: (expr1) / (expr2)
    // We do it iteratively to handle nested ones if any (though regex + replacement is tricky)
    do {
        oldStr = newStr;
        newStr = newStr.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '<span class="frac"><span class="num">$1</span><span class="den">$2</span></span>');
    } while (newStr !== oldStr);

    // Pattern: simple_expr / simple_expr (e.g. 1 / 2, x / y, AB / CD)
    // We need to avoid board codes like [12 (A) I/II] 
    // So we avoid slashes immediately followed by "I", "II", or inside [ ]
    
    // Negative lookbehind for [ or [space and lookahead for I, II, or ] is not always supported in all Node versions, 
    // but the following is a safe heuristic for math contexts:
    // Pattern: \s([√\w]+)\s*\/\s*([√\w]+)\s
    
    newStr = newStr.replace(/\b([√\d\w.°-]+)\s*\/\s*([√\d\w.°-]+)\b/g, (match, num, den) => {
        // Skip board codes like I/II or II/I
        if (num === 'I' || num === 'II' || den === 'I' || den === 'II') return match;
        // Skip if inside a board code tag?
        return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
    });

    // Special case for sin θ = लंब / कर्ण (Hindi words)
    // We catch common Hindi math terms
    const hindiMathTerms = ['लंब', 'आधार', 'कर्ण', 'अंश', 'हर', 'भागफल', 'शेषफल', 'पहली संख्या', 'दूसरी संख्या', 'HCF', 'LCM', 'परिणामों की संख्या', 'कुल परिणामों की संख्या', 'घटना E के अनुकूल परिणामों की संख्या'];
    
    hindiMathTerms.forEach(term => {
        const regexNum = new RegExp(`(${term})\\s*\\/\\s*([√\\w\\u0900-\\u097F\\s]+)`, 'g');
        newStr = newStr.replace(regexNum, (match, n, d) => {
             // Avoid double wrapping if already wrapped by previous regex
             if (match.includes('span class')) return match;
             return `<span class="frac"><span class="num">${n}</span><span class="den">${d.trim()}</span></span>`;
        });
    });

    return newStr;
}

function processObject(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = professionalize(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            processObject(obj[key]);
        }
    }
}

mathData.forEach(processObject);

const updatedContent = "const mathData = " + JSON.stringify(mathData, null, 4) + ";\n";

fs.writeFileSync(FILE_PATH, updatedContent, 'utf8');
console.log("Professionalized math-data.js successfully.");
