const fs = require('fs');
let content = fs.readFileSync('math-data.js', 'utf8');

// Line 742 is index 741.
// Line 807 is index 806.
let lines = content.split('\n');
let fixStart = 741; 
let fixEnd = 806; 

const restoredLines = [
  '        {',
  '          "question": "थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय): सिद्ध करें कि यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को भिन्न-भिन्न बिंदुओं पर प्रतिच्छेद करने के लिए एक रेखा खींची जाए, तो ये अन्य दो भुजाएँ एक ही अनुपात में विभाजित हो जाती हैं। [11 (A), 15 (A) I, 16 (A) I, 17 (A) II, 18 (A) I, 23 (A) II, 25 (A) I, 25 (A) II]",',
  '          "answer": "<img src=\\"images/math_ch6_thales_v3.png\\" class=\\"diagram-float educational-diagram\\">दिया है: ∆ABC में DE || BC है जो AB को D पर और AC को E पर काटती है।\\nसिद्ध करना है: <span class=\\"frac\\"><span class=\\"num\\">AD</span><span class=\\"den\\">DB</span></span> = <span class=\\"frac\\"><span class=\\"num\\">AE</span><span class=\\"den\\">EC</span></span>\\nरचना: BE और CD को मिलाया। DM ⊥ AC और EN ⊥ AB खींचा।\\n\\n\\n\\nप्रमाण:\\nar(∆ADE) = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> × AD × EN\\nar(∆BDE) = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> × DB × EN\\nअतः <span class=\\"frac\\"><span class=\\"num\\">ar(∆ADE)</span><span class=\\"den\\">ar(∆BDE)</span></span> = <span class=\\"frac\\"><span class=\\"num\\">AD</span><span class=\\"den\\">DB</span></span> ---(i)\\n\\nपुनः, ar(∆ADE) = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> × AE × DM\\nar(∆CDE) = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> × EC × DM\\nअतः <span class=\\"frac\\"><span class=\\"num\\">ar(∆ADE)</span><span class=\\"den\\">ar(∆CDE)</span></span> = <span class=\\"frac\\"><span class=\\"num\\">AE</span><span class=\\"den\\">EC</span></span> ---(ii)\\n\\nचूँकि ∆BDE और ∆CDE एक ही आधार DE और समान समांतर रेखाओं BC || DE के बीच बने हैं, इसलिए:\\nar(∆BDE) = ar(∆CDE) ---(iii)\\n\\nसमीकरण (i), (ii) और (iii) से:\\n<span class=\\"frac\\"><span class=\\"num\\">AD</span><span class=\\"den\\">DB</span></span> = <span class=\\"frac\\"><span class=\\"num\\">AE</span><span class=\\"den\\">EC</span></span>. Proved."',
  '        },',
  '        {',
  '          "question": "पाइथागोरस प्रमेय के विलोम को सिद्ध कीजिए: यदि किसी त्रिभुज की एक भुजा का वर्ग अन्य दो भुजाओं के वर्गों के योगफल के बराबर हो, तो पहली भुजा के सम्मुख का कोण समकोण होता है। [Years: 13 (A) I, 14 (A) II, 16 (A) I, 19 (A) II, 22 (A) II, 24 (A) II]",',
  '          "answer": "<img src=\\"images/math_ch6_pythagoras_converse_v3.png\\" class=\\"diagram-float educational-diagram\\">दिया है: ΔABC में AC² = AB² + BC².\\nसिद्ध करना है: ∠B = 90° (समकोण).\\nरचना: एक समकोण ΔPQR बनाया जहाँ ∠Q = 90°, PQ = AB और QR = BC.\\n\\n\\n\\nउपपत्ति: ΔPQR में (पाइथागोरस प्रमेय से):\\nPR² = PQ² + QR²\\nPR² = AB² + BC² (रचना से) ---(i)\\nदिया है: AC² = AB² + BC² ---(ii)\\nसमीकरण (i) और (ii) से: AC = PR.\\nअब ΔABC और ΔPQR में:\\nAB=PQ, BC=QR, AC=PR (SSS सर्वांगसमता)\\nअतः ∠B = ∠Q. चूँकि रचना में ∠Q = 90°, इसलिए ∠B = 90°. (इति सिद्धम)"',
  '        }',
  '      ]',
  '    }',
  '  },',
  '  {',
  '    "subject": "Mathematics",',
  '    "class_level": "10",',
  '    "chapter": "निर्देशांक ज्यामिति",',
  '    "importantQuestions": {',
  '      "short": [',
  '        {',
  '          "question": "बिंदु P(x, y) की मूल बिंदु (0, 0) से दूरी का सूत्र लिखिए।",',
  '          "answer": "मूल बिंदु से दूरी = √(x² + y²)"',
  '        },',
  '        {',
  '          "question": "बिंदुओं (2, 3) and (4, 1) के बीच की दूरी ज्ञात कीजिए।",',
  '          "answer": "d = √[(4 - 2)² + (1 - 3)²] = √[2² + (-2)²] = √[4 + 4] = √8 = 2√2 मात्रक"',
  '        },',
  '        {',
  '          "question": "यदि बिंदु A(6, 1), B(8, 2), C(9, 4) और D(p, 3) एक समांतर चतुर्भुज के शीर्ष इसी क्रम में हों, तो p का मान ज्ञात कीजिए।"'
];

lines.splice(fixStart, fixEnd - fixStart + 1, ...restoredLines);

fs.writeFileSync('math-data.js', lines.join('\n'));
console.log("Repair finished.");
