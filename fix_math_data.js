const fs = require('fs');
const path = 'c:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js';
let content = fs.readFileSync(path, 'utf8');

// Replace SVGs with JPGs and increase width to 500 for better visibility of pencil sketches
content = content.replace(/math_ch13_q1_vessel\.svg/g, 'math_ch13_q1_vessel.jpg');
content = content.replace(/math_ch13_q2_toy\.svg/g, 'math_ch13_q2_toy.jpg');
content = content.replace(/math_ch13_q3_melting_spheres\.svg/g, 'math_ch13_q3_melting_spheres.jpg');
content = content.replace(/math_ch13_q4_well_platform\.svg/g, 'math_ch13_q4_well_platform.jpg');
content = content.replace(/math_ch13_q5_juice_glass\.svg/g, 'math_ch13_q5_juice_glass.jpg');

// Fix width to 500
content = content.replace(/width="400"/g, 'width="500"');

// Fix Persian text in Chapter 13 Q4
content = content.replace(/نिकाली गई मिट्टी/g, 'निकाली गई मिट्टी');

fs.writeFileSync(path, content, 'utf8');
console.log('Update successful');
