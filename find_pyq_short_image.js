const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');

const mathData = eval(content + '; mathData;');

mathData.forEach((chapter, index) => {
    if (chapter.pyq && chapter.pyq.short) {
        chapter.pyq.short.forEach((q, i) => {
            if ((q.question && q.question.includes('<img')) || (q.answer && q.answer.includes('<img'))) {
                console.log(`FOUND! Chapter Index: ${index+1} | Name: ${chapter.chapter} | PYQ Short Q${i+1}`);
                if (q.question && q.question.includes('<img')) console.log(`In Question: ${q.question.match(/src="([^"]+)"/)[1]}`);
                if (q.answer && q.answer.includes('<img')) console.log(`In Answer: ${q.answer.match(/src="([^"]+)"/)[1]}`);
            }
        });
    }
});
