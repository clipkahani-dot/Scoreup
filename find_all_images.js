const fs = require('fs');
const content = fs.readFileSync('math-data.js', 'utf8');

const mathData = eval(content + '; mathData;');

mathData.forEach((chapter, index) => {
    const findImages = (obj, path) => {
        if (typeof obj === 'string' && obj.includes('<img')) {
            console.log(`Chapter ${index + 1}: ${chapter.chapter} | Path: ${path} | Image: ${obj.match(/<img[^>]+src="([^">]+)"/)[1]}`);
        } else if (Array.isArray(obj)) {
            obj.forEach((item, i) => findImages(item, `${path}[${i}]`));
        } else if (typeof obj === 'object' && obj !== null) {
            Object.keys(obj).forEach(key => findImages(obj[key], `${path}.${key}`));
        }
    };
    findImages(chapter, `mathData[${index}]`);
});
