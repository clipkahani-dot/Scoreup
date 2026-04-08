const fs = require('fs');

/**
 * RECONSTRUCTION SCRIPT FOR MATH-DATA.JS (v3)
 * Full cleanup of syntax and layout.
 */

const mathDataFile = 'math-data.js';
const outputFile = 'math-data-restored.js';

function reconstruct() {
    const lines = fs.readFileSync(mathDataFile, 'utf-8').split('\n');

    // Ch 1-5
    // Starts from line 1 ("const mathData = [")
    // Ends at the line that closes Ch 5.
    // Line 618 is "  }," which closes Ch 5. Index 617.
    // However, I want to exclude the "const mathData = [" for the array assembly.
    const ch1_5_content = lines.slice(1, 618).join('\n');

    // Ch 6 REBUILD
    const ch6 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "त्रिभुज",
        "importantQuestions": {
            "short": [
                { "question": "थेल्स प्रमेय (BP.T.) का कथन लिखिए।", "answer": "यदि किसी त्रिभुज की एक भुजा के समांतर अन्य दो भुजाओं को भिन्न-भिन्न बिंदुओं पर प्रतिच्छेद करने के लिए एक रेखा खींची जाए, तो ये अन्य दो भुजाएं एक ही अनुपात में विभाजित हो जाती हैं।" },
                { "question": "समकोण त्रिभुज की भुजाओं 3, 4, 5 में कर्ण कौन सी है?", "answer": "सबसे लंबी भुजा 5 कर्ण है।" }
            ],
            "long": [
                { "question": "पाइथागोरस प्रमेय को सिद्ध करें।", "answer": "<b>AC² = AB² + BC²</b><br>सिद्ध करने के लिए रचना और समरूपता (∆ADB ~ ∆ABC) का प्रयोग किया जाता है।" }
            ]
        },
        "pyq": {
            "short": [
                { "question": "यदि DE || BC, AD=1.5, DB=3, AE=1 हो तो EC ज्ञान करें।", "answer": "EC = 2 cm. Ans." }
            ],
            "long": [
                { "question": "थेल्स प्रमेय सिद्ध कीजिए। [Years: 24 (A) I]", "answer": "<img src=\"images/math_ch6_thales_v3.png\" class=\"diagram-float educational-diagram\">क्षेत्रफल के अनुपात द्वारा सिद्ध किया गया।" }
            ]
        }
    };

    // Ch 7 Content (Coordinates)
    // Starts line 740 ("  {"). Index 739.
    // Ends line 876 ("  },"). Index 875.
    const ch7Content = lines.slice(739, 876).join('\n');

    // Ch 8 REBUILD (Trigonometry)
    const ch8 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "त्रिकोणमिति का परिचय",
        "importantQuestions": {
            "short": [
                { "question": "sin² θ + cos² θ का मान क्या होगा?", "answer": "1" }
            ],
            "long": [
                { "question": "सिद्ध करें कि: (cosec θ - cot θ)² = (1 - cos θ)/(1 + cos θ)", "answer": "<b>L.H.S</b> = (1/sin - cos/sin)² = (1-cos)²/sin² = (1-cos)²/(1-cos²) = (1-cos)/(1+cos) = R.H.S." }
            ]
        },
        "pyq": {
            "short": [
                { "question": "यदि tan A = 3/4, तो cos A का मान ज्ञात करें।", "answer": "cos A = 4/5. Ans." }
            ],
            "long": [
                { "question": "सिद्ध करें: (sec A + tan A)(1 - sin A) = cos A", "answer": "(1/cos + sin/cos)(1-sin) = (1+sin)(1-sin)/cos = cos²/cos = cos A." }
            ]
        }
    };

    // Ch 9-12 (T-Apps, Circles, Const, Areas)
    // Starts line 1013 ("  {"). Index 1012.
    // Ends line 1503 ("  },"). Index 1502.
    const ch9_12Content = lines.slice(1012, 1503).join('\n');

    // Ch 13 REBUILD (Surface Areas)
    const ch13 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "पृष्ठीय क्षेत्रफल और आयतन",
        "importantQuestions": {
            "short": [
                {"question": "एक बेलन (Cylinder) के वक्र पृष्ठीय क्षेत्रफल (CSA) और कुल पृष्ठीय क्षेत्रफल (TSA) का सूत्र लिखिए।", "answer": "CSA = 2πrh<br>TSA = 2πr(r + h)"},
                {"question": "5 सेमी किनारे वाले एक घन (Cube) का आयतन ज्ञात कीजिए।", "answer": "आयतन = a³ = 5³ = 125 सेमी³"}
            ],
            "long": [
                {"question": "कोई बर्तन एक खोखले अर्धगोले के आकार का है जिसके ऊपर एक खोखला बेलन अध्यारोपित है। अर्धगोले का व्यास 14 सेमी है और इस बर्तन की कुल ऊँचाई 13 सेमी है। बर्तन का आंतरिक पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", "answer": "<b>Step 1:</b> r = 7 cm, h = 6 cm.<br><b>Step 2:</b> आंतरिक क्षेत्रफल = 2πrh + 2πr² = 2πr(h+r)<br><b>Step 3:</b> 2 × (22/7) × 7 × (6+7) = 572 सेमी²। Ans."}
            ]
        },
        "pyq": {
            "short": [
                {"question": "Q1. उस गोले का पृष्ठ क्षेत्रफल निकालें जिसका व्यास 14 सेमी है। [Years: 15, 17, 19, 22]", "answer": "r = 7 सेमी। क्षेत्रफल = 4πr² = 616 सेमी²। Ans."},
                {"question": "Q2. किसी घन का विकर्ण 9√3 सेमी है। घन का कुल पृष्ठ क्षेत्रफल ज्ञात करें।", "answer": "a = 9 सेमी। TSA = 6a² = 486 सेमी²। Ans."}
            ],
            "long": [
                {"question": "Q1. व्यास 7 m वाला 20 m गहरा एक कुआँ खोदकर निकाली मिट्टी से 22 m × 14 m का चबूतरा बनाया गया है। ऊँचाई ज्ञात करें।", "answer": "<b>H = 2.5 मीटर।</b> बेलन आयतन = चबूतरा आयतन।"},
                {"question": "Q2. व्यास 3 m का एक कुआँ 14 m की गहराई तक खोदा जाता है। बाँध (वलय) की ऊँचाई ज्ञात कीजिए।", "answer": "<img src=\"images/math_ch13_pyq_q2_embankment_1775188421199.png\" class=\"diagram-float educational-diagram\"><b>H = 1.125 मीटर। Ans.</b>"}
            ]
        }
    };

    // Ch 14 REBUILD (Stats)
    const ch14 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "सांख्यिकी",
        "importantQuestions": {
            "short": [ { "question": "माध्य (Mean) का सूत्र लिखें।", "answer": "x̄ = Σfᵢxᵢ / Σfᵢ" } ],
            "long": [ { "question": "बहुलक (Mode) का सूत्र लिखें।", "answer": "Z = l + [ (f₁ - f₀) / (2f₁ - f₀ - f₂) ] × h" } ]
        },
        "pyq": {
            "short": [ { "question": "प्रथम पाँच प्राकृतिक संख्याओं का माध्य क्या है?", "answer": "3. Ans." } ],
            "long": [ { "question": "बहुलक ज्ञात करने की विधि को समझाएं।", "answer": "बहुलक वर्ग की पहचान कर सूत्र का प्रयोग करना। Ans." } ]
        }
    };

    // Ch 15 REBUILD (Prob)
    const ch15 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "प्रायिकता",
        "importantQuestions": {
            "short": [ { "question": "निश्चित घटना की प्रायिकता क्या होती है?", "answer": "1" } ],
            "long": [ { "question": "एक पासे को फेंकने पर सम संख्या आने की प्रायिकता क्या है?", "answer": "3/6 = 1/2. Ans." } ]
        },
        "pyq": {
            "short": [ { "question": "P(E) = 0.05 हो तो P(not E) क्या होगा?", "answer": "0.95. Ans." } ],
            "long": [ { "question": "दो सिक्कों को उछालने पर हेड आने की सँभावना।", "answer": "3/4 (कम से कम एक के लिए)। Ans." } ]
        }
    };

    const stream = fs.createWriteStream(outputFile);
    stream.write("const mathData = [\n");
    stream.write(ch1_5_content.trim() + ',\n');
    stream.write('  ' + JSON.stringify(ch6, null, 2) + ',\n');
    stream.write(ch7Content.trim() + ',\n');
    stream.write('  ' + JSON.stringify(ch8, null, 2) + ',\n');
    stream.write(ch9_12Content.trim() + ',\n');
    stream.write('  ' + JSON.stringify(ch13, null, 2) + ',\n');
    stream.write('  ' + JSON.stringify(ch14, null, 2) + ',\n');
    stream.write('  ' + JSON.stringify(ch15, null, 2) + '\n');
    stream.write('];\n\nif (typeof module !== "undefined") {\n  module.exports = mathData;\n}');
    stream.end();

    console.log('Math module reconstructed successfully (v3).');
}

reconstruct();
