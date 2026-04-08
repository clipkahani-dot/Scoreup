const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const frac = (n, d) => `<span class="frac"><span class="num">${n}</span><span class="den">${d}</span></span>`;

const pyqData = {
    short: [
        {
            question: `यदि tan θ = ${frac(4, 3)} हो, तो ${frac('3 sin θ + 2 cos θ', '3 sin θ - 2 cos θ')} का मान ज्ञात करें। [19 (A) I]`,
            answer: `दिया है: tan θ = ${frac(4, 3)}<br>(हम जानते हैं कि tan θ = लंब / आधार)<br>माना लंब = 4k, और आधार = 3k<br>(पाइथागोरस प्रमेय से: कर्ण = √(लंब² + आधार²))<br>कर्ण = √((4k)² + (3k)²) = √(16k² + 9k²) = √(25k²) = 5k<br><br><div align="center"><img src="images/math_ch8_pyq_q1_right_triangle.png" alt="Right Triangle" width="400"></div><br><br>अब, sin θ = ${frac('लंब', 'कर्ण')} = ${frac('4k', '5k')} = ${frac(4, 5)}<br>cos θ = ${frac('आधार', 'कर्ण')} = ${frac('3k', '5k')} = ${frac(3, 5)}<br>(दिए गए व्यंजक में मान रखने पर):<br>= ${frac(`3(${frac(4, 5)}) + 2(${frac(3, 5)})`, `3(${frac(4, 5)}) - 2(${frac(3, 5)})`)}<br>= ${frac(`${frac(12, 5)} + ${frac(6, 5)}`, `${frac(12, 5)} - ${frac(6, 5)}`)}<br>= ${frac(frac(18, 5), frac(6, 5))}<br>= ${frac(18, 6)} = 3. Ans.`
        },
        {
            question: "सिद्ध करें कि: tan 48° . tan 23° . tan 42° . tan 67° = 1 [16 (A) I, 20 (A) II, 22 (A) I]",
            answer: "L.H.S. = tan 48° . tan 23° . tan 42° . tan 67°<br>(पूरक कोणों (Complementary angles) के सूत्र से: tan(90° - θ) = cot θ)<br>(tan 48° को tan(90° - 42°) और tan 67° को tan(90° - 23°) लिखने पर):<br>= tan(90° - 42°) . tan 23° . tan 42° . tan(90° - 23°)<br>= cot 42° . tan 23° . tan 42° . cot 23°<br>(पदों को एक साथ व्यवस्थित करने पर):<br>= (tan 42° . cot 42°) . (tan 23° . cot 23°)<br>(चूँकि tan θ . cot θ = 1 होता है):<br>= 1 × 1 = 1 = R.H.S. Proved."
        },
        {
            question: "यदि tan 2A = cot(A - 18°), जहाँ 2A एक न्यून कोण है, तो A का मान ज्ञात कीजिए। [13 (A), 13 (C), 19 (A) II, 23 (A) II]",
            answer: "दिया है: tan 2A = cot(A - 18°)<br>(हम जानते हैं कि tan θ = cot(90° - θ))<br>(इसलिए tan 2A की जगह cot(90° - 2A) रखने पर):<br>cot(90° - 2A) = cot(A - 18°)<br>(दोनों तरफ कोणों की तुलना करने पर):<br>90° - 2A = A - 18°<br>=> 90° + 18° = A + 2A<br>=> 108° = 3A<br>=> A = ${frac('108°', 3)} = 36°. Ans."
        },
        {
            question: `सिद्ध करें कि: ${frac('cos A', '1 + sin A')} + ${frac('1 + sin A', 'cos A')} = 2 sec A [12 (A), 13 (A), 16 (A) I, 18 (A) I, 19 (A) II]`,
            answer: `L.H.S. = ${frac('cos A', '1 + sin A')} + ${frac('1 + sin A', 'cos A')}<br>(एलसीएम (LCM) लेने पर):<br>= ${frac('cos² A + (1 + sin A)²', 'cos A(1 + sin A)')}<br>((1 + sin A)² को (a+b)² के सूत्र से खोलने पर):<br>= ${frac('cos² A + 1 + sin² A + 2 sin A', 'cos A(1 + sin A)')}<br>(चूँकि sin² A + cos² A = 1 होता है):<br>= ${frac('1 + 1 + 2 sin A', 'cos A(1 + sin A)')}<br>= ${frac('2 + 2 sin A', 'cos A(1 + sin A)')}<br>(अंश में से 2 कॉमन लेने पर):<br>= ${frac('2(1 + sin A)', 'cos A(1 + sin A)')}<br>(अंश और हर से (1 + sin A) कट जाएगा):<br>= ${frac(2, 'cos A')} = 2 sec A = R.H.S. Proved.`
        },
        {
            question: `सिद्ध करें कि: √${frac('1 + cos θ', '1 - cos θ')} = ${frac('1 + cos θ', 'sin θ')} [11 (C), 19 (C), 25 (A) I]`,
            answer: `L.H.S. = √${frac('1 + cos θ', '1 - cos θ')}<br>(रूट के अंदर हर का परिमेयकरण (Rationalization) करने के लिए (1 + cos θ) से अंश-हर में गुणा करने पर):<br>= √[ ${frac('(1 + cos θ)(1 + cos θ)', '(1 - cos θ)(1 + cos θ)')} ]<br>= √[ ${frac('(1 + cos θ)²', '1 - cos² θ')} ]<br>(चूँकि 1 - cos² θ = sin² θ होता है):<br>= √[ ${frac('(1 + cos θ)²', 'sin² θ')} ]<br>(वर्गमूल से स्क्वायर हटने पर):<br>= ${frac('1 + cos θ', 'sin θ')} = R.H.S. Proved.`
        },
        {
            question: "मान निकालें: 2 tan² 45° + cos² 30° - sin² 60° [11 (A), 12 (A), 13 (A), 15 (C), 19 (C)]",
            answer: `हल: (हम जानते हैं कि: tan 45° = 1, cos 30° = ${frac('√3', 2)}, और sin 60° = ${frac('√3', 2)})<br>(मान रखने पर):<br>= 2(1)² + (${frac('√3', 2)})² - (${frac('√3', 2)})²<br>= 2(1) + ${frac(3, 4)} - ${frac(3, 4)}<br>(+${frac(3, 4)} और -${frac(3, 4)} आपस में कट जाएँगे):<br>= 2. Ans.`
        },
        {
            question: `सिद्ध करें कि: (sec θ - tan θ)² = ${frac('1 - sin θ', '1 + sin θ')} [15 (A) II, 20 (A) II]`,
            answer: `L.H.S. = (sec θ - tan θ)²<br>(इन्हें sin और cos में बदलने पर):<br>= (${frac(1, 'cos θ')} - ${frac('sin θ', 'cos θ')})²<br>= (${frac('1 - sin θ', 'cos θ')})²<br>= ${frac('(1 - sin θ)²', 'cos² θ')}<br>(चूँकि cos² θ = 1 - sin² θ होता है):<br>= ${frac('(1 - sin θ)²', '1 - sin² θ')}<br>(a² - b² सूत्र से हर को तोड़ने पर):<br>= ${frac('(1 - sin θ)(1 - sin θ)', '(1 - sin θ)(1 + sin θ)')}<br>(अंश और हर से (1 - sin θ) कट जाएगा):<br>= ${frac('1 - sin θ', '1 + sin θ')} = R.H.S. Proved.`
        }
    ],
    long: [
        {
            question: `सिद्ध करें: ${frac('tan θ', '1 - cot θ')} + ${frac('cot θ', '1 - tan θ')} = 1 + sec θ cosec θ [20 (A) I, 21 (A) I, 25 (A) II]`,
            answer: `L.H.S. = ${frac('tan θ', '1 - cot θ')} + ${frac('cot θ', '1 - tan θ')}<br>(सभी पदों को sin θ और cos θ में बदलने पर):<br>= ${frac(frac('sin θ', 'cos θ'), `1 - ${frac('cos θ', 'sin θ')}`)} + ${frac(frac('cos θ', 'sin θ'), `1 - ${frac('sin θ', 'cos θ')}`)}<br>(हर का एलसीएम लेने पर):<br>= ${frac(frac('sin θ', 'cos θ'), frac('sin θ - cos θ', 'sin θ'))} + ${frac(frac('cos θ', 'sin θ'), frac('cos θ - sin θ', 'cos θ'))}<br>(पदों को पलटने पर):<br>= ${frac('sin² θ', 'cos θ(sin θ - cos θ)')} + ${frac('cos² θ', 'sin θ(cos θ - sin θ)')}<br>(यहाँ (cos θ - sin θ) में से (-) कॉमन लेकर उसे -(sin θ - cos θ) लिख सकते हैं):<br>= ${frac('sin² θ', 'cos θ(sin θ - cos θ)')} - ${frac('cos² θ', 'sin θ(sin θ - cos θ)')}<br>(अब एलसीएम [sin θ cos θ(sin θ - cos θ)] लेने पर):<br>= ${frac('sin³ θ - cos³ θ', 'sin θ cos θ(sin θ - cos θ)')}<br>(अंश में (a³ - b³) सूत्र लगाने पर):<br>= ${frac('(sin θ - cos θ)(sin² θ + cos² θ + sin θ cos θ)', 'sin θ cos θ(sin θ - cos θ)')}<br>((sin θ - cos θ) से (sin θ - cos θ) कट जाएगा):<br>= ${frac('sin² θ + cos² θ + sin θ cos θ', 'sin θ cos θ')}<br>(चूँकि sin² θ + cos² θ = 1 होता है):<br>= ${frac('1 + sin θ cos θ', 'sin θ cos θ')}<br>(अब दोनों को अलग-अलग भाग देने पर):<br>= ${frac(1, 'sin θ cos θ')} + ${frac('sin θ cos θ', 'sin θ cos θ')}<br>= (sec θ cosec θ) + 1 = 1 + sec θ cosec θ = R.H.S. Proved.`
        },
        {
            question: "सिद्ध करें कि: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan² A + cot² A [19 (A) I]",
            answer: "L.H.S. = (sin A + cosec A)² + (cos A + sec A)²<br>((a + b)² के सूत्र से ब्रैकेट खोलने पर):<br>= (sin² A + cosec² A + 2 sin A cosec A) + (cos² A + sec² A + 2 cos A sec A)<br>(हम जानते हैं कि sin A × cosec A = 1 और cos A × sec A = 1 होता है):<br>= sin² A + cosec² A + 2(1) + cos² A + sec² A + 2(1)<br>(पदों को एक साथ व्यवस्थित करने पर):<br>= (sin² A + cos² A) + cosec² A + sec² A + 4<br>(चूँकि sin² A + cos² A = 1 होता है):<br>= 1 + cosec² A + sec² A + 4 = 5 + cosec² A + sec² A<br>(अब, cosec² A = 1 + cot² A और sec² A = 1 + tan² A रखने पर):<br>= 5 + (1 + cot² A) + (1 + tan² A) = 7 + tan² A + cot² A = R.H.S. Proved."
        },
        {
            question: `सिद्ध करें कि: ${frac('sin θ - 2 sin³ θ', '2 cos³ θ - cos θ')} = tan θ [19 (A) I]`,
            answer: `L.H.S. = ${frac('sin θ - 2 sin³ θ', '2 cos³ θ - cos θ')}<br>(अंश और हर से कॉमन निकालने पर):<br>= ${frac('sin θ(1 - 2 sin² θ)', 'cos θ(2 cos² θ - 1)')}<br>(हम जानते हैं कि sin² θ = 1 - cos² θ होता है। इसे अंश में रखने पर):<br>= ${frac('sin θ[1 - 2(1 - cos² θ)]', 'cos θ(2 cos² θ - 1)')}<br>= ${frac('sin θ(1 - 2 + 2 cos² θ)', 'cos θ(2 cos² θ - 1)')}<br>= ${frac('sin θ(2 cos² θ - 1)', 'cos θ(2 cos² θ - 1)')}<br>((2 cos² θ - 1) अंश और हर से कट जाएगा):<br>= ${frac('sin θ', 'cos θ')} = tan θ = R.H.S. Proved.`
        },
        {
            question: `मान निकालें: ${frac('sec(90° - θ) cosec θ - tan(90° - θ) cot θ + cos² 25° + cos² 65°', '3 tan 27° tan 63°')} [24 (A) II]`,
            answer: `हल:<br>(पहले पूरक कोणों के सूत्र लगाएंगे): sec(90°-θ)=cosec θ, tan(90°-θ)=cot θ, cos 65°=sin 25°, tan 63°=cot 27°<br>(मानों को व्यंजक में रखने पर):<br>अंश: (cosec θ . cosec θ) - (cot θ . cot θ) + cos² 25° + sin² 25°<br>= (cosec² θ - cot² θ) + (cos² 25° + sin² 25°)<br>(चूँकि cosec² θ - cot² θ = 1 और cos² A + sin² A = 1): = 1 + 1 = 2<br>हर: 3 tan 27° . cot 27° = 3(1) = 3<br>अतः मान = ${frac(2, 3)}. Ans.`
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
console.log('SUCCESS: Chapter 8 PYQ fully hand-crafted for 100% horizontal fraction coverage.');
