const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

function toFrac(num, den) {
    return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

// 1. First, we need to extract only the strings in question/answer pairs to avoid messing with JS structure
// Using JSON.parse/stringify is dangerous if the file exports a complex object or has multiline strings.
// But math-data.js is a large JS file with nested objects. 
// A more targeted tool is needed or we use a temporary placeholder strategy.

// Targeted regex for common instruction phrases to parenthesize
const instructions = [
    "सभी पदों को sin θ और cos θ में बदलने पर",
    "हर (Denominator) का एलसीएम लेने पर",
    "पदों को पलटने पर",
    "यहाँ (cos θ - sin θ) में से माइनस (-) कॉमन लेकर उसे -(sin θ - cos θ) लिख सकते हैं",
    "अब एलसीएम [sin θ cos θ (sin θ - cos θ)] लेने पर",
    "अंश में (a³ - b³) = (a - b)(a² + b² + ab) का सूत्र लगाने पर",
    "(sin θ - cos θ) से (sin θ - cos θ) कट जाएगा",
    "चूँकि sin² θ + cos² θ = 1 होता है",
    "अब दोनों को अलग-अलग भाग देने पर",
    "पूरक कोणों (Complementary angles) के सूत्र से: tan(90° - θ) = cot θ",
    "tan 48° को tan(90° - 42°) और tan 67° को tan(90° - 23°) लिखने पर",
    "पदों को एक साथ व्यवस्थित करने पर",
    "चूँकि tan θ . cot θ = 1 होता है",
    "हम जानते हैं कि tan θ = cot(90° - θ)",
    "इसलिए tan 2A की जगह cot(90° - 2A) रखने पर",
    "दोनों तरफ कोणों की तुलना करने पर",
    "एलसीएम (LCM) लेने पर",
    "(1 + sin A)² को (a+b)² के सूत्र से खोलने पर",
    "अंश में से 2 कॉमन (common) लेने पर",
    "अंश और हर से (1 + sin A) कट जाएगा",
    "रूट के अंदर हर (Denominator) का परिमेयकरण (Rationalization) करने के लिए (1 + cos θ) से अंश और हर में गुणा करने पर",
    "वर्गमूल (Square root) से स्क्वायर हटने पर",
    "इन्हें sin और cos में बदलने पर",
    "a² - b² = (a - b)(a + b) सूत्र से हर को तोड़ने पर",
    "सबस पहले पूरक कोणों (Complementary angles) के सूत्र लगाएंगे",
    "अब इन सभी मानों को दिए गए व्यंजक (Expression) में रखने पर",
    "चूँकि tan A × cot A = 1 होता है",
    "हम जानते हैं कि sin A × cosec A = 1 और cos A × sec A = 1 होता है",
    "cosec² A = 1 + cot² A और sec² A = 1 + tan² A रखने पर",
    "अंश में से sin θ और हर में से cos θ कॉमन (common) लेने पर",
    "हम जानते हैं कि sin² θ = 1 - cos² θ होता है। इसे अंश में रखने पर",
    "दोनों तरफ वर्ग करने पर",
    "माना 1 पेंसिल की कीमत",
    "दोनों तरफ 10 से गुणा करने पर",
    "समीकरण (i) और (ii) को जोड़ने पर",
    "समीकरण (i) में x का मान रखने पर"
];

// Helper to escape bracket-heavy text
function escapeRegex(text) {
    return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// Targeted string transformation inside the file
// This regex matches "key": "value" where key is question or answer
const stringRegex = /"(question|answer)": "(.*)"/g;

let count = 0;
let instrCount = 0;

let newContent = content.replace(stringRegex, (match, key, value) => {
    // Skip if already has .frac to avoid double conversion
    if (value.includes('class="frac"') || value.includes('images/')) {
        return match;
    }

    let newValue = value;

    // 1. Identify and convert Numeric Fractions (e.g. 4/3, 12/5, 1/2)
    // Matches digits / digits, ensuring not part of a date or year like [19 (A) II]
    // Negative lookbehind for [ and digits to avoid years
    // but in JS regexes we look for word boundaries and specific structures
    
    // Pattern: Digit(s) / Digit(s)
    // We explicitly exclude [XX (A) X] contexts or date contexts
    newValue = newValue.replace(/(\d+)\s*\/\s*(\d+)/g, (f, n, d) => {
        // Simple safety: if it looks like a year part (e.g. 19 (A) I), skip
        // In the data, years are in [...] or follow specific markers.
        // We'll proceed if it's math-like.
        count++;
        return toFrac(n, d);
    });

    // 2. Identify and convert Radical Fractions (e.g. √3/2)
    newValue = newValue.replace(/√(\d+)\s*\/\s*(\d+)/g, (f, n, d) => {
        count++;
        return toFrac(`√${n}`, d);
    });

    // 3. Identify and convert common Variable Fractions (e.g. h/20, x/y)
    // Use word boundaries for simple ones
    const varFracs = [
        ['h', '20'], ['AB', 'AC'], ['AB', 'BC'], ['AC', 'BC'], ['x', 'y'], ['P(x, y)', '2'], ['h', 'x']
    ];
    varFracs.forEach(([n, d]) => {
        const r = new RegExp(`\\b${n}\\s*\\/\\s*${d}\\b`, 'g');
        if (r.test(newValue)) {
            newValue = newValue.replace(r, toFrac(n, d));
            count++;
        }
    });

    // 4. Instructions in brackets
    instructions.forEach(ins => {
        if (newValue.includes(ins) && !newValue.includes(`(${ins})`)) {
            newValue = newValue.split(ins).join(`(${ins})`);
            instrCount++;
        }
    });

    // 5. Line break conversion \n to <br> if it hasn't been done
    newValue = newValue.split('\\n').join('<br>');

    return `"${key}": "${newValue}"`;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`SUCCESS: Global update applied.`);
console.log(`- Fractions converted: ${count}`);
console.log(`- Instructions parenthesized: ${instrCount}`);
console.log(`- File updated: math-data.js`);
