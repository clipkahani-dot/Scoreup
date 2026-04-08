const fs = require('fs');
const path = require('path');

const targetFile = 'math-data.js';
const content = fs.readFileSync(targetFile, 'utf8');

// Strip prefix and suffix to get a JSON-like string
// "const mathData = [ ... ];" -> "[ ... ]"
let jsonStr = content.trim();
if (jsonStr.startsWith('const mathData =')) {
    jsonStr = jsonStr.substring('const mathData ='.length).trim();
}
if (jsonStr.endsWith(';')) {
    jsonStr = jsonStr.substring(0, jsonStr.length - 1).trim();
}

let data;
try {
    data = JSON.parse(jsonStr);
} catch (e) {
    console.error("Initial JSON parse failed. Attempting to match brackets manually.");
    // If it's a JS file with unquoted keys or comments, we might need a more complex extraction or just rely on the manual approach.
    // However, math-data.js looks like strict JSON inside the constant.
    process.exit(1);
}

// Chapter 14 (Index 13)
const ch14Data = {
    "subject": "Mathematics",
    "class_level": "10",
    "chapter": "सांख्यिकी",
    "importantQuestions": {
        "short": [
            { "question": "सांख्यिकी में 'माध्य' (Mean) को परिभाषित कीजिए और इसका सामान्य सूत्र लिखिए।", "answer": "दिए गए प्रेक्षणों (observations) के कुल योग को उनकी कुल संख्या से भाग देने पर जो मान प्राप्त होता है, उसे माध्य कहते हैं।<br>यदि प्रेक्षण x₁, x₂, ..., xₙ हों, तो माध्य (x̄) = (Σx) / n" },
            { "question": "वर्गीकृत आँकड़ों के लिए 'बहुलक' (Mode) का क्या अर्थ है?", "answer": "वर्गीकृत आँकड़ों में वह मान या वर्ग जिसकी बारंबारता (frequency) सबसे अधिक होती है, बहुलक कहलाता है। यह वह मान है जो आँकड़ों में सबसे अधिक बार दोहराया जाता है।" },
            { "question": "माध्य, माध्यिका और बहुलक के बीच आनुभविक संबंध (Empirical Relationship) क्या है?", "answer": "इन तीनों के बीच का संबंध इस प्रकार है:<br>3 × माध्यिका = बहुलक + 2 × माध्य<br>(3 Median = Mode + 2 Mean)" },
            { "question": "प्रथम पाँच पूर्ण संख्याओं का माध्य ज्ञात कीजिए।", "answer": "प्रथम पाँच पूर्ण संख्याएँ: 0, 1, 2, 3, 4<br>माध्य = (0 + 1 + 2 + 3 + 4) / 5<br>= <span class=\"frac\"><span class=\"num\">10</span><span class=\"den\">5</span></span> = 2<br>अतः माध्य 2 है।" },
            { "question": "यदि किसी बारंबारता बंटन का माध्य 25 और बहुलक 13 है, तो इसकी माध्यिका ज्ञात कीजिए।", "answer": "सूत्र: 3 × माध्यिका = बहुलक + 2 × माध्य<br>3 × माध्यिका = 13 + 2(25)<br>3 × माध्यिका = 13 + 50 = 63<br>माध्यिका = <span class=\"frac\"><span class=\"num\">63</span><span class=\"den\">3</span></span> = 21" }
        ],
        "long": [
            {
                "question": "निम्नलिखित सारणी का माध्य (Mean) 'प्रत्यक्ष विधि' द्वारा ज्ञात कीजिए: (वर्ग अंतराल: 0-10, 10-20, 20-30, 30-40, 40-50 | f: 7, 10, 15, 8, 10)",
                "answer": "Step 1: वर्ग चिह्न (x) और f×x की गणना के लिए सारणी बनाना।<br><br><table class='math-table'><thead><tr><th>वर्ग अंतराल</th><th>f</th><th>x</th><th>f × x</th></tr></thead><tbody><tr><td>0-10</td><td>7</td><td>5</td><td>35</td></tr><tr><td>10-20</td><td>10</td><td>15</td><td>150</td></tr><tr><td>20-30</td><td>15</td><td>25</td><td>375</td></tr><tr><td>30-40</td><td>8</td><td>35</td><td>280</td></tr><tr><td>40-50</td><td>10</td><td>45</td><td>450</td></tr><tr class='table-total-row'><td>कुल (Total)</td><td>Σf=50</td><td>-</td><td>Σfx=1290</td></tr></tbody></table><br>Step 2: माध्य का सूत्र लगाना।<br>माध्य (x̄) = Σfx / Σf<br>= <span class=\"frac\"><span class=\"num\">1290</span><span class=\"den\">50</span></span> = 25.8<br>Final Answer: अतः दिए गए आँकड़ों का माध्य 25.8 है।"
            }
        ],
        "pyq": { "short": [], "long": [] }
    }
};

// Chapter 15 (Index 14)
const ch15Data = {
    "subject": "Mathematics",
    "class_level": "10",
    "chapter": "प्रायिकता",
    "importantQuestions": {
        "short": [
            { "question": "प्रायिकता (Probability) का सैद्धांतिक सूत्र लिखिए।", "answer": "किसी घटना E की प्रायिकता P(E) का सूत्र है:<br>P(E) = <span class=\"frac\"><span class=\"num\">घटना E के अनुकूल परिणामों की संख्या</span><span class=\"den\">प्रयोग के सभी संभव परिणामों की कुल संख्या</span></span>" },
            { "question": "एक निश्चित (Sure) घटना और एक असंभव (Impossible) घटना की प्रायिकता क्या होती है?", "answer": "निश्चित घटना (जो अवश्य घटेगी) की प्रायिकता हमेशा 1 होती है।<br>असंभव घटना (जो कभी नहीं घट सकती) की प्रायिकता हमेशा 0 होती है।" }
        ],
        "long": [
            {
                "question": "दो पासों (Dice) को एक साथ फेंका जाता है। निम्नलिखित की प्रायिकता ज्ञात कीजिए: (i) समान संख्या आए, (ii) योग 8 हो, (iii) योग 13 हो।",
                "answer": "कुल संभव परिणाम (Total possible outcomes) = 6 × 6 = 36<br><br><table class='math-table'><thead><tr><th></th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><th>1</th><td class='table-highlight-orange'>(1,1)</td><td>(1,2)</td><td>(1,3)</td><td>(1,4)</td><td>(1,5)</td><td class='table-highlight-blue'>(1,6)</td></tr><tr><th>2</th><td>(2,1)</td><td class='table-highlight-orange'>(2,2)</td><td>(2,3)</td><td>(2,4)</td><td class='table-highlight-blue'>(2,5)</td><td>(2,6)</td></tr><tr><th>3</th><td>(3,1)</td><td>(3,2)</td><td class='table-highlight-orange'>(3,3)</td><td class='table-highlight-blue'>(3,4)</td><td>(3,5)</td><td>(3,6)</td></tr><tr><th>4</th><td>(4,1)</td><td>(4,2)</td><td class='table-highlight-blue'>(4,3)</td><td class='table-highlight-orange'>(4,4)</td><td>(4,5)</td><td>(4,6)</td></tr><tr><th>5</th><td>(5,1)</td><td class='table-highlight-blue'>(5,2)</td><td>(5,3)</td><td>(5,4)</td><td class='table-highlight-orange'>(5,5)</td><td>(5,6)</td></tr><tr><th>6</th><td class='table-highlight-blue'>(6,1)</td><td>(6,2)</td><td>(6,3)</td><td>(6,4)</td><td>(6,5)</td><td class='table-highlight-orange'>(6,6)</td></tr></tbody></table><br><br>(i) समान संख्या (Doubles): (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) - कुल 6 परिणाम।<br>प्रायिकता = <span class=\"frac\"><span class=\"num\">6</span><span class=\"den\">36</span></span> = <span class=\"frac\"><span class=\"num\">1</span><span class=\"den\">6</span></span><br>(ii) योग 8: (2,6), (3,5), (4,4), (5,3), (6,2) - कुल 5 परिणाम।<br>प्रायिकता = <span class=\"frac\"><span class=\"num\">5</span><span class=\"den\">36</span></span><br>(iii) योग 13: कोई परिणाम नहीं (अधिकतम योग 12 है)।<br>प्रायिकता = 0"
            }
        ],
        "pyq": { "short": [], "long": [] }
    }
};

data[13] = ch14Data;
data[14] = ch15Data;

const output = 'const mathData = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync(targetFile, output, 'utf8');
console.log("Successfully updated Chapters 14 and 15 in math-data.js.");
