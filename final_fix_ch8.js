const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

function toFrac(num, den) {
    return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

function processAnswer(text) {
    if (!text) return text;
    
    // 1. First, replace all slash fractions that are simple like a/b or √a/b or (expr)/b
    // We do this BEFORE instruction brackets to avoid splitting tags
    
    let res = text;
    
    // Handle specific math terms with slashes to ensure no misses
    const commonPatterns = [
        ['4', '3'], ['3', '5'], ['4', '5'], ['12', '5'], ['8', '15'], ['5', '13'], ['12', '13'], ['5', '12'], ['13', '5'], ['3', '4'], 
        ['7', '25'], ['24', '25'], ['18', '5'], ['6', '5'], ['18', '6'], ['1', '2'], ['3', '1'], ['√3', '2'], ['1', '√3'], ['3', '√3'],
        ['1', '3'], ['√3', '1'], ['4', '1'], ['8', '√3'], ['16', '√3'], ['24', '√3'], ['7', 'x'], ['h', 'x'], ['2', '3'],
        ['sin θ', 'cos θ'], ['cos θ', 'sin θ'], ['1', 'cos θ'], ['1', 'sin θ'], ['sin² θ', 'cos² θ'], ['cos² θ', 'sin² θ'],
        ['tan θ', '1 - cot θ'], ['cot θ', '1 - tan θ'], ['sin θ', 'कर्ण'], ['लंब', 'आधार'], ['लंब', 'कर्ण'], ['आधार', 'कर्ण'],
        ['1', 'cos A'], ['1', 'sin A'], ['cos A', '1 + sin A'], ['1 + sin A', 'cos A'], ['1 + cos θ', 'sin θ'],
        ['(1 - sin θ)', '(1 + sin θ)'], ['(1 - sin θ)²', 'cos² θ'], ['(1 - sin θ)²', '(1 - sin² θ)'],
        ['sin² θ', 'cos θ (sin θ - cos θ)'], ['cos² θ', 'sin θ (cos θ - sin θ)'], ['cos² θ', 'sin θ (sin θ - cos θ)'],
        ['sin³ θ - cos³ θ', 'sin θ cos θ (sin θ - cos θ)'], ['(1 + sin θ cos θ)', '(sin θ cos θ)'],
        ['(sin θ cos θ)', '(sin θ cos θ)'], ['(sin θ - 2 sin³ θ)', '(2 cos³ θ - cos θ)'],
        ['sin θ (1 - 2 sin² θ)', 'cos θ (2 cos² θ - 1)'], ['sin θ (2 cos² θ - 1)', 'cos θ (2 cos² θ - 1)'],
        ['sin θ [1 - 2(1 - cos² θ)]', 'cos θ (2 cos² θ - 1)'], ['sin θ', 'cos θ'], ['2', '3']
    ];

    // Replace all occurrences of these specific fractions
    commonPatterns.forEach(([n, d]) => {
        // Match either "n/d", "n / d", "(n) / (d)"
        const escapedN = n.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const escapedD = d.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`\\(?${escapedN}\\)?\\s*\\/\\s*\\(?${escapedD}\\)?`, 'g');
        res = res.replace(regex, toFrac(n, d));
    });

    // 2. Wrap instructions in brackets
    const instructions = [
        "सभी पदों को sin θ और cos θ में बदलने पर",
        "हर (Denominator) का एलसीएम लेने पर",
        "पदों को पलटने पर",
        "यहाँ (cos θ - sin θ) में से माइनस (-) कॉमन लेकर उसे -(sin θ - cos θ) लिख सकते हैं",
        "अब एलसीएम [sin θ cos θ (sin θ - cos θ)] लेने पर",
        "अंश में (a³ - b³) = (a - b)(a² + b² + ab) का सूत्र लगाने पर",
        "अंश में सूत्र (a³ - b³) = (a - b)(a² + b² + ab) लगाने पर",
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
        "a² - b² = (a - b)(a - b) सूत्र से हर को तोड़ने पर",
        "a² - b² = (a - b)(a + b) सूत्र से हर को तोड़ने पर",
        "सबस पहले पूरक कोणों (Complementary angles) के सूत्र लगाएंगे",
        "अब इन सभी मानों को दिए गए व्यंजक (Expression) में रखने पर",
        "चूँकि tan A × cot A = 1 होता है",
        "हम जानते हैं कि sin A × cosec A = 1 और cos A × sec A = 1 होता है",
        "cosec² A = 1 + cot² A और sec² A = 1 + tan² A रखने पर",
        "अंश में से sin θ और हर में से cos θ कॉमन (common) लेने पर",
        "हम जानते हैं कि sin² θ = 1 - cos² θ होता है। इसे अंश में रखने पर",
        "पाइथागोरस प्रमेय से: कर्ण (Hypotenuse) = √(लंब² + आधार²)",
        "दिए गए व्यंजक में मान रखने पर",
        "एलसीएम लेने पर"
    ];

    instructions.forEach(ins => {
        // Avoid double wrapping if already wrapped
        if (!res.includes(`(${ins})`)) {
            res = res.split(ins).join(`(${ins})`);
        }
    });

    // 3. Fix the \n issue. Replace any literal \n or escaped \\n with <br>
    res = res.replace(/\\n/g, '<br>');
    res = res.replace(/\n/g, '<br>');

    // Final cleanup of any potential leftover artifacts from screenshot
    res = res.split('<br>=').join('<br> ='); // Space after = for clarity if needed
    
    return res;
}

// 4. Manual update of Chapter 8 Data to ensure it's clean
const pyqData = {
    short: [
        {
            question: "यदि tan θ = 4/3 हो, तो (3 sin θ + 2 cos θ) / (3 sin θ - 2 cos θ) का मान ज्ञात करें। [19 (A) I]",
            answer: processAnswer("दिया है: tan θ = 4/3\nहम जानते हैं कि tan θ = लंब (Perpendicular) / आधार (Base)\nमाना लंब = 4k, और आधार = 3k\nपाइथागोरस प्रमेय से: कर्ण (Hypotenuse) = √(लंब² + आधार²)\nकर्ण = √((4k)² + (3k)²) = √(16k² + 9k²) = √(25k²) = 5k\n\n<div align=\"center\"><img src=\"images/math_ch8_pyq_q1_right_triangle.png\" alt=\"Right Triangle\" width=\"400\"></div>\n\nअब, sin θ = लंब / कर्ण = 4k / 5k = 4/5\ncos θ = आधार / कर्ण = 3k / 5k = 3/5\nदिए गए व्यंजक में मान रखने पर:\n= [ 3(4/5) + 2(3/5) ] / [ 3(4/5) - 2(3/5) ]\n= [ 12/5 + 6/5 ] / [ 12/5 - 6/5 ]\n= (18/5) / (6/5)\n= 18 / 6 = 3. Ans.")
        },
        {
            question: "सिद्ध करें कि: tan 48° . tan 23° . tan 42° . tan 67° = 1 [16 (A) I, 20 (A) II, 22 (A) I]",
            answer: processAnswer("L.H.S. = tan 48° . tan 23° . tan 42° . tan 67°\nपूरक कोणों (Complementary angles) के सूत्र से: tan(90° - θ) = cot θ\ntan 48° को tan(90° - 42°) और tan 67° को tan(90° - 23°) लिखने पर:\n= tan(90° - 42°) . tan 23° . tan 42° . tan(90° - 23°)\n= cot 42° . tan 23° . tan 42° . cot 23°\nपदों को एक साथ व्यवस्थित करने पर:\n= (tan 42° . cot 42°) . (tan 23° . cot 23°)\nचूँकि tan θ . cot θ = 1 होता है:\n= 1 × 1\n= 1 = R.H.S. Proved.")
        },
        {
            question: "यदि tan 2A = cot(A - 18°), जहाँ 2A एक न्यून कोण है, तो A का मान ज्ञात कीजिए। [13 (A), 13 (C), 19 (A) II, 23 (A) II]",
            answer: processAnswer("दिया है: tan 2A = cot(A - 18°)\nहम जानते हैं कि tan θ = cot(90° - θ)\nइसलिए tan 2A की जगह cot(90° - 2A) रखने पर:\ncot(90° - 2A) = cot(A - 18°)\nदोनों तरफ कोणों की तुलना करने पर:\n90° - 2A = A - 18°\n=> 90° + 18° = A + 2A\n=> 108° = 3A\n=> A = 108° / 3\n=> A = 36°. Ans.")
        },
        {
            question: "सिद्ध करें कि: cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A [12 (A), 13 (A), 13 (C), 16 (A) I, 18 (A) I, 19 (A) II]",
            answer: processAnswer("L.H.S. = cos A / (1 + sin A) + (1 + sin A) / cos A\nएलसीएम (LCM) लेने पर:\n= [ cos² A + (1 + sin A)² ] / [ cos A (1 + sin A) ]\n(1 + sin A)² को (a+b)² के सूत्र से खोलने पर:\n= [ cos² A + 1 + sin² A + 2 sin A ] / [ cos A (1 + sin A) ]\nचूँकि sin² A + cos² A = 1 होता है:\n= [ 1 + 1 + 2 sin A ] / [ cos A (1 + sin A) ]\n= [ 2 + 2 sin A ] / [ cos A (1 + sin A) ]\nअंश में से 2 कॉमन (common) लेने पर:\n= 2(1 + sin A) / [ cos A (1 + sin A) ]\nअंश और हर से (1 + sin A) कट जाएगा:\n= 2 / cos A\n= 2 sec A = R.H.S. Proved.")
        },
        {
            question: "सिद्ध करें कि: √(1 + cos θ) / (1 - cos θ) = (1 + cos θ) / sin θ [11 (C), 19 (C), 25 (A) I]",
            answer: processAnswer("L.H.S. = √(1 + cos θ) / (1 - cos θ)\nरूट के अंदर हर (Denominator) का परिमेयकरण (Rationalization) करने के लिए (1 + cos θ) से अंश और हर में गुणा करने पर:\n= √ [ (1 + cos θ)(1 + cos θ) / (1 - cos θ)(1 + cos θ) ]\n= √ [ (1 + cos θ)² / (1 - cos² θ) ]\nचूँकि 1 - cos² θ = sin² θ होता है:\n= √ [ (1 + cos θ)² / sin² θ ]\nवर्गमूल (Square root) से स्क्वायर हटने पर:\n= (1 + cos θ) / sin θ = R.H.S. Proved.")
        },
        {
            question: "मान निकालें: 2 tan² 45° + cos² 30° - sin² 60° [11 (A), 12 (A), 13 (A), 15 (C), 19 (C)]",
            answer: processAnswer("हल:\nहम जानते हैं कि: tan 45° = 1, cos 30° = √3/2, और sin 60° = √3/2\nमान रखने पर:\n= 2(1)² + (√3 / 2)² - (√3 / 2)²\n= 2(1) + 3/4 - 3/4\n+3/4 और -3/4 आपस में कट जाएँगे:\n= 2. Ans.")
        },
        {
            question: "सिद्ध करें कि: (sec θ - tan θ)² = (1 - sin θ) / (1 + sin θ) [15 (A) II, 20 (A) II]",
            answer: processAnswer("L.H.S. = (sec θ - tan θ)²\nइन्हें sin और cos में बदलने पर:\n= (1 / cos θ - sin θ / cos θ)²\n= ((1 - sin θ) / cos θ)²\n= (1 - sin θ)² / cos² θ\nचूँकि cos² θ = 1 - sin² θ होता है:\n= (1 - sin θ)² / (1 - sin² θ)\na² - b² = (a - b)(a + b) सूत्र से हर को तोड़ने पर:\n= [ (1 - sin θ)(1 - sin θ) ] / [ (1 - sin θ)(1 + sin θ) ]\nअंश और हर से (1 - sin θ) कट जाएगा:\n= (1 - sin θ) / (1 + sin θ) = R.H.S. Proved.")
        }
    ],
    long: [
        {
            question: "सिद्ध करें: tan θ / (1 - cot θ) + cot θ / (1 - tan θ) = 1 + sec θ cosec θ [20 (A) I, 21 (A) I, 25 (A) II]",
            answer: processAnswer("L.H.S. = tan θ / (1 - cot θ) + cot θ / (1 - tan θ)\nसभी पदों को sin θ और cos θ में बदलने पर:\n= (sin θ / cos θ) / (1 - cos θ / sin θ)  +  (cos θ / sin θ) / (1 - sin θ / cos θ)\nहर (Denominator) का एलसीएम लेने पर:\n= (sin θ / cos θ) / ((sin θ - cos θ) / sin θ)  +  (cos θ / sin θ) / ((cos θ - sin θ) / cos θ)\nपदों को पलटने पर:\n= (sin² θ) / [cos θ (sin θ - cos θ)]  +  (cos² θ) / [sin θ (cos θ - sin θ)]\nयहाँ (cos θ - sin θ) में से माइनस (-) कॉमन लेकर उसे -(sin θ - cos θ) लिख सकते हैं:\n= (sin² θ) / [cos θ (sin θ - cos θ)]  -  (cos² θ) / [sin θ (sin θ - cos θ)]\nअब एलसीएम [sin θ cos θ (sin θ - cos θ)] लेने पर:\n= (sin³ θ - cos³ θ) / [sin θ cos θ (sin θ - cos θ)]\nअंश में (a³ - b³) = (a - b)(a² + b² + ab) का सूत्र लगाने पर:\n= [ (sin θ - cos θ)(sin² θ + cos² θ + sin θ cos θ) ] / [ sin θ cos θ (sin θ - cos θ) ]\n(sin θ - cos θ) से (sin θ - cos θ) कट जाएगा:\n= (sin² θ + cos² θ + sin θ cos θ) / (sin θ cos θ)\nचूँकि sin² θ + cos² θ = 1 होता है:\n= (1 + sin θ cos θ) / (sin θ cos θ)\nअब दोनों को अलग-अलग भाग देने पर:\n= 1 / (sin θ cos θ) + (sin θ cos θ) / (sin θ cos θ)\n= (1/cos θ)(1/sin θ) + 1\n= sec θ cosec θ + 1\n= 1 + sec θ cosec θ = R.H.S. Proved.")
        },
        {
            question: "सिद्ध करें कि: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan² A + cot² A [19 (A) I]",
            answer: processAnswer("L.H.S. = (sin A + cosec A)² + (cos A + sec A)²\n(a + b)² के सूत्र से दोनों ब्रैकेट खोलने पर:\n= (sin² A + cosec² A + 2 sin A cosec A) + (cos² A + sec² A + 2 cos A sec A)\nहम जानते हैं कि sin A × cosec A = 1 और cos A × sec A = 1 होता है।\n= sin² A + cosec² A + 2(1) + cos² A + sec² A + 2(1)\nपदों को एक साथ व्यवस्थित करने पर:\n= (sin² A + cos² A) + cosec² A + sec² A + 4\nचूँकि (sin² A + cos² A) = 1 होता है:\n= 1 + cosec² A + sec² A + 4\n= 5 + cosec² A + sec² A\nअब, cosec² A = 1 + cot² A और sec² A = 1 + tan² A रखने पर:\n= 5 + (1 + cot² A) + (1 + tan² A)\n= 5 + 1 + 1 + tan² A + cot² A\n= 7 + tan² A + cot² A = R.H.S. Proved.")
        },
        {
            question: "सिद्ध करें कि: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ [19 (A) I]",
            answer: processAnswer("L.H.S. = (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ)\nअंश में से sin θ और हर में से cos θ कॉमन (common) लेने पर:\n= [ sin θ (1 - 2 sin² θ) ] / [ cos θ (2 cos² θ - 1) ]\nहम जानते हैं कि sin² θ = 1 - cos² θ होता है। इसे अंश में रखने पर:\n= [ sin θ (1 - 2(1 - cos² θ)) ] / [ cos θ (2 cos² θ - 1) ]\n= [ sin θ (1 - 2 + 2 cos² θ) ] / [ cos θ (2 cos² θ - 1) ]\n= [ sin θ (2 cos² θ - 1) ] / [ cos θ (2 cos² θ - 1) ]\nअंश और हर से (2 cos² θ - 1) कट जाएगा:\n= sin θ / cos θ\n= tan θ = R.H.S. Proved.")
        },
        {
            question: "मान निकालें: [sec(90° - θ) cosec θ - tan(90° - θ) cot θ + cos² 25° + cos² 65°] / [3 tan 27° tan 63°] [24 (A) II]",
            answer: processAnswer("हल:\nसबसे पहले पूरक कोणों (Complementary angles) के सूत्र लगाएंगे:\nsec(90° - θ) = cosec θ\ntan(90° - θ) = cot θ\ncos 65° = cos(90° - 25°) = sin 25°\ntan 63° = tan(90° - 27°) = cot 27°\n\nअब इन सभी मानों को दिए गए व्यंजक (Expression) में रखने पर:\nअंश (Numerator):\n= (cosec θ . cosec θ) - (cot θ . cot θ) + cos² 25° + (sin 25°)²\n= (cosec² θ - cot² θ) + (cos² 25° + sin² 25°)\nसर्वसमिकाओं से हम जानते हैं कि cosec² θ - cot² θ = 1 और cos² A + sin² A = 1 होता है:\n= 1 + 1 = 2\n\nहर (Denominator):\n= 3 tan 27° . cot 27°\nचूँकि tan A × cot A = 1 होता है:\n= 3(1) = 3\n\nअतः पूरा मान = अंश / हर = 2 / 3. Ans.")
        }
    ]
};

const ch8Marker = '"chapter": "त्रिकोणमिति का परिचय"';
const ch8Start = content.indexOf(ch8Marker);
const pyqStart = content.indexOf('"pyq":', ch8Start);
const nextChapterPos = content.indexOf('"chapter":', ch8Start + 30);
let pyqEnd;
if (nextChapterPos === -1) {
    pyqEnd = content.lastIndexOf('}', content.lastIndexOf('}')) - 4;
} else {
    const chapterCloseBeforeNext = content.lastIndexOf('    },', nextChapterPos);
    pyqEnd = content.lastIndexOf('        }', chapterCloseBeforeNext) + '        }'.length;
}

const newPyqString = `"pyq": ${JSON.stringify(pyqData, null, 8)}`;
const newContent = content.substring(0, pyqStart) + newPyqString + content.substring(pyqEnd);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('SUCCESS: Chapter 8 PYQ fully polished. No \n literals, instructions in brackets, and professional fractions everywhere.');
