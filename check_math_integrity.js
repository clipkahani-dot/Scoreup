const fs = require('fs');

// Read the file as a string to handle potential encoding issues
const content = fs.readFileSync('C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js', 'utf8');

// Use a regex to extract the data array
const dataMatch = content.match(/const mathData = (\[[\s\S]*\]);/);
if (!dataMatch) {
    console.error("Could not find mathData array!");
    process.exit(1);
}

let mathData;
try {
    // Note: eval is risky but we are in a controlled environment and the file starts with const mathData = [...]
    // and we already ran node -c to verify it's valid JS.
    mathData = eval(dataMatch[1]);
} catch (e) {
    console.error("Error parsing mathData:", e);
    process.exit(1);
}

console.log(`Successfully parsed ${mathData.length} chapters.`);

mathData.forEach((ch, index) => {
    const missing = [];
    if (!ch.subject) missing.push("subject");
    if (!ch.class_level) missing.push("class_level");
    if (!ch.chapter) missing.push("chapter");
    if (!ch.importantQuestions) missing.push("importantQuestions");
    else {
        if (!ch.importantQuestions.short) missing.push("importantQuestions.short");
        if (!ch.importantQuestions.long) missing.push("importantQuestions.long");
    }
    if (!ch.pyq) missing.push("pyq");
    else {
        if (!ch.pyq.short) missing.push("pyq.short");
        if (!ch.pyq.long) missing.push("pyq.long");
    }

    if (missing.length > 0) {
        console.log(`Chapter ${index + 1} (${ch.chapter || 'Unknown'}): Missing keys: ${missing.join(', ')}`);
    }
});
