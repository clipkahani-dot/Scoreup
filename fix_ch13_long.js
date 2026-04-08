const fs = require('fs');
const path = 'math-data.js';
let content = fs.readFileSync(path, 'utf8');

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

const longStr = JSON.stringify(longPYQs, null, 10).replace(/^\[/, '').replace(/\]$/, '');

// Target the empty "long": [] section specifically in Chapter 13
// We know it's near the "short" block we just added
let updated = content.replace(/"long": \[]/g, (match, offset) => {
    // Only replace the first instance of "long": [] found after Chapter 13 header
    const ch13Header = content.indexOf('"chapter": "पृष्ठीय क्षेत्रफल और आयतन"');
    if (offset > ch13Header) {
        return `"long": [\n${longStr}\n          ]`;
    }
    return match;
});

fs.writeFileSync(path, updated, 'utf8');
console.log("Chapter 13 Long PYQs integrated.");
