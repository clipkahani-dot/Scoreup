const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/pc/OneDrive/Desktop/SCOR UP';
const subjectMap = {
    'math10.html': 'Mathematics',
    'science10.html': 'Science',
    'english10.html': 'English',
    'hindi10.html': 'Hindi',
    'sanskrit10.html': 'Sanskrit',
    'sst10.html': 'Social Science',
    'urdu10.html': 'Urdu',
    'nonhindi10.html': 'Non-Hindi',
    'physics12.html': 'Physics',
    'chemistry12.html': 'Chemistry',
    'biology12.html': 'Biology',
    'math12.html': 'Mathematics',
    'english12.html': 'English',
    'hindi12.html': 'Hindi',
    'economics12.html': 'Economics',
    'accountancy12.html': 'Accountancy'
};

let modifiedCount = 0;

for (const [file, subject] of Object.entries(subjectMap)) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipped (not found): ${file}`);
        continue;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let replaced = false;
    
    // Pass 1: Fix any remaining href="#" links
    content = content.replace(/<a href="#" class="chapter-card">([\s\S]*?)<div class="chapter-title">([^<]+)<\/div>/g, (match, p1, title) => {
        replaced = true;
        const encodedTitle = encodeURIComponent(title.trim());
        const encodedSubject = encodeURIComponent(subject);
        return `<a href="chapter.html?subject=${encodedSubject}&chapter=${encodedTitle}" class="chapter-card">${p1}<div class="chapter-title">${title.trim()}</div>`;
    });
    
    // Pass 2: Normalize &title= to &chapter= for consistency
    const normalized = content.replace(/chapter\.html\?subject=([^&]+)&title=/g, (match, sub) => {
        replaced = true;
        return `chapter.html?subject=${sub}&chapter=`;
    });
    
    if (replaced) {
        fs.writeFileSync(filePath, normalized, 'utf8');
        console.log(`Successfully updated links in: ${file}`);
        modifiedCount++;
    } else {
        console.log(`No matching "#" links found in: ${file} (already updated?)`);
    }
}

console.log(`\nTotal files updated: ${modifiedCount}`);
