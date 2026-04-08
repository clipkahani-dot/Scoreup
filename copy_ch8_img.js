const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\pc\\.gemini\\antigravity\\brain\\4d1c4fdb-27ef-4df7-aa41-55bf9741b1d8\\math_ch8_pyq_q1_right_triangle_1775139398245.png';
const dest = 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\images\\math_ch8_pyq_q1_right_triangle.png';

try {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied image to:', dest);
} catch (err) {
    console.error('Error copying image:', err.message);
    process.exit(1);
}
