const fs = require('fs');

const FILE_PATH = 'C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\science-data.js';
let content = fs.readFileSync(FILE_PATH, 'utf8');

// The chapters are within an array const scienceData = [...];
// We want to target only the first 5 chapters (Physics section).
// Instead of index, we'll use the chapter titles to find the boundaries.
// PHYSICS CHAPTERS:
// 1. "प्रकाश - परावर्तन तथा अपवर्तन"
// 2. "मानव नेत्र तथा रंगबिरंगा संसार"
// 3. "विद्युत"
// 4. "विद्युत धारा के चुंबकीय प्रभाव"
// 5. "ऊर्जा के स्रोत"

// boundary line: "ऊर्जा के स्रोत" ends around line 600.
// We'll perform replacement in the first 170kB of the file (safety buffer).
const PHYSICS_CUTOFF = content.indexOf('"chapter": "रासायनिक अभिक्रियाएँ एवं समीकरण"');
let physicsPart = content.substring(0, PHYSICS_CUTOFF);
const restPart = content.substring(PHYSICS_CUTOFF);

// Regex for fractions: [A-Z0-9'] / [A-Z0-9']
// Handled: 1/f, R/2, AB/A'B', 1.5/2 (optional decimals)
const fracRegex = /([A-Za-z\d'.]+(?:\s*[A-Za-z\d'.]+)*)\s*\/\s*([A-Za-z\d'.]+(?:\s*[A-Za-z\d'.]+)*)/g;

physicsPart = physicsPart.replace(fracRegex, (match, num, den) => {
    // 1. Protect image paths (usually images/ or .png/.jpg etc.)
    if (num.includes('images') || den.includes('.png') || den.includes('.jpg') || den.includes('.svg')) {
        return match;
    }
    
    // 2. Protect HTML tags and class names
    if (num.includes('<') || num.includes('>') || num.includes('=') || num.includes('"')) {
        return match;
    }

    // 3. Special case: protect things that don't look like math or geometric labels
    // e.g., "और / तथा" (though shouldn't match fracRegex)
    
    return `<span class="frac"><span class="num">${num.trim()}</span><span class="den">${den.trim()}</span></span>`;
});

fs.writeFileSync(FILE_PATH, physicsPart + restPart, 'utf8');
console.log("Professionalized Physics fractions in science-data.js (Chapters 1-5).");
