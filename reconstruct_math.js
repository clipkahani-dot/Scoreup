const fs = require('fs');

function fixMathData() {
    const lines = fs.readFileSync('math-data.js', 'utf-8').split('\n');

    // Prefix (Ch 1-8) - Use lines 1 to 993 from original
    // Original line 1 is "const mathData = ["
    // We want to keep it once.
    const prefixFixed = lines.slice(0, 993); 
    
    const ch8_end = [
        "        }\n",
        "      ]\n",
        "    }\n",
        "  },\n"
    ];

    // Ch 9-12
    // Line 1013 starts Ch 9. Line indices: 1012 to 1502.
    const ch9_12 = lines.slice(1012, 1503);

    // Ch 13 (Latest from User)
    const ch13 = {
        "subject": "Mathematics",
        "class_level": "10",
        "chapter": "पृष्ठीय क्षेत्रफल और आयतन",
        "importantQuestions": {
            "short": [
                {"question": "एक बेलन (Cylinder) के वक्र पृष्ठीय क्षेत्रफल (CSA) और कुल पृष्ठीय क्षेत्रफल (TSA) का सूत्र लिखिए।", "answer": "यदि बेलन की त्रिज्या r और ऊँचाई h हो, तो:<br>वक्र पृष्ठीय क्षेत्रफल (CSA) = 2πrh<br>कुल पृष्ठीय क्षेत्रफल (TSA) = 2πr(r + h)"},
                {"question": "5 सेमी किनारे वाले एक घन (Cube) का आयतन और संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", "answer": "घन का किनारा (a) = 5 सेमी।<br>घन का आयतन = a³ = (5)³ = 125 सेमी³<br>घन का संपूर्ण पृष्ठीय क्षेत्रफल = 6a² = 6 × (5)² = 150 सेमी²"},
                {"question": "उस गोले (Sphere) का पृष्ठीय क्षेत्रफल ज्ञात कीजिए जिसकी त्रिज्या 14 सेमी है।", "answer": "गोले की त्रिज्या (r) = 14 सेमी।<br>गोले का पृष्ठीय क्षेत्रफल = 4πr² = 4 × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 14 × 14 = 2464 सेमी²"},
                {"question": "एक शंकु (Cone) की ऊँचाई 12 सेमी और आधार की त्रिज्या 5 सेमी है। शंकु की तिर्यक ऊँचाई (Slant height) ज्ञात कीजिए।", "answer": "शंकु की त्रिज्या (r) = 5 सेमी, ऊँचाई (h) = 12 सेमी।<br>तिर्यक ऊँचाई (l) = √(r² + h²) = √(5² + 12²) = √169 = 13 सेमी।"},
                {"question": "7 सेमी त्रिज्या वाले एक अर्धगोले (Hemisphere) का कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", "answer": "अर्धगोले की त्रिज्या (r) = 7 सेमी।<br>अर्घगोले का कुल पृष्ठीय क्षेत्रफल (TSA) = 3πr² = 3 × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 7 × 7 = 462 सेमी²"}
            ],
            "long": [
                {"question": "कोई बर्तन एक खोखले अर्धगोले के आकार का है जिसके ऊपर एक खोखला बेलन अध्यारोपित है। अर्धगोले का व्यास 14 सेमी है और इस बर्तन की कुल ऊँचाई 13 सेमी है। बर्तन का आंतरिक पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", "answer": "<b>Step 1:</b> अर्धगोले की त्रिज्या (r) = 7 सेमी, कुल ऊँचाई = 13 सेमी।<br><b>Step 2:</b> बेलन की ऊँचाई (h) = 13 - 7 = 6 सेमी।<br><b>Step 3:</b> आंतरिक क्षेत्रफल = (बेलन का CSA) + (अर्धगोले का CSA) = 2πrh + 2πr² = 2πr(h + r)<br><b>Step 4:</b> 2 × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 7 × (6 + 7) = 44 × 13 = 572 सेमी²। Ans."}
            ]
        },
        "pyq": {
            "short": [
                {"question": "Q1. उस गोले का पृष्ठ क्षेत्रफल निकालें जिसका व्यास 14 सेमी है। [Years: 15 (A) II, 17 (A) I, 19 (A) I, 22 (C)]", "answer": "हल:<br>गोले का व्यास (d) = 14 सेमी<br>अतः गोले की त्रिज्या (r) = d / 2 = 14 / 2 = 7 सेमी<br>गोले का पृष्ठीय क्षेत्रफल = 4πr²<br>= 4 × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × (7)² = 616 सेमी²। Ans."},
                {"question": "Q2. किसी घन का विकर्ण 9√3 सेमी है। घन का कुल पृष्ठ क्षेत्रफल ज्ञात करें। [Years: 23 (A) I, 25 (A) I]", "answer": "हल:<br>घन का विकर्ण = √3 × भुजा<br>9√3 = √3 × a => a = 9 सेमी।<br>कुल पृष्ठ क्षेत्रफल = 6a² = 6 × (9)² = 486 सेमी²। Ans."},
                {"question": "Q3. एक बेलन की ऊँचाई और त्रिज्या प्रत्येक 14 सेमी है, तो इसका आयतन ज्ञात करें।", "answer": "हल:<br>r = 14 सेमी, h = 14 सेमी।<br>आयतन = πr²h = (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 14 × 14 × 14 = 8624 सेमी³। Ans."},
                {"question": "Q4. एक शंकु की ऊँचाई 24 सेमी और आधार की त्रिज्या 7 सेमी है। इसकी तिर्यक ऊँचाई और आयतन निकालें।", "answer": "हल:<br>l = √(r² + h²) = √(7² + 24²) = 25 सेमी।<br>आयतन = (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>)πr²h = (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>) × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 7 × 7 × 24 = 1232 सेमी³। Ans."},
                {"question": "Q5. एक अर्धगोले की त्रिज्या 7 सेमी है, तो इसका वक्व पृष्ठ क्षेत्रफल निकालें।", "answer": "हल:<br>r = 7 सेमी।<br>C.S.A = 2πr² = 2 × (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 7 × 7 = 308 सेमी²। Ans."},
                {"question": "Q6. एक खिलौना त्रिज्या 3.5 सेमी वाले एक शंकु के आकार का है, जो उसी त्रिज्या वाले एक अर्धगोले पर अध्यारोपित है। इस खिलौने की संपूर्ण ऊँचाई 15.5 सेमी है। इस खिलौने का संपूर्ण पृष्ठीय क्षेत्रफल ज्ञात कीजिए।", "answer": "हल:<br>r = 3.5 सेमी, h = 12 सेमी, l = 12.5 सेमी।<br>T.S.A = πrl + 2πr² = πr(l + 2r) = (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × 3.5 × (12.5 + 7) = 11 × 19.5 = 214.5 सेमी²। Ans."},
                {"question": "Q7. 4.2 सेमी त्रिज्या के एक गोले को पिघलाकर 6 सेमी त्रिज्या वाले एक बेलन के रूप में ढाला जाता है। बेलन की ऊँचाई निकालें।", "answer": "हल:<br>गोले का आयतन = बेलन का आयतन<br>(<span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span>)π(4.2)³ = π(6)² × h<br>h = (<span class=\"frac\"><span class=\"num\">4</span><span class=\"den\">3</span></span> × 74.088) / 36 = 2.74 सेमी। Ans."}
            ],
            "long": [
                {"question": "Q1. व्यास 7 m वाला 20 m गहरा एक कुआँ खोदा जाता है और खोदने से निकली हुई मिट्टी को समान रूप से फैलाकर 22 m × 14 m वाला एक चबूतरा बनाया गया है। इस चबूतरे की ऊँचाई ज्ञात कीजिए। [Years: 24 (A) I]", "answer": "<b>Step 1:</b> निकाली गई मिट्टी का आयतन (बेलन) = πr²h = (<span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span>) × (3.5)² × 20 = 770 मी³।<br><b>Step 2:</b> चबूतरे का आयतन = L × B × H = 22 × 14 × H<br><b>Step 3:</b> 770 = 308 × H => H = 2.5 मीटर। Ans."},
                {"question": "Q2. व्यास 3 m का एक कुआँ 14 m की गहराई तक खोदा जाता है। इससे निकली हुई मिट्टी को कुएँ के चारों ओर 4 m चौड़ी एक वृत्ताकार वलय बनाते हुए बाँध बनाया जाता है। इस बाँध की ऊँचाई ज्ञात कीजिए। [Years: 16 (C), 19 (A) I, 23 (A) II]", "answer": "<img src=\"images/math_ch13_pyq_q2_embankment_1775188421199.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> कुएँ की मिट्टी का आयतन = π(1.5)² × 14 = 31.5π मी³。<br><b>Step 2:</b> बाँध (वलय) का आयतन = π(R² - r²)H = π(5.5² - 1.5²)H = 28πH.<br><b>Step 3:</b> 28πH = 31.5π => H = 1.125 मीटर। Ans."},
                {"question": "Q3. 6 m चौड़ी और 1.5 m गहरी एक नहर में पानी 10 km/h की चाल से बह रहा है। 30 मिनट में यह नहर कितने क्षेत्रफल की सिंचाई कर पाएगी, जबकि सिंचाई के लिए 8 cm गहरे पानी की आवश्यकता होती है? [Years: 19 (A) I]", "answer": "<b>Step 1:</b> 30 मिनट में पानी का आयतन = (6 × 1.5) × (10000 / 2) = 45000 मी³。<br><b>Step 2:</b> सिंचाई क्षेत्र का क्षेत्रफल × 0.08 = 45000<br><b>Step 3:</b> क्षेत्रफल = 5,62,500 मी² (56.25 हेक्टेयर)। Ans."},
                {"question": "Q4. एक किसान अपने खेत में बनी 10 m व्यास वाली और 2 m गहरी एक बेलनाकार टंकी को 20 cm व्यास के पाइप (3 km/h चाल) से जोड़ता है। कितने समय बाद टंकी पूरी भर जाएगी? [Years: 17 (C), 18 (C)]", "answer": "<img src=\"images/math_ch13_pyq_q4_pipe_tank_1775188438848.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> टंकी का आयतन = π(5)² × 2 = 50π मी³。<br><b>Step 2:</b> पाइप का आयतन प्रति घंटा = π(0.1)² × 3000 = 30π मी³/घं।<br><b>Step 3:</b> समय = 50/30 = 5/3 घंटा = 100 मिनट। Ans."}
            ]
        }
    };

    // Ch 14-15 (Suffix)
    // Ch 14 IQ from lines 1691 to 1776 (original file)
    const ch14_iq = lines.slice(1690, 1776);
    const ch14_pyq = {
        "short": [
            {"question": "Q1. प्रथम पाँच प्राकृतिक संख्याओं का माध्य ज्ञात करें। [Years: 17 (A) I, 22 (A) II]", "answer": "माध्य = (1+2+3+4+5)/5 = 3. Ans."},
            {"question": "Q2. आँकड़ों 2, 6, 4, 5, 0, 2, 1, 3, 2, 3 का बहुलक ज्ञात करें।", "answer": "यहाँ 2 की बारंबारता सबसे अधिक (3 बार) है, अतः बहुलक = 2। Ans."}
        ],
        "long": [
            {"question": "Q1. निम्नलिखित बारंबारता बंटन का माध्य ज्ञात कीजिए। [Years: 15 (A) II, 23 (A) I]", "answer": "प्रत्यक्ष विधि: Σfx/Σf का प्रयोग करके। (हल सारणी सहित)"}
        ]
    };
    // Ch 15 IQ from lines 1801 to 1891 (original file)
    const ch15_iq = lines.slice(1800, 1890);
    const ch15_pyq = {
        "short": [
            {"question": "Q1. एक पासे को फेंकने पर 3 आने की प्रायिकता क्या है? [Years: 14 (A) I]", "answer": "कुल परिणाम = 6, अनुकूल = 1. प्रायिकता = 1/6. Ans."},
            {"question": "Q2. यदि P(E) = 0.05 है, तो P(not E) क्या होगा? [Years: 18 (A) I, 25 (A) II]", "answer": "1 - 0.05 = 0.95. Ans."}
        ],
        "long": [
            {"question": "Q1. दो सिक्कों को एक साथ उछाला जाता है. कम से कम एक चित आने की प्रायिकता ज्ञात करें। [Years: 22 (A) II]", "answer": "कुल परिणाम {HH, HT, TH, TT} = 4. अनुकूल {HH, HT, TH} = 3. P = 3/4. Ans."}
        ]
    };

    const stream = fs.createWriteStream('math-data-restored.js');
    
    // We don't write "const mathData = [" manually because it's in prefixFixed[0]
    prefixFixed.forEach(l => stream.write(l + '\n'));
    ch8_end.forEach(l => stream.write(l));
    
    ch9_12.forEach((l, i) => {
        stream.write(l + (i === ch9_12.length - 1 ? '' : '\n'));
    });
    stream.write(",\n");
    
    stream.write(JSON.stringify(ch13, null, 2));
    stream.write(",\n");
    
    ch14_iq.forEach((l, i) => {
        stream.write(l + (i === ch14_iq.length - 1 ? '' : '\n'));
    });
    stream.write("\n    },\n    \"pyq\": " + JSON.stringify(ch14_pyq, null, 2) + "\n  },\n");
    
    ch15_iq.forEach((l, i) => {
        stream.write(l + (i === ch15_iq.length - 1 ? '' : '\n'));
    });
    stream.write("\n    },\n    \"pyq\": " + JSON.stringify(ch15_pyq, null, 2) + "\n  }\n");
    
    stream.write("];\n\nif (typeof module !== 'undefined') {\n  module.exports = mathData;\n}");
    stream.end();
}

fixMathData();
