const fs = require('fs');

const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

const chapter8_IQ_Replacement = `{
        "chapter": "त्रिकोणमिति का परिचय",
        "importantQuestions": {
            "short": [
                {
                    "question": "त्रिभुज ABC में, जिसका कोण B समकोण है, AB = 24 सेमी और BC = 7 सेमी है। sin A और cos A का मान ज्ञात कीजिए।",
                    "answer": "समकोण त्रिभुज ABC में पाइथागोरस प्रमेय से:<br>कर्ण² = लंब² + आधार²<br>AC² = AB² + BC²<br>AC² = (24)² + (7)²<br>AC² = 576 + 49 = 625<br>AC = √625 = 25 सेमी।<br><br><div align=\\"center\\"><img class=\\"educational-diagram\\" src=\\"images/math_ch8_s1q1_right_triangle_abc_1775013275519.png\\" alt=\\"त्रिभुज आरेख\\" width=\\"400\\"></div><br>अब, कोण A के लिए: लंब = BC = 7 सेमी, आधार = AB = 24 सेमी, कर्ण = AC = 25 सेमी।<br>sin A = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">BC</span><span class=\\"den\\">AC</span></span> = <span class=\\"frac\\"><span class=\\"num\\">7</span><span class=\\"den\\">25</span></span><br>cos A = <span class=\\"frac\\"><span class=\\"num\\">आधार</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">AB</span><span class=\\"den\\">AC</span></span> = <span class=\\"frac\\"><span class=\\"num\\">24</span><span class=\\"den\\">25</span></span><br>अतः sin A = <span class=\\"frac\\"><span class=\\"num\\">7</span><span class=\\"den\\">25</span></span> और cos A = <span class=\\"frac\\"><span class=\\"num\\">24</span><span class=\\"den\\">25</span></span> है।"
                },
                {
                    "question": "यदि 15 cot A = 8 हो, तो sin A और sec A का मान ज्ञात कीजिए।",
                    "answer": "दिया है: 15 cot A = 8  =>  cot A = <span class=\\"frac\\"><span class=\\"num\\">8</span><span class=\\"den\\">15</span></span><br>हम जानते हैं: cot A = <span class=\\"frac\\"><span class=\\"num\\">आधार</span><span class=\\"den\\">लंब</span></span><br>माना आधार = 8k और लंब = 15k (जहाँ k एक धनात्मक संख्या है)<br><br><div align=\\"center\\"><img class=\\"educational-diagram\\" src=\\"images/math_ch8_s1q2_cot_a_triangle_1775013292308.png\\" alt=\\"त्रिभुज आरेख\\" width=\\"400\\"></div><br>पाइथागोरस प्रमेय से:<br>कर्ण² = (लंब)² + (आधार)²<br>कर्ण² = (15k)² + (8k)² = 225k² + 64k² = 289k²<br>कर्ण = √(289k²) = 17k<br>अब त्रिकोणमितीय अनुपात:<br>sin A = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">15k</span><span class=\\"den\\">17k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">15</span><span class=\\"den\\">17</span></span><br>sec A = <span class=\\"frac\\"><span class=\\"num\\">कर्ण</span><span class=\\"den\\">आधार</span></span> = <span class=\\"frac\\"><span class=\\"num\\">17k</span><span class=\\"den\\">8k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">17</span><span class=\\"den\\">8</span></span>"
                },
                {
                    "question": "मान निकालिए: 2 tan² 45° + cos² 30° - sin² 60°",
                    "answer": "मान रखने पर:<br>tan 45° = 1<br>cos 30° = <span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span><br>sin 60° = <span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span><br>व्यंजक = 2(1)² + (<span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>)² - (<span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>)²<br>= 2(1) + <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span> - <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span><br>चूँकि (<span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span>) और -(<span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span>) आपस में कट जाएंगे।<br>= 2 + 0 = 2<br>अतः मान 2 है।"
                },
                {
                    "question": "यदि sin 3A = cos (A - 26°), जहाँ 3A एक न्यून कोण है, तो A का मान ज्ञात कीजिए।",
                    "answer": "दिया है: sin 3A = cos (A - 26°)<br>हम जानते हैं कि sin θ = cos (90° - θ)<br>इसलिए, sin 3A को cos (90° - 3A) लिख सकते हैं।<br>cos (90° - 3A) = cos (A - 26°)<br>(दोनों तरफ कोणों की तुलना करने पर):<br>90° - 3A = A - 26°<br>90° + 26° = A + 3A<br>116° = 4A<br>A = <span class=\\"frac\\"><span class=\\"num\\">116°</span><span class=\\"den\\">4</span></span><br>A = 29°"
                },
                {
                    "question": "मान ज्ञात कीजिए: (sin 18°) / (cos 72°)",
                    "answer": "हम जानते हैं कि पूरक कोणों के लिए: sin θ = cos (90° - θ)<br>sin 18° = cos (90° - 18°) = cos 72°<br>प्रश्न में मान रखने पर:<br><span class=\\"frac\\"><span class=\\"num\\">cos 72°</span><span class=\\"den\\">cos 72°</span></span> = 1<br>अतः मान 1 है।"
                },
                {
                    "question": "दिखाइए कि tan 48° tan 23° tan 42° tan 67° = 1",
                    "answer": "L.H.S (बायाँ पक्ष) = tan 48° tan 23° tan 42° tan 67°<br>(पदों को एक साथ व्यवस्थित करने पर):<br>= (tan 48° tan 42°) (tan 23° tan 67°)<br>सूत्र tan θ = cot (90° - θ) का प्रयोग करने पर:<br>tan 48° = cot (90° - 48°) = cot 42°<br>tan 23° = cot (90° - 23°) = cot 67°<br>L.H.S = (cot 42° tan 42°) (cot 67° tan 67°)<br>हम जानते हैं कि tan θ × cot θ = 1<br>= (1) × (1) = 1<br>L.H.S = R.H.S (प्रमाणित)"
                },
                {
                    "question": "यदि tan A = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">3</span></span>, तो कोण A के अन्य त्रिकोणमितीय अनुपात ज्ञात कीजिए।",
                    "answer": "tan A = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">आधार</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">3</span></span><br>माना लंब = 4k और आधार = 3k<br>पाइथागोरस से कर्ण = √((4k)² + (3k)²) = √(16k² + 9k²) = √(25k²) = 5k<br>अन्य अनुपात:<br>sin A = <span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4k</span><span class=\\"den\\">5k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">5</span></span><br>cos A = <span class=\\"frac\\"><span class=\\"num\\">आधार</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3k</span><span class=\\"den\\">5k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">5</span></span><br>cosec A = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">sin A</span></span> = <span class=\\"frac\\"><span class=\\"num\\">5</span><span class=\\"den\\">4</span></span><br>sec A = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">cos A</span></span> = <span class=\\"frac\\"><span class=\\"num\\">5</span><span class=\\"den\\">3</span></span><br>cot A = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">tan A</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span>"
                },
                {
                    "question": "यदि A, B और C त्रिभुज ABC के अंतःकोण हों, तो दिखाइए कि sin((B + C) / 2) = cos(A / 2)",
                    "answer": "हम जानते हैं कि त्रिभुज के तीनों अंतःकोणों का योग 180° होता है।<br>A + B + C = 180°<br>B + C = 180° - A<br>दोनों तरफ 2 से भाग देने पर:<br><span class=\\"frac\\"><span class=\\"num\\">B + C</span><span class=\\"den\\">2</span></span> = <span class=\\"frac\\"><span class=\\"num\\">180° - A</span><span class=\\"den\\">2</span></span><br><span class=\\"frac\\"><span class=\\"num\\">B + C</span><span class=\\"den\\">2</span></span> = 90° - <span class=\\"frac\\"><span class=\\"num\\">A</span><span class=\\"den\\">2</span></span><br>दोनों तरफ 'sin' लेने पर:<br>sin(<span class=\\"frac\\"><span class=\\"num\\">B + C</span><span class=\\"den\\">2</span></span>) = sin(90° - <span class=\\"frac\\"><span class=\\"num\\">A</span><span class=\\"den\\">2</span></span>)<br>हम जानते हैं कि sin(90° - θ) = cos θ<br>अतः sin(<span class=\\"frac\\"><span class=\\"num\\">B + C</span><span class=\\"den\\">2</span></span>) = cos(<span class=\\"frac\\"><span class=\\"num\\">A</span><span class=\\"den\\">2</span></span>) (प्रमाणित)"
                },
                {
                    "question": "त्रिकोणमितीय सर्वसमिका sin² θ + cos² θ = 1 को सिद्ध कीजिए।",
                    "answer": "समकोण त्रिभुज PQR में (जहाँ ∠Q = 90° और ∠R = θ):<br>पाइथागोरस प्रमेय से: PQ² + QR² = PR²  ---(समीकरण 1)<br><br><div align=\\"center\\"><img class=\\"educational-diagram\\" src=\\"images/math_ch8_s1q9_sin_cos_identity_proof_1775013310514.png\\" alt=\\"त्रिभुज आरेख\\" width=\\"400\\"></div><br>समीकरण 1 के दोनों पक्षों में PR² (कर्ण²) से भाग देने पर:<br>(PQ² / PR²) + (QR² / PR²) = PR² / PR²<br>(<span class=\\"frac\\"><span class=\\"num\\">PQ</span><span class=\\"den\\">PR</span></span>)² + (<span class=\\"frac\\"><span class=\\"num\\">QR</span><span class=\\"den\\">PR</span></span>)² = 1<br>हम जानते हैं कि:<br><span class=\\"frac\\"><span class=\\"num\\">लंब</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">PQ</span><span class=\\"den\\">PR</span></span> = sin θ<br><span class=\\"frac\\"><span class=\\"num\\">आधार</span><span class=\\"den\\">कर्ण</span></span> = <span class=\\"frac\\"><span class=\\"num\\">QR</span><span class=\\"den\\">PR</span></span> = cos θ<br>मान रखने पर:<br>(sin θ)² + (cos θ)² = 1<br>अर्थात, sin² θ + cos² θ = 1 (प्रमाणित)"
                },
                {
                    "question": "मान निकालिए: sin 60° cos 30° + sin 30° cos 60°",
                    "answer": "त्रिकोणमितीय सारणी से मान रखने पर:<br>sin 60° = <span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>, cos 30° = <span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>, sin 30° = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span>, cos 60° = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span><br>व्यंजक = (<span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>) × (<span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span>) + (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span>) × (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span>)<br>= <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span> + <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">4</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3 + 1</span><span class=\\"den\\">4</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">4</span></span> = 1<br>अतः मान 1 है।"
                },
                {
                    "question": "सिद्ध कीजिए कि cos 38° cos 52° - sin 38° sin 52° = 0",
                    "answer": "L.H.S = cos 38° cos 52° - sin 38° sin 52°<br>हम जानते हैं कि cos θ = sin (90° - θ)<br>cos 38° = sin (90° - 38°) = sin 52°<br>cos 52° = sin (90° - 52°) = sin 38°<br>L.H.S में मान रखने पर:<br>= (sin 52°) (sin 38°) - sin 38° sin 52°<br>= sin 38° sin 52° - sin 38° sin 52° = 0 = R.H.S (प्रमाणित)"
                },
                {
                    "question": "मान निकालिए: (2 tan 30°) / (1 + tan² 30°)",
                    "answer": "tan 30° = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">√3</span></span> रखने पर:<br>अंश = 2 × (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">√3</span></span>) = <span class=\\"frac\\"><span class=\\"num\\">2</span><span class=\\"den\\">√3</span></span><br>हर = 1 + (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">√3</span></span>)² = 1 + <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">3</span></span> = <span class=\\"frac\\"><span class=\\"num\\">4</span><span class=\\"den\\">3</span></span><br>व्यंजक = <span class=\\"frac\\"><span class=\\"num\\">2 / √3</span><span class=\\"den\\">4 / 3</span></span> = <span class=\\"frac\\"><span class=\\"num\\">2</span><span class=\\"den\\">√3</span></span> × <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">4</span></span> = <span class=\\"frac\\"><span class=\\"num\\">3</span><span class=\\"den\\">2√3</span></span><br>3 को (√3 × √3) लिखने पर: <span class=\\"frac\\"><span class=\\"num\\">√3 × √3</span><span class=\\"den\\">2√3</span></span> = <span class=\\"frac\\"><span class=\\"num\\">√3</span><span class=\\"den\\">2</span></span><br>(जो कि sin 60° का मान है)।"
                },
                {
                    "question": "यदि sec θ = <span class=\\"frac\\"><span class=\\"num\\">13</span><span class=\\"den\\">12</span></span> हो, तो अन्य सभी त्रिकोणमितीय अनुपात ज्ञात कीजिए।",
                    "answer": "sec θ = <span class=\\"frac\\"><span class=\\"num\\">कर्ण</span><span class=\\"den\\">आधार</span></span> = <span class=\\"frac\\"><span class=\\"num\\">13</span><span class=\\"den\\">12</span></span><br>माना कर्ण = 13k और आधार = 12k<br>पाइथागोरस से लंब = √((13k)² - (12k)²) = √(169k² - 144k²) = √(25k²) = 5k<br>sin θ = <span class=\\"frac\\"><span class=\\"num\\">5k</span><span class=\\"den\\">13k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">5</span><span class=\\"den\\">13</span></span><br>cos θ = <span class=\\"frac\\"><span class=\\"num\\">12k</span><span class=\\"den\\">13k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">12</span><span class=\\"den\\">13</span></span><br>tan θ = <span class=\\"frac\\"><span class=\\"num\\">5k</span><span class=\\"den\\">12k</span></span> = <span class=\\"frac\\"><span class=\\"num\\">5</span><span class=\\"den\\">12</span></span><br>cosec θ = <span class=\\"frac\\"><span class=\\"num\\">13</span><span class=\\"den\\">5</span></span>, cot θ = <span class=\\"frac\\"><span class=\\"num\\">12</span><span class=\\"den\\">5</span></span>"
                },
                {
                    "question": "सर्वसमिका sec² θ - tan² θ = 1 की सत्यता की जाँच θ = 45° रखकर करें।",
                    "answer": "θ = 45° रखने पर:<br>L.H.S = sec² 45° - tan² 45° = (√2)² - (1)² = 2 - 1 = 1<br>R.H.S = 1<br>अतः प्रमाणित हुआ।"
                },
                {
                    "question": "x का मान ज्ञात करें यदि tan 3x = sin 45° cos 45° + sin 30°",
                    "answer": "R.H.S = (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">√2</span></span>) × (<span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">√2</span></span>) + <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> + <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">2</span></span> = 1<br>tan 3x = 1  =>  tan 3x = tan 45°<br>3x = 45°  =>  x = 15°"
                }
            ],
            "long": [
                {
                    "question": "सिद्ध कीजिए: √[ (1 + sin A) / (1 - sin A) ] = sec A + tan A",
                    "answer": "Step 1: L.H.S (बायाँ पक्ष) लेकर हर का परिमेयकरण करना।<br>L.H.S = √[ <span class=\\"frac\\"><span class=\\"num\\">1 + sin A</span><span class=\\"den\\">1 - sin A</span></span> ]<br>Step 2: √[ <span class=\\"frac\\"><span class=\\"num\\">(1 + sin A)²</span><span class=\\"den\\">(1 - sin A)(1 + sin A)</span></span> ]<br>Step 3: √[ <span class=\\"frac\\"><span class=\\"num\\">(1 + sin A)²</span><span class=\\"den\\">1 - sin² A</span></span> ] = √[ <span class=\\"frac\\"><span class=\\"num\\">(1 + sin A)²</span><span class=\\"den\\">cos² A</span></span> ]<br>Step 4: <span class=\\"frac\\"><span class=\\"num\\">1 + sin A</span><span class=\\"den\\">cos A</span></span> = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">cos A</span></span> + <span class=\\"frac\\"><span class=\\"num\\">sin A</span><span class=\\"den\\">cos A</span></span><br>Step 5: sec A + tan A = R.H.S (इति सिद्धम)"
                },
                {
                    "question": "सिद्ध कीजिए: (cos A) / (1 + sin A) + (1 + sin A) / (cos A) = 2 sec A",
                    "answer": "Step 1: L.H.S = <span class=\\"frac\\"><span class=\\"num\\">cos² A + (1 + sin A)²</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>Step 2: <span class=\\"frac\\"><span class=\\"num\\">cos² A + 1 + sin² A + 2 sin A</span><span class=\\"den\\">cos A(1 + sin A)</span></span><br>Step 3: <span class=\\"frac\\"><span class=\\"num\\">2 + 2 sin A</span><span class=\\"den\\">cos A(1 + sin A)</span></span> (चूँकि sin² A + cos² A = 1)<br>Step 4: <span class=\\"frac\\"><span class=\\"num\\">2(1 + sin A)</span><span class=\\"den\\">cos A(1 + sin A)</span></span> = <span class=\\"frac\\"><span class=\\"num\\">2</span><span class=\\"den\\">cos A</span></span><br>Step 5: 2 sec A = R.H.S (इति सिद्धम)"
                },
                {
                    "question": "सिद्ध कीजिए: (sin A + cosec A)² + (cos A + sec A)² = 7 + tan² A + cot² A",
                    "answer": "L.H.S = (sin² A + cosec² A + 2 sin A cosec A) + (cos² A + sec² A + 2 cos A sec A)<br>= (sin² A + cos² A) + cosec² A + sec² A + 2(1) + 2(1)<br>= 1 + (1 + cot² A) + (1 + tan² A) + 4<br>= 7 + tan² A + cot² A = R.H.S (इति सिद्धम)"
                },
                {
                    "question": "सिद्ध कीजिए: (tan θ) / (1 - cot θ) + (cot θ) / (1 - tan θ) = 1 + sec θ cosec θ",
                    "answer": "Step 1: <span class=\\"frac\\"><span class=\\"num\\">sin θ / cos θ</span><span class=\\"den\\">1 - cos θ / sin θ</span></span> + <span class=\\"frac\\"><span class=\\"num\\">cos θ / sin θ</span><span class=\\"den\\">1 - sin θ / cos θ</span></span><br>Step 2: <span class=\\"frac\\"><span class=\\"num\\">sin² θ</span><span class=\\"den\\">cos θ(sin θ - cos θ)</span></span> + <span class=\\"frac\\"><span class=\\"num\\">cos² θ</span><span class=\\"den\\">sin θ(cos θ - sin θ)</span></span><br>Step 3: <span class=\\"frac\\"><span class=\\"num\\">sin³ θ - cos³ θ</span><span class=\\"den\\">sin θ cos θ (sin θ - cos θ)</span></span><br>Step 4: <span class=\\"frac\\"><span class=\\"num\\">(sin θ - cos θ)(sin² θ + cos² θ + sin θ cos θ)</span><span class=\\"den\\">sin θ cos θ (sin θ - cos θ)</span></span><br>Step 5: <span class=\\"frac\\"><span class=\\"num\\">1 + sin θ cos θ</span><span class=\\"den\\">sin θ cos θ</span></span> = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">sin θ cos θ</span></span> + 1 = 1 + sec θ cosec θ"
                },
                {
                    "question": "सिद्ध कीजिए: (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ",
                    "answer": "L.H.S = <span class=\\"frac\\"><span class=\\"num\\">sin θ (1 - 2 sin² θ)</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ (1 - 2(1 - cos² θ))</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ (2 cos² θ - 1)</span><span class=\\"den\\">cos θ (2 cos² θ - 1)</span></span><br>= <span class=\\"frac\\"><span class=\\"num\\">sin θ</span><span class=\\"den\\">cos θ</span></span> = tan θ = R.H.S"
                }
            ]
        },`;

// Find Chapter 8 block using the chapter name
const ch8Title = '"chapter": "त्रिकोणमिति का परिचय"';
const startIdx = content.indexOf(ch8Title);
const endIdx = content.indexOf('"pyq": {', startIdx);

if (startIdx === -1 || endIdx === -1) {
    console.error("Chapter 8 IQ block not found");
    process.exit(1);
}

// Find the opening brace before the chapter title
let actualStartIdx = content.lastIndexOf('{', startIdx);

// Extract and replace
const newContent = content.substring(0, actualStartIdx) + chapter8_IQ_Replacement + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log("Successfully professionalized Chapter 8 IQ answers via script.");
process.exit(0);
