const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

const ch8Long = [
  {
    "question": "सिद्ध करें कि : (cosec θ - cot θ)² = <span class=\"frac\"><span class=\"num\">1 - cos θ</span><span class=\"den\">1 + cos θ</span></span> [Years: 12 (A), 22 (A) II]",
    "answer": "<b>L.H.S =</b> (cosec θ - cot θ)²<br>= (<span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">sin θ</span></span> - <span class=\"frac\"><span class=\"num\">cos θ</span><span class=\"den\">sin θ</span></span>)²<br>= (<span class=\"frac\"><span class=\"num\">1 - cos θ</span><span class=\"den\">sin θ</span></span>)²<br>= <span class=\"frac\"><span class=\"num\">(1 - cos θ)²</span><span class=\"den\">sin² θ</span></span><br>(चूँकि sin² θ = 1 - cos² θ):<br>= <span class=\"frac\"><span class=\"num\">(1 - cos θ)²</span><span class=\"den\">1 - cos² θ</span></span><br>= <span class=\"frac\"><span class=\"num\">(1 - cos θ)(1 - cos θ)</span><span class=\"den\">(1 - cos θ)(1 + cos θ)</span></span><br>= <span class=\"frac\"><span class=\"num\">1 - cos θ</span><span class=\"den\">1 + cos θ</span></span> = R.H.S (इति सिद्धम)"
  }
];

const ch13Short = [
  {
    "question": "उस गोले का पृष्ठ क्षेत्रफल निकालें जिसका व्यास 14 सेमी है। [Years: 15 (A) II, 17 (A) I, 19 (A) I, 22 (C)]",
    "answer": "<b>Step 1:</b> गोले की त्रिज्या ज्ञात करना।<br>गोले का व्यास (d) = 14 सेमी।<br>त्रिज्या (r) = <span class=\"frac\"><span class=\"num\">d</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">14</span><span class=\"den\">2</span></span> = 7 सेमी।<br><br><b>Step 2:</b> पृष्ठीय क्षेत्रफल।<br>गोले का पृष्ठीय क्षेत्रफल = 4πr²<br>= 4 × <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × (7)² = 4 × 22 × 7 = 616 सेमी²। Ans."
  },
  {
    "question": "किसी घन का विकर्ण 9√3 सेमी है। घन का कुल पृष्ठ क्षेत्रफल ज्ञात करें। [Years: 23 (A) I, 25 (A) I]",
    "answer": "<b>Step 1:</b> घन की भुजा ज्ञात करना।<br>माना घन की भुजा = a सेमी।<br>घन का विकर्ण = √3 × a<br>प्रश्नानुसार: √3 × a = 9√3 => a = 9 सेमी।<br><br><b>Step 2:</b> पृष्ठीय क्षेत्रफल।<br>कुल पृष्ठीय क्षेत्रफल = 6a² = 6 × (9)² = 6 × 81 = 486 सेमी²। Ans."
  },
  {
    "question": "दो घनों, जिनमें से प्रत्येक का आयतन 64 सेमी³ है, के संलग्न फलकों को मिलाकर एक ठोस घनाभ बनाया जाता है। इससे प्राप्त घनाभ का पृष्ठीय क्षेत्रफल ज्ञात कीजिए। [Years: 13 (A), 17 (A) II]",
    "answer": "<b>Step 1:</b> घन की भुजा ज्ञात करना।<br>माना घन की भुजा = a सेमी।<br>a³ = 64 => a = 4 सेमी।<br><br><b>Step 2:</b> घनाभ की विमाएँ।<br>दो घनों को जोड़ने पर: लम्बाई (l) = 8 सेमी, चौड़ाई (b) = 4 सेमी, ऊँचाई (h) = 4 सेमी।<br><br><b>Step 3:</b> पृष्ठीय क्षेत्रफल।<br>कुल क्षेत्रफल = 2(lb + bh + hl)<br>= 2(8×4 + 4×4 + 4×8) = 2(32 + 16 + 32) = 160 सेमी²। Ans."
  },
  {
    "question": "एक लम्बवृत्तीय शंकु का आयतन 100π सेमी³ है और ऊँचाई 12 सेमी है, तो तिर्यक ऊँचाई (Slant height) निकालें। [Years: 15 (A) II]",
    "answer": "<b>Step 1:</b> त्रिज्या (r) ज्ञात करना।<br>V = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span>πr²h => 100π = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">3</span></span> × π × r² × 12<br>=> 4r² = 100 => r = 5 सेमी।<br><br><b>Step 2:</b> तिर्यक ऊँचाई (l)।<br>l = √(r² + h²) = √(5² + 12²) = √169 = 13 सेमी। Ans."
  },
  {
    "question": "धातु के तीन घनों के किनारे की लम्बाइयाँ क्रमशः 3 सेमी, 4 सेमी और 5 सेमी हैं। तीनों को पिघलाकर एक नया घन बनाया गया है, तो नये घन के किनारे की लम्बाई क्या होगी? [Years: 16 (A) I]",
    "answer": "<b>Step 1:</b> कुल आयतन।<br>कुल आयतन = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 सेमी³।<br><br><b>Step 2:</b> नये घन की भुजा (A)।<br>माना नये घन का किनारा A है।<br>A³ = 216 => A = 6 सेमी। Ans."
  },
  {
    "question": "एक शंकु के छिन्नक (Frustum) की तिर्यक ऊँचाई 4 cm है तथा इसके वृत्तीय सिरों के परिमाप 18 cm और 6 cm हैं। इस छिन्नक का वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए। [Years: 18 (C), 25 (A) I]",
    "answer": "<b>Step 1:</b> त्रिज्याओं का मान।<br>2πr₁ = 18 => πr₁ = 9<br>2πr₂ = 6 => πr₂ = 3<br>तिर्यक ऊँचाई l = 4 cm.<br><br><b>Step 2:</b> वक्र पृष्ठीय क्षेत्रफल।<br>S = π(r₁ + r₂)l = (πr₁ + πr₂) × l<br>= (9 + 3) × 4 = 12 × 4 = 48 cm²। Ans."
  },
  {
    "question": "किसी बेलन के वक्रपृष्ठ का क्षेत्रफल 264 मी² तथा आयतन 396 मी³ है। बेलन की त्रिज्या तथा ऊँचाई ज्ञात करें। [Years: 24 (A) I]",
    "answer": "<b>Step 1:</b> मान ज्ञात करना।<br>2πrh = 264 (i) और πr²h = 396 (ii)<br>समीकरण (ii) ÷ (i): <span class=\"frac\"><span class=\"num\">r</span><span class=\"den\">2</span></span> = <span class=\"frac\"><span class=\"num\">396</span><span class=\"den\">264</span></span> = 1.5 => r = 3 मीटर।<br><br><b>Step 2:</b> ऊँचाई (h)।<br>2 × <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × 3 × h = 264 => h = 14 मीटर। Ans."
  }
];

const ch13Long = [
  {
    "question": "व्यास 7 m वाला 20 m गहरा एक कुआँ खोदा जाता है और खोदने से निकली हुई मिट्टी को समान रूप से फैलाकर 22 m × 14 m वाला एक चबूतरा (Platform) बनाया गया है। इस चबूतरे की ऊँचाई ज्ञात कीजिए। [Years: 24 (A) I]",
    "answer": "<b>Step 1:</b> मिट्टी का आयतन (बेलन)।<br>r = <span class=\"frac\"><span class=\"num\">7</span><span class=\"den\">2</span></span> m, h = 20 m.<br>आयतन = <span class=\"frac\"><span class=\"num\">22</span><span class=\"den\">7</span></span> × (<span class=\"frac\"><span class=\"num\">7</span><span class=\"den\">2</span></span>)² × 20 = 770 m³.<br><br><b>Step 2:</b> चबूतरे की ऊँचाई (H)।<br>लम्बाई = 22 m, चौड़ाई = 14 m.<br>22 × 14 × H = 770 => H = <span class=\"frac\"><span class=\"num\">770</span><span class=\"den\">308</span></span> = 2.5 m. Ans."
  },
  {
    "question": "व्यास 3 m का एक कुआँ 14 m की गहराई तक खोदा जाता है। इससे निकली हुई मिट्टी को कुएँ के चारों ओर 4 m चौड़ी एक वृत्ताकार वलय (Embankment) बनाते हुए, समान रूप से फैलाकर एक प्रकार का बाँध बनाया जाता है। इस बाँध की ऊँचाई ज्ञात कीजिए। [Years: 16 (C), 19 (A) I, 23 (A) II]",
    "answer": "<img src=\"images/math_ch13_pyq_q2_embankment_1775188421199.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> कुएँ की मिट्टी का आयतन।<br>r = 1.5 m, h = 14 m. आयतन = π × (1.5)² × 14 = 31.5π m³.<br><br><b>Step 2:</b> बाँध (वलय) की विमाएँ।<br>आंतरिक त्रिज्या r = 1.5 m, बाहरी त्रिज्या R = 1.5 + 4 = 5.5 m.<br>वलय का आयतन = π(R² - r²)H = π(5.5² - 1.5²)H = 28πH.<br><br><b>Step 3:</b> ऊँचाई (H) ज्ञात करना।<br>28πH = 31.5π => H = <span class=\"frac\"><span class=\"num\">31.5</span><span class=\"den\">28</span></span> = 1.125 m. Ans."
  },
  {
    "question": "6 m चौड़ी और 1.5 m गहरी एक नहर में पानी 10 km/h की चाल से बह रहा है। 30 मिनट में यह नहर कितने क्षेत्रफल की सिंचाई कर पाएगी, जबकि सिंचाई के लिए 8 cm गहरे पानी की आवश्यकता होती है? [Years: 19 (A) I]",
    "answer": "<b>Step 1:</b> पानी का आयतन।<br>नहर की विमाएँ: b = 6 m, h = 1.5 m. 30 मिनट में लंबाई (l) = 5000 m.<br>कुल आयतन = 5000 × 6 × 1.5 = 45000 m³.<br><br><b>Step 2:</b> सिंचित क्षेत्रफल (A)।<br>खेत में पानी की गहराई = 0.08 m.<br>A × 0.08 = 45000 => A = 562500 m² (या 56.25 हेक्टेयर)। Ans."
  },
  {
    "question": "एक किसान अपने खेत में बनी 10 m व्यास वाली और 2 m गहरी एक बेलनाकार टंकी को आंतरिक व्यास 20 cm वाले एक पाइप द्वारा एक नहर से जोड़ता है। यदि पाइप में पानी 3 km/h की चाल से बह रहा है, तो कितने समय बाद टंकी पूरी भर जाएगी? [Years: 17 (C), 18 (C)]",
    "answer": "<img src=\"images/math_ch13_pyq_q4_pipe_tank_1775188438848.png\" class=\"diagram-float educational-diagram\"><b>Step 1:</b> टंकी का आयतन।<br>R = 5 m, H = 2 m. आयतन = π × 5² × 2 = 50π m³.<br><br><b>Step 2:</b> पाइप का आयतन प्रति घंटा।<br>r = 0.1 m, चाल = 3000 m/h. आयतन = π × (0.1)² × 3000 = 30π m³.<br><br><b>Step 3:</b> समय ज्ञात करना।<br>समय = <span class=\"frac\"><span class=\"num\">50π</span><span class=\"den\">30π</span></span> = <span class=\"frac\"><span class=\"num\">5</span><span class=\"den\">3</span></span> घंटा = 100 मिनट। Ans."
  }
];

function replaceSection(subjectName, sectionName, newData) {
  const subjectIndex = content.indexOf(`"chapter": "${subjectName}"`);
  if (subjectIndex === -1) {
    console.error(`Chapter ${subjectName} not found.`);
    return;
  }
  
  const pyqIndex = content.indexOf('"pyq": {', subjectIndex);
  const sectionIndex = content.indexOf(`"${sectionName}": [`, pyqIndex);
  const closingBracketIndex = content.indexOf(']', sectionIndex);
  
  const formattedData = JSON.stringify(newData, null, 10).replace(/\]$/, '          ]');
  
  content = content.substring(0, sectionIndex + `"${sectionName}": [`.length) + 
            '\n' + formattedData + 
            content.substring(closingBracketIndex);
}

replaceSection("त्रिकोणमिति का परिचय", "long", ch8Long);
replaceSection("पृष्ठीय क्षेत्रफल और आयतन", "short", ch13Short);
replaceSection("पृष्ठीय क्षेत्रफल और आयतन", "long", ch13Long);

fs.writeFileSync(path, content, 'utf8');
console.log("CHAPTER 8 AND CHAPTER 13 UPDATED SUCCESSFULLY USNG SURGICAL INDEXING.");
