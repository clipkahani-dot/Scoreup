const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

const shortPYQs = [
  {
    "question": "उस गोले का पृष्ठ क्षेत्रफल निकालें जिसका व्यास 14 सेमी है। [Years: 15 (A) II, 17 (A) I, 19 (A) I, 22 (C)]",
    "answer": "<b>Step 1:</b> गोले की त्रिज्या ज्ञात करना।<br>गोले का व्यास (d) = 14 सेमी।<br>त्रिज्या (r) = <span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">14</span><span class=\"den\">2</span></span> = 7 सेमी।<br><br><b>Step 2:</b> पृष्ठीय क्षेत्रफल की गणना।<br>गोले का पृष्ठीय क्षेत्रफल = 4πr²<br>= 4 × <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × (7)²<br>= 4 × <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × 49<br>= 4 × 22 × 7 = 616 सेमी²। Ans."
  },
  {
    "question": "किसी घन का विकर्ण 9√3 सेमी है। घन का कुल पृष्ठ क्षेत्रफल ज्ञात करें। [Years: 23 (A) I, 25 (A) I]",
    "answer": "<b>Step 1:</b> घन की भुजा ज्ञात करना।<br>माना घन की भुजा = a सेमी।<br>घन का विकर्ण = √3 × a<br>प्रश्नानुसार: √3 × a = 9√3<br>=> a = 9 सेमी।<br><br><b>Step 2:</b> कुल पृष्ठीय क्षेत्रफल।<br>घन का कुल पृष्ठीय क्षेत्रफल = 6a²<br>= 6 × (9)²<br>= 6 × 81 = 486 सेमी²। Ans."
  },
  {
    "question": "दो घनों, जिनमें से प्रत्येक का आयतन 64 सेमी³ है, के संलग्न फलकों को मिलाकर एक ठोस घनाभ बनाया जाता है। इससे प्राप्त घनाभ का पृष्ठीय क्षेत्रफल ज्ञात कीजिए। [Years: 13 (A), 17 (A) II]",
    "answer": "<b>Step 1:</b> घन की भुजा ज्ञात करना।<br>माना घन की भुजा = a सेमी।<br>आयतन a³ = 64 => a = ∛64 = 4 सेमी।<br><br><b>Step 2:</b> घनाभ की विमाएँ।<br>दो घनों को जोड़ने पर बने घनाभ की:<br>लंबाई (l) = 4 + 4 = 8 सेमी, चौड़ाई (b) = 4 सेमी, ऊँचाई (h) = 4 सेमी।<br><br><b>Step 3:</b> पृष्ठीय क्षेत्रफल की गणना।<br>घनाभ का पृष्ठीय क्षेत्रफल = 2(lb + bh + hl)<br>= 2(8×4 + 4×4 + 4×8)<br>= 2(32 + 16 + 32) = 2(80) = 160 सेमी²। Ans."
  },
  {
    "question": "एक लम्बवृत्तीय शंकु का आयतन 100π सेमी³ है और ऊँचाई 12 सेमी है, तो तिर्यक ऊँचाई (Slant height) निकालें। [Years: 15 (A) II]",
    "answer": "<b>Step 1:</b> शंकु की त्रिज्या ज्ञात करना।<br>आयतन (V) = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>πr²h<br>दिया है: 100π = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> × π × r² × 12<br>=> 100 = 4r² => r² = 25 => r = 5 सेमी।<br><br><b>Step 2:</b> तिर्यक ऊँचाई (l) ज्ञात करना।<br>l = √(r² + h²) = √(5² + 12²)<br>= √(25 + 144) = √169 = 13 सेमी। Ans."
  },
  {
    "question": "धातु के तीन घनों के किनारे की लम्बाइयाँ क्रमशः 3 सेमी, 4 सेमी और 5 सेमी हैं। तीनों को पिघलाकर एक नया घन बनाया गया है, तो नये घन के किनारे की लम्बाई क्या होगी? [Years: 16 (A) I]",
    "answer": "<b>Step 1:</b> कुल आयतन ज्ञात करना।<br>तीनों घनों का कुल आयतन = (3)³ + (4)³ + (5)³<br>= 27 + 64 + 125 = 216 सेमी³।<br><br><b>Step 2:</b> नये घन की भुजा।<br>माना नये घन का किनारा A है।<br>A³ = 216 => A = ∛216 = 6 सेमी। Ans."
  },
  {
    "question": "एक शंकु के छिन्नक (Frustum) की तिर्यक ऊँचाई 4 cm है तथा इसके वृत्तीय सिरों के परिमाप 18 cm और 6 cm हैं। इस छिन्नक का वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए। [Years: 18 (C), 25 (A) I]",
    "answer": "<b>Step 1:</b> त्रिज्याओं का मान ज्ञात करना।<br>2πr₁ = 18 => πr₁ = 9<br>2πr₂ = 6 => πr₂ = 3<br>तिर्यक ऊँचाई (l) = 4 cm.<br><br><b>Step 2:</b> वक्र पृष्ठीय क्षेत्रफल।<br>क्षेत्रफल = π(r₁ + r₂)l = (πr₁ + πr₂) × l<br>= (9 + 3) × 4 = 12 × 4 = 48 cm²। Ans."
  },
  {
    "question": "किसी बेलन के वक्रपृष्ठ का क्षेत्रफल 264 मी² तथा आयतन 396 मी³ है। बेलन की त्रिज्या तथा ऊँचाई ज्ञात करें। [Years: 24 (A) I]",
    "answer": "<b>Step 1:</b> सूत्रों का उपयोग।<br>2πrh = 264 --(i)<br>πr²h = 396 --(ii)<br><br><b>Step 2:</b> त्रिज्या (r) ज्ञात करना।<br>समीकरण (ii) को (i) से भाग देने पर:<br><span class=\"frac\"><span class=\"num\">πr²h</span><span class=\"den\">2πrh</span></span> = <span class=\"frac\"><span class=\"num\">396</span><span class=\"den\">264</span></span><br>=> <span class=\"frac\"><span class=\"num\">r</span><span class=\"den\">2</span></span> = 1.5 => r = 3 मीटर।<br><br><b>Step 3:</b> ऊँचाई (h) ज्ञात करना।<br>r = 3 को (i) में रखने पर:<br>2 × <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × 3 × h = 264<br>=> h = <span class=\"frac\"><span class=\"num\">264 × 7</span><span class=\"den\">132</span></span> = 14 मीटर। Ans."
  }
];

const longPYQs = [
  {
    "question": "व्यास 7 m वाला 20 m गहरा एक कुआँ खोदा जाता है और खोदने से निकली हुई मिट्टी को समान रूप से फैलाकर 22 m × 14 m वाला एक चबूतरा बनाया गया है। इस चबूतरे की ऊँचाई ज्ञात कीजिए। [Years: 24 (A) I]",
    "answer": "<b>Step 1:</b> कुएँ से निकली मिट्टी का आयतन।<br>कुआँ बेलनाकार है। r = <span class=\"frac\"><span class=\"num\">7</span><span class=\"den\">2</span></span> = 3.5 m, h = 20 m.<br>आयतन = πr²h = <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × (3.5)² × 20 = 770 मी³।<br><br><b>Step 2:</b> चबूतरे की ऊँचाई ज्ञात करना।<br>माना चबूतरे की ऊँचाई H है।<br>L × B × H = 770<br>22 × 14 × H = 770<br>=> H = <span class=\"frac\"><span class=\"num\">770</span><span class=\"den\">308</span></span> = 2.5 मीटर। Ans."
  },
  {
    "question": "व्यास 3 m का एक कुआँ 14 m की गहराई तक खोदा जाता है। इससे निकली हुई मिट्टी को कुएँ के चारों ओर 4 m चौड़ी एक वृत्ताकार वलय बनाते हुए बाँध बनाया जाता है। इस बाँध की ऊँचाई ज्ञात कीजिए। [Years: 16 (C), 19 (A) I, 23 (A) II]",
    "answer": "<img src=\"images/math_ch13_pyq_q2_embankment_1775188421199.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> कुएँ की मिट्टी का आयतन।<br>r = 1.5 m, h = 14 m.<br>आयतन = π × (1.5)² × 14 = 31.5π मी³।<br><br><b>Step 2:</b> बाँध (वलय) की विमाएँ।<br>आंतरिक त्रिज्या r = 1.5 m, चौड़ाई = 4 m.<br>बाहरी त्रिज्या R = 1.5 + 4 = 5.5 m.<br><br><b>Step 3:</b> बाँध की ऊँचाई (H)।<br>वलय का आयतन = π(R² - r²)H = π(5.5² - 1.5²)H = 28πH.<br>प्रश्नानुसार: 28πH = 31.5π => H = <span class=\"frac\"><span class=\"num\">31.5</span><span class=\"den\">28</span></span> = 1.125 मीटर। Ans."
  },
  {
    "question": "6 m चौड़ी और 1.5 m गहरी एक नहर में पानी 10 km/h की चाल से बह रहा है। 30 मिनट में यह नहर कितने क्षेत्रफल की सिंचाई कर पाएगी, जबकि सिंचाई के लिए 8 cm गहरे पानी की आवश्यकता होती है? [Years: 19 (A) I]",
    "answer": "<b>Step 1:</b> नहर के पानी का आयतन।<br>नहर की विमाएँ: b = 6 m, h = 1.5 m.<br>30 मिनट में पानी की लंबाई (l) = <span class=\"frac\"><span class=\"num\">10000</span><span class=\"den\">2</span></span> = 5000 m.<br>आयतन = 5000 × 6 × 1.5 = 45000 मी³।<br><br><b>Step 2:</b> सिंचाई क्षेत्र का क्षेत्रफल (A)।<br>खेत में पानी की गहराई = 8 cm = 0.08 m.<br>A × 0.08 = 45000 => A = <span class=\"frac\"><span class=\"num\">45000</span><span class=\"den\">0.08</span></span> = 5,62,500 मी² (या 56.25 हेक्टेयर)। Ans."
  },
  {
    "question": "एक किसान अपने खेत में बनी 10 m व्यास वाली और 2 m गहरी एक बेलनाकार टंकी को 20 cm व्यास वाले एक पाइप द्वारा नहर से जोड़ता है। यदि पाइप में पानी 3 km/h की चाल से बह रहा है, तो कितने समय बाद टंकी पूरी भर जाएगी? [Years: 17 (C), 18 (C)]",
    "answer": "<img src=\"images/math_ch13_pyq_q4_pipe_tank_1775188438848.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> टंकी का आयतन।<br>R = 5 m, H = 2 m.<br>आयतन = π × 5² × 2 = 50π मी³।<br><br><b>Step 2:</b> पाइप से प्रति घंटा बहने वाला पानी।<br>त्रिज्या r = 10 cm = 0.1 m, चाल = 3000 m/h.<br>आयतन = π × (0.1)² × 3000 = 30π मी³/घंटा।<br><br><b>Step 3:</b> समय की गणना।<br>समय = <span class=\"frac\"><span class=\"num\">50π</span><span class=\"den\">30π</span></span> = <span class=\"frac\"><span class=\"num\">5</span><span class=\"den\">3</span></span> घंटा = <span class=\"frac\"><span class=\"num\">5</span><span class=\"den\">3</span></span> × 60 = 100 मिनट। Ans."
  }
];

// Target the empty sections
const shortStr = JSON.stringify(shortPYQs, null, 10).replace(/^\[/, '').replace(/\]$/, '');
const longStr = JSON.stringify(longPYQs, null, 10).replace(/^\[/, '').replace(/\]$/, '');

// Surgical replacement in math-data.js
let updated = content.replace(/"short": \[],(?=\s+"long": \[])/, `"short": [\n${shortStr}\n          ],`);
updated = updated.replace(/"long": \[]/, `"long": [\n${longStr}\n          ]`);

fs.writeFileSync(path, updated, 'utf8');
console.log("Chapter 13 PYQs successfully integrated into math-data.js.");
