const fs = require('fs');
const path = 'c:/Users/pc/OneDrive/Desktop/SCOR UP/math-data.js';
let content = fs.readFileSync(path, 'utf8');

// The marker after the fixed line 963-964
const marker = 'Step 5: 2 sec A = R.H.S (इति सिद्धम)"\\n        },';
// Note: view_file shows line 964 is just "        },"
// So the marker is exactly that.

// Let's use a simpler marker: the start of Chapter 9.
const ch9Start = '{\\n    "subject": "Mathematics",\\n    "class_level": "Class 10",\\n    "chapter": "त्रिकोणमिति के कुछ अनुप्रयोग"';

// Actually, let's just find the index of Chapter 9 and work backwards to the fixed block.
const ch9Index = content.indexOf('\"chapter\": \"त्रिकोणमिति के कुछ अनुप्रयोग\"');
// The start of this chapter object is around line 1026.

const fixedBlockIndex = content.indexOf('\"answer\": \"Step 1: L.H.S = <span class=\\\\"frac\\\\"');
// This is the start of the corrected Q2 at line 963.

if (fixedBlockIndex === -1 || ch9Index === -1) {
    console.error('Markers not found');
    process.exit(1);
}

// Find the end of the corrected Q2 answer
const endOfQ2 = content.indexOf('Step 5: 2 sec A = R.H.S (इति सिद्धम)\"\\n        },', fixedBlockIndex);
const startOfRestoration = endOfQ2 + 'Step 5: 2 sec A = R.H.S (इति सिद्धम)\"\\n        },'.length;

// Find the start of the next chapter (Chapter 9)
// Chapter 8 ends with:
//     }
//   },
//   {
const endOfC8 = content.lastIndexOf('},\\n  {', ch9Index);
const endOfRestoration = endOfC8;

const restOfC8 = `
        {
          "question": "सिद्ध कीजिए: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan² A + cot² A",
          "answer": "L.H.S = (sin² A + cosec² A + 2 sin A cosec A) + (cos² A + sec² A + 2 cos A sec A)<br>= (sin² A + cos² A) + cosec² A + sec² A + 2(1) + 2(1)<br>= 1 + (1 + cot² A) + (1 + tan² A) + 4<br>= 7 + tan² A + cot² A = R.H.S (इति सिद्धम)"
        },
        {
          "question": "सिद्ध कीजिए: <span class=\\"frac\\"><span class=\\"num\\">tan θ</span><span class=\\"den\\">1 - cot θ</span></span> + <span class=\\"frac\\"><span class=\\"num\\">cot θ</span><span class=\\"den\\">1 - tan θ</span></span> = 1 + sec θ cosec θ",
          "answer": "Step 1: <span class=\\"frac\\"><span class=\\"num\\\"><span class=\\"frac\\"><span class=\\"num\\">sin θ</span><span class=\\"den\\">cos θ</span></span></span><span class=\\"den\\">1 - <span class=\\"frac\\"><span class=\\"num\\">cos θ</span><span class=\\"den\\">sin θ</span></span></span></span> + <span class=\\"frac\\"><span class=\\"num\\\"><span class=\\"frac\\"><span class=\\"num\\">cos θ</span><span class=\\"den\\">sin θ</span></span></span><span class=\\"den\\">1 - <span class=\\"frac\\"><span class=\\"num\\">sin θ</span><span class=\\"den\\">cos θ</span></span></span></span><br>Step 2: <span class=\\"frac\\"><span class=\\"num\\">sin² θ</span><span class=\\"den\\">cos θ(sin θ - cos θ)</span></span> + <span class=\\"frac\\"><span class=\\"num\\">cos² θ</span><span class=\\"den\\">sin θ(cos θ - sin θ)</span></span><br>Step 3: <span class=\\"frac\\"><span class=\\"num\\">sin³ θ - cos³ θ</span><span class=\\"den\\">sin θ cos θ (sin θ - cos θ)</span></span><br>Step 4: <span class=\\"frac\\"><span class=\\"num\\\">(sin θ - cos θ)(sin² θ + cos² θ + sin θ cos θ)</span><span class=\\"den\\">sin θ cos θ (sin θ - cos θ)</span></span><br>Step 5: <span class=\\"frac\\"><span class=\\"num\\">1 + sin θ cos θ</span><span class=\\"den\\">sin θ cos θ</span></span> = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">sin θ cos θ</span></span> + 1 = 1 + sec θ cosec θ"
        },
        {
          "question": "सिद्ध कीजिए: <span class=\\"frac\\"><span class=\\"num\\">sin θ - 2 sin³ θ</span><span class=\\"den\\">2 cos³ θ - cos θ</span></span> = tan θ",
          "answer": "L.H.S = <span class=\\"frac\\"><span class=\\"num\\">sin θ (1 - 2 sin² θ)</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ (1 - 2(1 - cos² θ))</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ (2 cos² θ - 1)</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ</span><span class=\\"den\\">cos θ</span></span> = tan θ = R.H.S"
        }
      ]
    },
    "pyq": {
      "short": [
        {
          "question": "यदि tan θ = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">3</span></span> हो, तो <span class=\\"frac\\"><span class=\\"num\\">3 sin θ + 2 cos θ</span><span class=\\"den\\">3 sin θ - 2 cos θ</span></span> का मान ज्ञात करें। [Years: 19 (A) I]",
          "answer": "<img src=\\"images/math_ch8_pyq_q1_right_triangle.png\\" class=\\"diagram-float educational-diagram\\">दिया है: tan θ = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">3</span></span><br>(हम जानते हैं कि tan θ = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">आधार</span></span>)<br>माना लंब = 4k, और आधार = 3k<br>(पाइथागोरस प्रमेय से: कर्ण = √(लंब² + आधार²))<br>कर्ण = √((4k)² + (3k)²) = √(16k² + 9k²) = √(25k²) = 5k<br><br>अब, sin θ = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4k</span><span class=\\"den\\">5k</span></span> = <span class=\\"frac\\\"><span class=\\"num\\">4</span><span class=\\"den\\">5</span></span><br>cos θ = <span class=\\"frac\\"><span class=\\"num\\">आधार</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3k</span><span class=\\"den\\">5k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">5</span></span><br>(दिए गए व्यंजक में मान रखने पर):<br>= <span class=\\"frac\\"><span class=\\"num\\">3(<span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">5</span></span>) + 2(<span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">5</span></span>)</span><span class=\\"den\\">3(<span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">5</span></span>) - 2(<span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">5</span></span>)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\\"><span class=\\"frac\\"><span class=\\"num\\">12</span><span class=\\"den\\">5</span></span> + <span class=\\"frac\\"><span class=\\"num\\">6</span><span class=\\"den\\">5</span></span></span><span class=\\"den\\\"><span class=\\"frac\\"><span class=\\"num\\">12</span><span class=\\"den\\">5</span></span> - <span class=\\"frac\\"><span class=\\"num\\">6</span><span class=\\"den\\">5</span></span></span></span><br>= <span class=\\"frac\\"><span class=\\"num\\\"><span class=\\"frac\\"><span class=\\"num\\">18</span><span class=\\"den\\">5</span></span></span><span class=\\"den\\\"><span class=\\"frac\\"><span class=\\"num\\">6</span><span class=\\"den\\">5</span></span></span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">18</span><span class=\\"den\\">6</span></span> = 3. Ans."
        },
        {
          "question": "सिद्ध करें कि: tan 48° . tan 23° . tan 42° . tan 67° = 1 [Years: 16 (A) I, 20 (A) II, 22 (A) I]",
          "answer": "L.H.S. = tan 48° . tan 23° . tan 42° . tan 67°<br>(पूरक कोणों (Complementary angles) के सूत्र से: tan(90° - θ) = cot θ)<br>(tan 48° को tan(90° - 42°) और tan 67° को tan(90° - 23°) लिखने पर):<br>= tan(90° - 42°) . tan 23° . tan 42° . tan(90° - 23°)<br>= cot 42° . tan 23° . tan 42° . cot 23°<br>(पदों को एक साथ व्यवस्थित करने पर):<br>= (tan 42° . cot 42°) . (tan 23° . cot 23°)<br>(चूँकि tan θ . cot θ = 1 होता है):<br>= 1 × 1 = 1 = R.H.S. Proved."
        },
        {
          "question": "यदि tan 2A = cot(A - 18°), जहाँ 2A एक न्यून कोण है, तो A का मान ज्ञात कीजिए। [Years: 13 (A), 13 (C), 19 (A) II, 23 (A) II]",
          "answer": "दिया है: tan 2A = cot(A - 18°)<br>(हम जानते हैं कि tan θ = cot(90° - θ))<br>(इसलिए tan 2A की जगह cot(90° - 2A) रखने पर):<br>cot(90° - 2A) = cot(A - 18°)<br>(दोनों तरफ कोणों की तुलना करने पर):<br>90° - 2A = A - 18°<br>=> 90° + 18° = A + 2A<br>=> 108° = 3A<br>=> A = <span class=\\"frac\\"><span class=\\"num\\">108°</span><span class=\\"den\\">3</span></span> = 36°. Ans."
        },
        {
          "question": "सिद्ध करें कि: <span class=\\"frac\\"><span class=\\"num\\">cos A</span><span class=\\"den\\">1 + sin A</span></span> + <span class=\\"frac\\"><span class=\\"num\\">1 + sin A</span><span class=\\"den\\">cos A</span></span> = 2 sec A [Years: 12 (A), 13 (A), 16 (A) I, 18 (A) I, 19 (A) II]",
          "answer": "L.H.S. = <span class=\\"frac\\"><span class=\\"num\\">cos A</span><span class=\\"den\\">1 + sin A</span></span> + <span class=\\"frac\\"><span class=\\"num\\">1 + sin A</span><span class=\\"den\\">cos A</span></span><br>(एलसीएम (LCM) लेने पर):<br>= <span class=\\"frac\\"><span class=\\"num\\">cos² A + (1 + sin A)²</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>((1 + sin A)² को (a+b)² के सूत्र से खोलने पर):<br>= <span class=\\"frac\\"><span class=\\"num\\">cos² A + 1 + sin² A + 2 sin A</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>(चूँकि sin² A + cos² A = 1):<br>= <span class=\\"frac\\"><span class=\\"num\\">2 + 2 sin A</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">2(1 + sin A)</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">2</span><span class=\\"den\\">cos A</span></span> = 2 sec A. Ans."
        }
      ],
      "long": []
    }
  `;

const newContent = content.substring(0, startOfRestoration) + restOfC8 + content.substring(endOfRestoration);
fs.writeFileSync(path, newContent);
console.log('Recovery Successful');
