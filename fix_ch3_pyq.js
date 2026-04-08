const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'math-data.js');
let content = fs.readFileSync(filePath, 'utf8');

// The new PYQ block for Chapter 3
const newPyqBlock = `        "pyq": {
            "short": [
                {
                    "question": "5 पेंसिल और 7 पेन की कुल कीमत ₹50 है, परन्तु 7 पेंसिल और 5 पेन की कुल कीमत ₹46 है। एक पेंसिल और एक पेन की कीमत ज्ञात करें। [18 (A) II]",
                    "answer": "माना 1 पेंसिल की कीमत = x रु०\\nऔर 1 पेन की कीमत = y रु०\\nप्रश्नानुसार, पहला समीकरण:\\n5x + 7y = 50   ...(i)\\nदूसरा समीकरण:\\n7x + 5y = 46   ...(ii)\\nसमीकरण (i) को 7 से और (ii) को 5 से गुणा करने पर:\\n35x + 49y = 350 ...(iii)\\n35x + 25y = 230 ...(iv)\\nसमीकरण (iii) में से (iv) को घटाने पर:\\n24y = 120 => y = 5\\ny का मान समीकरण (i) में रखने पर:\\n5x + 7(5) = 50 => 5x + 35 = 50 => 5x = 15 => x = 3\\nअतः 1 पेंसिल की कीमत ₹3 और 1 पेन की कीमत ₹5 है। Ans."
                },
                {
                    "question": "प्रतिस्थापन विधि (Substitution Method) से निम्न रैखिक समीकरण युग्म का हल करें: 7x - 15y = 2 और x + 2y = 3 [15 (C)]",
                    "answer": "दिया है:\\n7x - 15y = 2   ...(i)\\nx + 2y = 3     ...(ii)\\nसमीकरण (ii) से x का मान निकालने पर:\\nx = 3 - 2y     ...(iii)\\nx का मान समीकरण (i) में रखने पर:\\n7(3 - 2y) - 15y = 2\\n=> 21 - 14y - 15y = 2\\n=> 21 - 29y = 2\\n=> 29y = 19 => y = 19/29\\ny का मान समीकरण (iii) में रखने पर:\\nx = 3 - 2(19/29) = 3 - 38/29 = (87 - 38)/29 = 49/29\\nअतः x = 49/29 और y = 19/29. Ans."
                },
                {
                    "question": "m के किस मान के लिए निम्नांकित रैखिक समीकरणों के युग्म का कोई हल नहीं होगा? 3x + y = 1 तथा (2m - 1)x + (m - 1)y = 2m + 1 [23 (A) I]",
                    "answer": "समीकरणों की तुलना a1x + b1y = c1 और a2x + b2y = c2 से करने पर:\\na1 = 3, b1 = 1, c1 = 1\\na2 = (2m - 1), b2 = (m - 1), c2 = (2m + 1)\\nकोई हल नहीं होने की शर्त: a1/a2 = b1/b2 ≠ c1/c2\\n=> 3 / (2m - 1) = 1 / (m - 1) ≠ 1 / (2m + 1)\\nपहले दो पदों को हल करने पर:\\n3 / (2m - 1) = 1 / (m - 1)\\n=> 3(m - 1) = 1(2m - 1)\\n=> 3m - 3 = 2m - 1\\n=> 3m - 2m = 3 - 1\\n=> m = 2\\nअतः m = 2 के लिए समीकरण युग्म का कोई हल नहीं होगा। Ans."
                },
                {
                    "question": "समीकरण निकाय 2x + 5y = 1 और 2x + 3y = 3 को वज्र-गुणन विधि (Cross Multiplication) से हल करें। [20 (A) I]",
                    "answer": "समीकरणों को मानक रूप में लिखने पर:\\n2x + 5y - 1 = 0  (a1=2, b1=5, c1=-1)\\n2x + 3y - 3 = 0  (a2=2, b2=3, c2=-3)\\nवज्र-गुणन सूत्र: x / (b1c2 - b2c1) = y / (c1a2 - c2a1) = 1 / (a1b2 - a2b1)\\n=> x / ((5)(-3) - (3)(-1)) = y / ((-1)(2) - (-3)(2)) = 1 / ((2)(3) - (2)(5))\\n=> x / (-15 + 3) = y / (-2 + 6) = 1 / (6 - 10)\\n=> x / -12 = y / 4 = 1 / -4\\nx के लिए: x / -12 = 1 / -4 => x = -12 / -4 = 3\\ny के लिए: y / 4 = 1 / -4 => y = 4 / -4 = -1\\nअतः x = 3 और y = -1. Ans."
                },
                {
                    "question": "यदि समीकरण युग्म 2x + ky = 3 और x - hy = 2 का हल x = 1, y = 3 हो, तो h और k का मान निकालें। [22 (A)]",
                    "answer": "दिया गया हल x = 1 और y = 3 है।\\nसमीकरण (i) में x और y का मान रखने पर:\\n2(1) + k(3) = 3\\n=> 2 + 3k = 3 => 3k = 1 => k = 1/3\\nसमीकरण (ii) में x और y का मान रखने पर:\\n1 - h(3) = 2\\n=> 1 - 3h = 2 => -3h = 1 => h = -1/3\\nअतः h = -1/3 और k = 1/3. Ans."
                },
                {
                    "question": "निम्नलिखित रैखिक समीकरण युग्म को हल करें (विलोपन विधि द्वारा): 11x + 5y + 23 = 0 तथा 7x - 2y - 20 = 0 [18 (C)]",
                    "answer": "समीकरणों को व्यवस्थित करने पर:\\n11x + 5y = -23  ...(i)\\n7x - 2y = 20    ...(ii)\\nसमीकरण (i) को 2 से और (ii) को 5 से गुणा करने पर:\\n22x + 10y = -46 ...(iii)\\n35x - 10y = 100 ...(iv)\\nसमीकरण (iii) और (iv) को जोड़ने पर:\\n57x = 54 => x = 54/57 = 18/19\\nअतः x = 18/19 है। Ans."
                }
            ],
            "long": [
                {
                    "question": "(Mega-Question) निम्नलिखित रैखिक समीकरणों को ग्राफीय विधि (Graphical Method) से हल कीजिए: x + 3y = 6 तथा 2x - 3y = 12 [11 (A), 11 (C), 16 (C), 17 (A) I, 22 (C), 25 (A) I]",
                    "answer": "समीकरण (i): x + 3y = 6 => x = 6 - 3y\\nसारणी (Table) 1:\\nजब y = 0, तो x = 6 - 3(0) = 6\\nजब y = 2, तो x = 6 - 3(2) = 0\\nबिंदु: (6, 0) और (0, 2)\\n\\nसमीकरण (ii): 2x - 3y = 12 => 2x = 12 + 3y => x = (12 + 3y) / 2\\nसारणी (Table) 2:\\nजब y = 0, तो x = (12 + 0) / 2 = 6\\nजब y = -2, तो x = (12 - 6) / 2 = 3\\nबिंदु: (6, 0) और (3, -2)\\n\\nग्राफ खींचने पर, दोनों रेखाएँ बिंदु (6, 0) पर एक-दूसरे को काटती हैं (प्रतिच्छेद करती हैं)।\\nअतः अभीष्ट हल x = 6 और y = 0 है। Ans."
                },
                {
                    "question": "यदि किसी भिन्न के अंश तथा हर में 2 जोड़ दिया जाए, तो वह 9/11 हो जाती है। यदि अंश व हर दोनों में 3 जोड़ दिया जाए तो वह 5/6 हो जाती है। भिन्न ज्ञात कीजिए। [12 (A), 19 (C)]",
                    "answer": "माना कि भिन्न का अंश x है और हर y है।\\nअतः भिन्न = x / y\\nपहली शर्त के अनुसार:\\n(x + 2) / (y + 2) = 9/11\\n=> 11(x + 2) = 9(y + 2)\\n=> 11x + 22 = 9y + 18\\n=> 11x - 9y = -4  ...(i)\\n\\nदूसरी शर्त के अनुसार:\\n(x + 3) / (y + 3) = 5/6\\n=> 6(x + 3) = 5(y + 3)\\n=> 6x + 18 = 5y + 15\\n=> 6x - 5y = -3   ...(ii)\\n\\nसमीकरण (i) को 5 से और (ii) को 9 से गुणा करने पर:\\n55x - 45y = -20 ...(iii)\\n54x - 45y = -27 ...(iv)\\n(iii) में से (iv) को घटाने पर:\\nx = 7\\nx का मान समीकरण (ii) में रखने पर:\\n6(7) - 5y = -3\\n=> 42 - 5y = -3 => 5y = 45 => y = 9\\nअतः अभीष्ट भिन्न = x / y = 7/9. Ans."
                },
                {
                    "question": "दो अंकों की एक संख्या अपने अंकों के जोड़ की चार गुनी है एवं अपने अंकों के गुणनफल की दुगुनी है तो संख्या ज्ञात करें। [25 (A) I]",
                    "answer": "माना इकाई का अंक = x और दहाई का अंक = y\\nअतः संख्या = 10y + x\\nपहली शर्त के अनुसार (संख्या अंकों के जोड़ की 4 गुनी है):\\n10y + x = 4(x + y)\\n=> 10y + x = 4x + 4y\\n=> 3x - 6y = 0 => 3(x - 2y) = 0 => x = 2y  ...(i)\\n\\nदूसरी शर्त के अनुसार (संख्या अंकों के गुणनफल की 2 गुनी है):\\n10y + x = 2(xy)\\nसमीकरण (i) से x = 2y का मान रखने पर:\\n10y + 2y = 2(2y × y)\\n=> 12y = 4y²\\nचूँकि y ≠ 0 (दहाई का अंक 0 नहीं हो सकता), इसलिए y से भाग देने पर:\\n4y = 12 => y = 3\\nअब, x = 2y = 2(3) = 6\\nअतः अभीष्ट संख्या = 10y + x = 10(3) + 6 = 36. Ans."
                },
                {
                    "question": "निम्न रैखिक समीकरण युग्म को प्रतिस्थापन विधि से हल कीजिए: √2x + √3y = 0 तथा √3x - √8y = 0 [12 (C), 24 (A) I]",
                    "answer": "√2x + √3y = 0  ...(i)\\n√3x - √8y = 0  ...(ii)\\nसमीकरण (i) से x का मान निकालने पर:\\n√2x = -√3y => x = (-√3y) / √2  ...(iii)\\nx का मान समीकरण (ii) में रखने पर:\\n√3( (-√3y) / √2 ) - √8y = 0\\n=> -3y / √2 - √8y = 0\\ny कॉमन (common) लेने पर:\\ny( -3/√2 - √8 ) = 0\\nचूँकि ब्रैकेट के अंदर की संख्या 0 नहीं है, इसलिए:\\ny = 0\\ny का मान समीकरण (iii) में रखने पर:\\nx = (-√3 × 0) / √2 = 0\\nअतः x = 0 और y = 0. Ans."
                },
                {
                    "question": "a और b के किन मानों के लिए, निम्न रैखिक समीकरणों के युग्म के अपरिमित रूप से अनेक हल (Infinite solutions) होंगे? 2x + 3y = 7 तथा (a-b)x + (a+b)y = 3a+b-2 [23 (A) I]",
                    "answer": "अपरिमित रूप से अनेक हल होने की शर्त: a1/a2 = b1/b2 = c1/c2\\nयहाँ, a1=2, b1=3, c1=7\\na2=(a-b), b2=(a+b), c2=(3a+b-2)\\nमान रखने पर:\\n2 / (a-b) = 3 / (a+b) = 7 / (3a+b-2)\\n\\nपहले और दूसरे भाग को बराबर करने पर:\\n2 / (a-b) = 3 / (a+b)\\n=> 2(a+b) = 3(a-b)\\n=> 2a + 2b = 3a - 3b\\n=> a = 5b  ...(i)\\n\\nअब दूसरे और तीसरे भाग को बराबर करने पर:\\n3 / (a+b) = 7 / (3a+b-2)\\n=> 3(3a + b - 2) = 7(a + b)\\n=> 9a + 3b - 6 = 7a + 7b\\n=> 2a - 4b = 6\\n=> a - 2b = 3 ...(ii)\\n\\nसमीकरण (i) से a = 5b का मान समीकरण (ii) में रखने पर:\\n5b - 2b = 3 => 3b = 3 => b = 1\\nb = 1 का मान (i) में रखने पर:\\na = 5(1) = 5\\nअतः a = 5 तथा b = 1. Ans."
                },
                {
                    "question": "आलेखीय (ग्राफीय) विधि से निम्न रैखिक समीकरण युग्म को हल करें: 4x - 5y = 20 तथा 3x + 5y = 15 [16 (A) I, 22 (A) I]",
                    "answer": "दिया गया समीकरण युग्म है:\\nसमीकरण (i): 4x - 5y = 20  =>  4x = 20 + 5y  =>  x = (20 + 5y) / 4\\nसमीकरण (ii): 3x + 5y = 15  =>  3x = 15 - 5y  =>  x = (15 - 5y) / 3\\n\\nसमीकरण (i) के लिए मान सारणी (Table 1):\\n- जब y = 0 रखते हैं, तो x = (20 + 0) / 4 = 5\\n- जब y = -4 रखते हैं, तो x = (20 - 20) / 4 = 0\\nबिंदु प्राप्त हुए: (5, 0) और (0, -4)\\n\\nसमीकरण (ii) के लिए मान सारणी (Table 2):\\n- जब y = 0 रखते हैं, तो x = (15 - 0) / 3 = 5\\n- जब y = 3 रखते हैं, तो x = (15 - 15) / 3 = 0\\nबिंदु प्राप्त हुए: (5, 0) और (0, 3)\\n\\n<div align=\\"center\\"><img src=\\"images/math_ch3_q6_graph.png\\" alt=\\"Graph for 4x - 5y = 20 and 3x + 5y = 15\\" width=\\"500\\"></div>\\n\\nग्राफ से स्पष्ट है कि दोनों रेखाएँ एक-दूसरे को बिंदु (5, 0) पर प्रतिच्छेद (Intersect) करती हैं।\\nअतः, दिए गए समीकरण युग्म का हल x = 5 और y = 0 है। Ans."
                },
                {
                    "question": "निम्नलिखित रैखिक समीकरण निकाय को आलेखीय (ग्राफीय) विधि से हल करें: 5x - 6y + 30 = 0 तथा 5x + 4y - 20 = 0 [19 (C), 24 (A) II]",
                    "answer": "दिया गया समीकरण युग्म है:\\nसमीकरण (i): 5x - 6y + 30 = 0  =>  6y = 5x + 30  =>  y = (5x + 30) / 6\\nसमीकरण (ii): 5x + 4y - 20 = 0  =>  4y = 20 - 5x  =>  y = (20 - 5x) / 4\\n\\nसमीकरण (i) के लिए मान सारणी (Table 1):\\n- जब x = 0 रखते हैं, तो y = (0 + 30) / 6 = 5\\n- जब x = -6 रखते हैं, तो y = (-30 + 30) / 6 = 0\\nबिंदु प्राप्त हुए: (0, 5) और (-6, 0)\\n\\nसमीकरण (ii) के लिए मान सारणी (Table 2):\\n- जब x = 0 रखते हैं, तो y = (20 - 0) / 4 = 5\\n- जब x = 4 रखते हैं, तो y = (20 - 20) / 4 = 0\\nबिंदु प्राप्त हुए: (0, 5) और (4, 0)\\n\\n<div align=\\"center\\"><img src=\\"images/math_ch3_q7_graph.png\\" alt=\\"Graph for 5x - 6y + 30 = 0 and 5x + 4y - 20 = 0\\" width=\\"500\\"></div>\\n\\nग्राफ खींचने पर हम पाते हैं कि दोनों सरल रेखाएँ एक-दूसरे को बिंदु (0, 5) पर काटती हैं।\\nअतः, दिए गए समीकरण युग्म का हल x = 0 और y = 5 है। Ans."
                }
            ]
        }`;

// Find the pyq block for chapter 3 (between the importantQuestions closing and chapter closing)
// We look for the pattern: after the chapter "दो चर वाले रैखिक समीकरण युग्म"
// Find start and end of the pyq block
const ch3Marker = '"chapter": "\u0926\u094b \u091a\u0930\u094b\u0902 \u0935\u093e\u0932\u0947 \u0930\u0948\u0916\u093f\u0915 \u0938\u092e\u0940\u0915\u0930\u0923 \u092f\u0941\u0917\u094d\u092e"';
const ch3Start = content.indexOf(ch3Marker);
if (ch3Start === -1) {
    console.error('ERROR: Chapter 3 marker not found!');
    process.exit(1);
}

// Find the pyq block start after ch3Start
const pyqStart = content.indexOf('"pyq":', ch3Start);
if (pyqStart === -1) {
    console.error('ERROR: pyq block not found after Chapter 3!');
    process.exit(1);
}

// Find the next chapter start (after this pyq block) to define pyq end
// The pyq block ends with "        }" followed by newline and "    }," (chapter closing)
// We need to find the closing of the pyq block properly
// Strategy: find the next chapter object start after pyqStart
const nextChapterMarker = '"subject": "Mathematics"';
const nextSubjPos = content.indexOf(nextChapterMarker, pyqStart + 10);
if (nextSubjPos === -1) {
    console.error('ERROR: Next chapter not found!');
    process.exit(1);
}

// Walk back from nextSubjPos to find the start of "    {" for the next chapter
// The pattern is:  "        }\n    },\n    {\n        \"subject\""
// We need the position of "        }" that closes the pyq, before "    }," that closes ch3
const chapterCloseBeforeNext = content.lastIndexOf('    },', nextSubjPos);
// The pyq block ends just before the chapter closing "    },"
const pyqEnd = content.lastIndexOf('        }', chapterCloseBeforeNext) + '        }'.length;

console.log('Chapter 3 pyq starts at position:', pyqStart);
console.log('Chapter 3 pyq ends at position:', pyqEnd);
console.log('Characters to replace:', pyqEnd - pyqStart);

// Do the replacement
const newContent = content.substring(0, pyqStart) + newPyqBlock + content.substring(pyqEnd);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('SUCCESS: Chapter 3 PYQ section replaced!');
console.log('New file length:', newContent.length, 'chars');
