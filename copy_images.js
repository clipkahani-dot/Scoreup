const fs = require('fs');
const path = require('path');

const images = [
    {
        src: 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\4d1c4fdb-27ef-4df7-aa41-55bf9741b1d8\\math_ch6_pythagoras_v3_1775134075211.png',
        dest: 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\images\\math_ch6_pythagoras_v3.png'
    },
    {
        src: 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\4d1c4fdb-27ef-4df7-aa41-55bf9741b1d8\\math_ch6_thales_v3_1775134100041.png',
        dest: 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\images\\math_ch6_thales_v3.png'
    },
    {
        src: 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\4d1c4fdb-27ef-4df7-aa41-55bf9741b1d8\\math_ch6_pythagoras_converse_v3_1775134124810.png',
        dest: 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\images\\math_ch6_pythagoras_converse_v3.png'
    }
];

images.forEach(img => {
    try {
        fs.copyFileSync(img.src, img.dest);
        console.log(`Copied: ${img.src} -> ${img.dest}`);
    } catch (err) {
        console.error(`Error copying ${img.src}:`, err.message);
    }
});
