const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

const newPyqBlock = `        "pyq": {
            "short": [
                {
                    "question": "ABC एक समद्विबाहु त्रिभुज है जिसका कोण C समकोण है। सिद्ध करें कि AB² = 2AC² है। [11 (A), 15 (A) II, 20 (A) II, 23 (A) II, 25 (A) I, 25 (A) II]",
                    "answer": "दिया है: ∆ABC एक समद्विबाहु समकोण त्रिभुज है, जिसमें ∠C = 90° है।\\nचूँकि यह समद्विबाहु है, इसलिए इसकी लंब और आधार भुजाएँ बराबर होंगी:\\nAC = BC\\nपाइथागोरस प्रमेय से (कर्ण² = लंब² + आधार²):\\nAB² = AC² + BC²\\nचूँकि BC = AC है, इसका मान रखने पर:\\nAB² = AC² + AC²\\nAB² = 2AC². Proved."
                },
                {
                    "question": "ABC एक समद्विबाहु त्रिभुज है जिसमें AC = BC है। यदि AB² = 2AC² है, तो सिद्ध कीजिए कि ABC एक समकोण त्रिभुज है। [14 (A) I, 14 (A) II]",
                    "answer": "दिया है: ∆ABC में AC = BC और AB² = 2AC²\\nप्रमाण:\\nAB² = 2AC²\\nहम इसे ऐसे लिख सकते हैं:\\nAB² = AC² + AC²\\nचूँकि दिया है AC = BC, तो एक AC की जगह BC रखने पर:\\nAB² = AC² + BC²\\nयहाँ एक भुजा का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर है।\\nअतः पाइथागोरस प्रमेय के विलोम (Converse of Pythagoras theorem) से, सबसे बड़ी भुजा (AB) के सामने का कोण समकोण होगा।\\nइसलिए, ∠C = 90°\\nअतः ∆ABC एक समकोण त्रिभुज है। Proved."
                },
                {
                    "question": "मान लीजिए ∆ABC ~ ∆DEF है और इनके क्षेत्रफल क्रमशः 64 cm² और 121 cm² हैं। यदि EF = 15.4 cm हो, तो BC ज्ञात कीजिए। [16 (A) I, 18 (C), 23 (A) II]",
                    "answer": "हम जानते हैं कि दो समरूप त्रिभुजों के क्षेत्रफलों का अनुपात उनकी संगत भुजाओं के वर्गों के अनुपात के बराबर होता है।\\nar(∆ABC) / ar(∆DEF) = BC² / EF²\\nदिया है: ar(∆ABC) = 64, ar(∆DEF) = 121, EF = 15.4\\nमान रखने पर:\\n64 / 121 = BC² / (15.4)²\\nदोनों तरफ वर्गमूल (Square root) लेने पर:\\n8 / 11 = BC / 15.4\\nवज्र-गुणन (Cross multiply) करने पर:\\n11 × BC = 8 × 15.4\\nBC = (8 × 15.4) / 11\\nBC = 8 × 1.4\\nBC = 11.2 cm. Ans."
                },
                {
                    "question": "एक समबाहु त्रिभुज ABC की भुजा 2a है। उसके प्रत्येक शीर्षलंब की लंबाई ज्ञात कीजिए। [16 (A) II, 22 (A) I]",
                    "answer": "माना ∆ABC एक समबाहु त्रिभुज है जिसकी प्रत्येक भुजा 2a है।\\nA से BC पर शीर्षलंब AD खींचा गया है। (AD ⊥ BC)\\nहम जानते हैं कि समबाहु त्रिभुज का शीर्षलंब सम्मुख भुजा को समद्विभाजित करता है।\\nइसलिए, BD = DC = a\\nअब समकोण ∆ABD में, पाइथागोरस प्रमेय से:\\nAB² = AD² + BD²\\n(2a)² = AD² + (a)²\\n4a² = AD² + a²\\nAD² = 4a² - a²\\nAD² = 3a²\\nAD = √3a\\nअतः प्रत्येक शीर्षलंब की लंबाई √3a होगी। Ans."
                },
                {
                    "question": "समलंब ABCD, जिसमें AB || DC है, के विकर्ण परस्पर O पर प्रतिच्छेद करते हैं। समरूपता कसौटी का प्रयोग करते हुए दर्शाइए कि OA/OC = OB/OD है। [12 (A), 13 (A), 18 (C)]",
                    "answer": "दिया है: ABCD एक समलंब है जिसमें AB || DC है। विकर्ण AC और BD बिंदु O पर प्रतिच्छेद करते हैं।\\nप्रमाण:\\n∆AOB और ∆COD में,\\n∠AOB = ∠COD (शीर्षाभिमुख कोण / Vertically opposite angles)\\n∠OAB = ∠OCD (एकांतर अंतः कोण / Alternate interior angles, क्योंकि AB || DC)\\nअतः AA समरूपता कसौटी से:\\n∆AOB ~ ∆COD\\nचूँकि दोनों त्रिभुज समरूप हैं, इसलिए उनकी संगत भुजाएँ समानुपाती होंगी।\\nOA / OC = OB / OD. Proved."
                },
                {
                    "question": "∆ABC में यदि DE || BC और AD = 4x-3, AE = 8x-7, BD = 3x-1 और CE = 5x-3 हो तो x का मान ज्ञात करें। [19 (C), 20 (A) I]",
                    "answer": "थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय) से, यदि DE || BC हो, तो:\\nAD / DB = AE / EC\\nमान रखने पर:\\n(4x - 3) / (3x - 1) = (8x - 7) / (5x - 3)\\nवज्र-गुणन करने पर:\\n(4x - 3)(5x - 3) = (8x - 7)(3x - 1)\\n20x² - 12x - 15x + 9 = 24x² - 8x - 21x + 7\\n20x² - 27x + 9 = 24x² - 29x + 7\\nसभी पदों को एक तरफ ले जाने पर:\\n24x² - 20x² - 29x + 27x + 7 - 9 = 0\\n4x² - 2x - 2 = 0\\n2 से भाग देने पर:\\n2x² - x - 1 = 0\\nगुणनखंड: 2x² - 2x + x - 1 = 0\\n2x(x - 1) + 1(x - 1) = 0\\n(2x + 1)(x - 1) = 0\\nx = -1/2 (जो संभव नहीं है क्योंकि दूरी ऋणात्मक नहीं होती)\\nअतः x = 1. Ans."
                }
            ],
            "long": [
                {
                    "question": "पाइथागोरस प्रमेय: सिद्ध करें कि एक समकोण त्रिभुज में कर्ण का वर्ग अन्य दो भुजाओं के वर्गों के योगफल के बराबर होता है। [11 (C), 12 (C), 13 (A), 13 (C), 15 (A) II, 17 (A) I, 17 (C)]",
                    "answer": "दिया है: एक समकोण त्रिभुज ABC जिसमें ∠B = 90° है।\\nसिद्ध करना है: AC² = AB² + BC²\\nरचना: बिंदु B से कर्ण AC पर लंब BD खींचा (BD ⊥ AC)।\\n\\n<div align=\\"center\\"><img src=\\"images/math_ch6_pythagoras_v3.png\\" alt=\\"Pythagoras Theorem Diagram\\" width=\\"500\\"></div>\\n\\nप्रमाण:\\n∆ADB और ∆ABC में,\\n∠A = ∠A (उभयनिष्ठ / Common)\\n∠ADB = ∠ABC = 90° (रचना से)\\nअतः AA समरूपता कसौटी से: ∆ADB ~ ∆ABC\\nइसलिए, AD / AB = AB / AC\\nAB² = AD × AC  ...(i)\\n\\nइसी प्रकार, ∆BDC और ∆ABC में,\\n∠C = ∠C (उभयनिष्ठ / Common)\\n∠BDC = ∠ABC = 90° (रचना से)\\nअतः AA समरूपता कसौटी से: ∆BDC ~ ∆ABC\\nइसलिए, CD / BC = BC / AC\\nBC² = CD × AC  ...(ii)\\n\\nसमीकरण (i) और (ii) को जोड़ने पर:\\nAB² + BC² = (AD × AC) + (CD × AC)\\nAC को कॉमन लेने पर:\\nAB² + BC² = AC × (AD + CD)\\nचूँकि चित्र से AD + CD = AC है:\\nAB² + BC² = AC × AC\\nAB² + BC² = AC²\\nया, AC² = AB² + BC². Proved."
                },
                {
                    "question": "थेल्स प्रमेय (आधारभूत आनुपातिकता प्रमेय): सिद्ध करें कि यदि किसी त्रिभुज की एक भुजा के समान्तर अन्य दो भुजाओं को भिन्न-भिन्न बिंदुओं पर प्रतिच्छेद करने के लिए एक रेखा खींची जाए, तो ये अन्य दो भुजाएँ एक ही अनुपात में विभाजित हो जाती हैं। [11 (C), 16 (A) II, 22 (C)]",
                    "answer": "दिया है: ∆ABC में भुजा BC के समांतर एक रेखा खींची गई है जो AB को D पर तथा AC को E पर प्रतिच्छेद करती है। (DE || BC)\\nसिद्ध करना है: AD / DB = AE / EC\\nरचना: B को E से और C को D से मिलाया। साथ ही, EM ⊥ AB और DN ⊥ AC खींचा।\\n\\n<div align=\\"center\\"><img src=\\"images/math_ch6_thales_v3.png\\" alt=\\"Thales Theorem Diagram\\" width=\\"500\\"></div>\\n\\nप्रमाण:\\nचूँकि त्रिभुज का क्षेत्रफल = 1/2 × आधार × ऊँचाई\\nar(∆ADE) = 1/2 × AD × EM\\nar(∆BDE) = 1/2 × DB × EM\\nअतः ar(∆ADE) / ar(∆BDE) = (1/2 × AD × EM) / (1/2 × DB × EM) = AD / DB   ...(i)\\n\\nइसी प्रकार, आधार AE और EC लेकर:\\nar(∆ADE) = 1/2 × AE × DN\\nar(∆CDE) = 1/2 × EC × DN\\nअतः ar(∆ADE) / ar(∆CDE) = (1/2 × AE × DN) / (1/2 × EC × DN) = AE / EC   ...(ii)\\n\\nहम जानते हैं कि एक ही आधार (DE) और समान समांतर रेखाओं (DE || BC) के बीच बने त्रिभुजों का क्षेत्रफल बराबर होता है।\\nइसलिए, ar(∆BDE) = ar(∆CDE)   ...(iii)\\n\\nसमीकरण (i), (ii) और (iii) से यह स्पष्ट है कि:\\nAD / DB = AE / EC. Proved."
                },
                {
                    "question": "पाइथागोरस प्रमेय का विलोम: सिद्ध करें कि यदि किसी त्रिभुज की एक भुजा का वर्ग अन्य दो भुजाओं के वर्गों के योग के बराबर हो, तो पहली भुजा का सम्मुख कोण समकोण होता है। [11 (A), 14 (C), 17 (A) II]",
                    "answer": "दिया है: ∆ABC में, AC² = AB² + BC²\\nसिद्ध करना है: ∠B = 90°\\nरचना: एक अन्य त्रिभुज PQR की रचना इस प्रकार की कि ∠Q = 90°, PQ = AB और QR = BC हो।\\n\\n<div align=\\"center\\"><img src=\\"images/math_ch6_pythagoras_converse_v3.png\\" alt=\\"Converse of Pythagoras Theorem Diagram\\" width=\\"500\\"></div>\\n\\nप्रमाण:\\nसमकोण ∆PQR में, पाइथागोरस प्रमेय से:\\nPR² = PQ² + QR²\\nचूँकि रचना से PQ = AB और QR = BC है, मान रखने पर:\\nPR² = AB² + BC²  ...(i)\\n\\nपरंतु प्रश्न में दिया गया है कि:\\nAC² = AB² + BC²  ...(ii)\\n\\nसमीकरण (i) और (ii) की तुलना करने पर:\\nPR² = AC²\\nअतः PR = AC  ...(iii)\\n\\nअब ∆ABC और ∆PQR में,\\nAB = PQ (रचना से)\\nBC = QR (रचना से)\\nAC = PR (समीकरण iii से सिद्ध किया)\\n\\nअतः SSS (भुजा-भुजा-भुजा) सर्वांगसमता कसौटी से:\\n∆ABC ≅ ∆PQR\\nचूँकि सर्वांगसम त्रिभुजों के संगत कोण बराबर होते हैं (CPCT):\\n∠B = ∠Q\\nपरंतु रचना से ∠Q = 90° है।\\nइसलिए, ∠B = 90°. Proved."
                }
            ]
        }`;

const ch6Marker = '"chapter": "त्रिभुज"';
const ch6Start = content.indexOf(ch6Marker);
if (ch6Start === -1) {
    console.error('ERROR: Chapter 6 marker not found!');
    process.exit(1);
}

const pyqStart = content.indexOf('"pyq":', ch6Start);
if (pyqStart === -1) {
    console.error('ERROR: pyq block not found after Chapter 6!');
    process.exit(1);
}

// Find next chapter or end
const nextSubjPos = content.indexOf('"subject": "Mathematics"', pyqStart + 10);
let pyqEnd;
if (nextSubjPos === -1) {
    // Last chapter
    pyqEnd = content.lastIndexOf('}', content.lastIndexOf('}')) - 4; // Hacky but we need to find the specific closing
} else {
    const chapterCloseBeforeNext = content.lastIndexOf('    },', nextSubjPos);
    pyqEnd = content.lastIndexOf('        }', chapterCloseBeforeNext) + '        }'.length;
}

console.log('Chapter 6 pyq starts at:', pyqStart);
console.log('Chapter 6 pyq ends at:', pyqEnd);

const newContent = content.substring(0, pyqStart) + newPyqBlock + content.substring(pyqEnd);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('SUCCESS: Chapter 6 PYQ section updated!');
