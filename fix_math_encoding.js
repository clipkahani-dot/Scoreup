const fs = require('fs');
const path = require('path');

const filePath = 'math-data.js';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix triple-escaped quotes (\\\"frac\\\")
content = content.replace(/\\\\\\"frac\\\\\\"/g, '\\"frac\\"');
content = content.replace(/\\\\\\"num\\\\\\"/g, '\\"num\\"');
content = content.replace(/\\\\\\"den\\\\\\"/g, '\\"den\\"');
content = content.replace(/\\\\\\"math-table\\\\\\"/g, '\\"math-table\\"');
content = content.replace(/\\\\\\"table-total-row\\\\\\"/g, '\\"table-total-row\\"');

// 2. Fix the tail structure
// We want to find where Chapter 14 (Statistics) starts and replace from there to the end.
const ch14StartMark = '"chapter": "सांख्यिकी"';
const startIndex = content.lastIndexOf('{', content.indexOf(ch14StartMark));

if (startIndex === -1) {
    console.error("Could not find start of Chapter 14");
    process.exit(1);
}

const head = content.substring(0, startIndex);

const tailRestored = ` {
    "subject": "Mathematics",
    "class_level": "10",
    "chapter": "सांख्यिकी",
    "importantQuestions": {
      "short": [
        {
          "question": "सांख्यिकी में 'माध्य' (Mean) को परिभाषित कीजिए और इसका सामान्य सूत्र लिखिए।",
          "answer": "दिए गए प्रेक्षणों (observations) के कुल योग को उनकी कुल संख्या से भाग देने पर जो मान प्राप्त होता है, उसे माध्य कहते हैं।<br>यदि प्रेक्षण x₁, x₂, ..., xₙ हों, तो माध्य (x̄) = (Σx) / n"
        },
        {
          "question": "वर्गीकृत आँकड़ों के लिए 'बहुलक' (Mode) का क्या अर्थ है?",
          "answer": "वर्गीकृत आँकड़ों में वह मान या वर्ग जिसकी बारंबारता (frequency) सबसे अधिक होती है, बहुलक कहलाता है। यह वह मान है जो आँकड़ों में सबसे अधिक बार दोहराया जाता है।"
        },
        {
          "question": "माध्य, माध्यिका और बहुलक के बीच आनुभविक संबंध (Empirical Relationship) क्या है?",
          "answer": "इन तीनों के बीच का संबंध इस प्रकार है:<br>3 × माध्यिका = बहुलक + 2 × माध्य<br>(3 Median = Mode + 2 Mean)"
        },
        {
          "question": "प्रथम पाँच पूर्ण संख्याओं का माध्य ज्ञात कीजिए।",
          "answer": "प्रथम पाँच पूर्ण संख्याएँ: 0, 1, 2, 3, 4<br>माध्य = (0 + 1 + 2 + 3 + 4) / 5<br>= <span class=\\"frac\\"><span class=\\"num\\">10</span><span class=\\"den\\">5</span></span> = 2<br>अतः माध्य 2 है।"
        },
        {
          "question": "यदि किसी बारंबारता बंटन का माध्य 25 और बहुलक 13 है, तो इसकी माध्यिका ज्ञात कीजिए।",
          "answer": "सूत्र: 3 × माध्यिका = बहुलक + 2 × माध्य<br>3 × माध्यिका = 13 + 2(25)<br>3 × माध्यिका = 13 + 50 = 63<br>माध्यिका = <span class=\\"frac\\"><span class=\\"num\\">63</span><span class=\\"den\\">3</span></span> = 21"
        }
      ],
      "long": [
        {
          "question": "निम्नलिखित बंटन का माध्य (Mean) ज्ञात करें: [Years: 25 (A) I] <br><table class='math-table'><tbody><tr><td>वर्ग अंतराल</td><td>11-13</td><td>13-15</td><td>15-17</td><td>17-19</td><td>19-21</td><td>21-23</td><td>23-25</td></tr><tr><td>f</td><td>7</td><td>6</td><td>9</td><td>13</td><td>20</td><td>5</td><td>4</td></tr></tbody></table>",
          "answer": "प्रत्येक वर्ग का वर्ग चिह्न (x) = (निम्न सीमा + ऊपरी सीमा) / 2<br><br><table class='math-table'><thead><tr><th>वर्ग अंतराल</th><th>वर्ग चिह्न (x)</th><th>बारंबारता (f)</th><th>f × x</th></tr></thead><tbody><tr><td>11-13</td><td>12</td><td>7</td><td>84</td></tr><tr><td>13-15</td><td>14</td><td>6</td><td>84</td></tr><tr><td>15-17</td><td>16</td><td>9</td><td>144</td></tr><tr><td>17-19</td><td>18</td><td>13</td><td>234</td></tr><tr><td>19-21</td><td>20</td><td>20</td><td>400</td></tr><tr><td>21-23</td><td>22</td><td>5</td><td>110</td></tr><tr><td>23-25</td><td>24</td><td>4</td><td>96</td></tr><tr class='table-total-row'><td>कुल (Total)</td><td>-</td><td>Σf=64</td><td>Σfx=1156</td></tr></tbody></table><br>माध्य = Σfx / Σf = <span class=\\"frac\\"><span class=\\"num\\">1156</span><span class=\\"den\\">64</span></span> = 18.0625<br><br>अतः बंटन का माध्य 18.06 है।"
        },
        {
          "question": "निम्नलिखित बंटन का बहुलक (Mode) ज्ञात करें: [Years: 25 (A) II] <br><table class='math-table'><tbody><tr><td>वर्ग अंतराल</td><td>0-10</td><td>10-20</td><td>20-30</td><td>30-40</td><td>40-50</td><td>50-60</td><td>60-70</td><td>70-80</td></tr><tr><td>f</td><td>7</td><td>17</td><td>13</td><td>12</td><td>20</td><td>11</td><td>15</td><td>8</td></tr></tbody></table>",
          "answer": "1. यहाँ सबसे अधिक बारंबारता 20 है, जो वर्ग 40-50 के अंतर्गत आती है। अतः बहुलक वर्ग = 40-50<br><br>2. आवश्यक मान:<br>l (निम्न सीमा) = 40, f₁ = 20, f₀ = 12, f₂ = 11, h = 10<br><br>3. सूत्र: बहुलक = l + [ <span class=\\"frac\\"><span class=\\"num\\">f₁ - f₀</span><span class=\\"den\\\">2f₁ - f₀ - f₂</span></span> ] × h<br>= 40 + [ <span class=\\"frac\\"><span class=\\"num\\">20 - 12</span><span class=\\"den\\\">2(20) - 12 - 11</span></span> ] × 10<br>= 40 + [ <span class=\\"frac\\"><span class=\\"num\\">8</span><span class=\\"den\\\">40 - 23</span></span> ] × 10<br>= 40 + <span class=\\"frac\\"><span class=\\"num\\">80</span><span class=\\"den\\">17</span></span> = 40 + 4.70 = 44.70<br><br>अतः बंटन का बहुलक 44.70 है।"
        }
      ]
    },
    "pyq": {
      "short": [],
      "long": []
    }
  },
  {
    "subject": "Mathematics",
    "class_level": "10",
    "chapter": "प्रायिकता",
    "importantQuestions": {
      "short": [
        {
          "question": "प्रायिकता (Probability) का सैद्धांतिक सूत्र लिखिए।",
          "answer": "किसी घटना E की प्रायिकता P(E) = <span class=\\"frac\\"><span class=\\"num\\">E के अनुकूल परिणामों की संख्या</span><span class=\\"den\\">सभी संभव परिणामों की कुल संख्या</span></span>"
        },
        {
          "question": "एक निश्चित घटना और एक असंभव घटना की प्रायिकता क्या होती है?",
          "answer": "निश्चित घटना की प्रायिकता = 1, असंभव घटना की प्रायिकता = 0"
        }
      ],
      "long": [
        {
          "question": "दो पासों (Dice) को एक साथ फेंका जाता है। समान संख्या आने की प्रायिकता ज्ञात कीजिए।",
          "answer": "कुल संभव परिणाम = 36<br>अनुकूल परिणाम (समान संख्या): (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) -> कुल 6<br>प्रायिकता = <span class=\\"frac\\"><span class=\\"num\\">6</span><span class=\\"den\\">36</span></span> = <span class=\\"frac\\"><span class=\\"num\\">1</span><span class=\\"den\\">6</span></span>"
        }
      ]
    },
    "pyq": {
      "short": [],
      "long": []
    }
  }
];`;

fs.writeFileSync(filePath, head + tailRestored, 'utf8');
console.log("Successfully cleaned up math-data.js tail and fixed encoding.");
