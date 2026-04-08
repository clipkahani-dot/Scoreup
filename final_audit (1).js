const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

/**
 * Standardize fractions like "3/4" or "22 / 7" into the <span> based format.
 */
function standardizeFractions(text) {
    // Regex matches X/Y where X and Y are numbers, possibly with surrounding spaces.
    // It avoids matching things with a leading dot or comma (to avoid touching decimals)
    // and checks if it's already in a tag.
    return text.replace(/(\d+)\s*\/\s*(\d+)/g, (match, num, den, offset, fullText) => {
        // Look back to see if we're in a tag or already in a span
        const pre = fullText.slice(Math.max(0, offset - 40), offset);
        if (pre.includes('num">') || pre.includes('den">') || pre.includes('class="frac"')) {
            return match; 
        }
        return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
    });
}

// Perform simple character fixes for known corruption patterns
let updatedContent = standardizeFractions(content);

// Repair potential degree symbol artifacts if they exist
// Common artifacts for ° in various encodings
updatedContent = updatedContent.replace(//g, '°'); 

fs.writeFileSync(path, updatedContent);
console.log("Successfully performed mathematical audit on math-data.js");
