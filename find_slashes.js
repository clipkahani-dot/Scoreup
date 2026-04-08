const fs = require('fs');

const content = fs.readFileSync('C:\\Users\\pc\\OneDrive\\Desktop\\SCOR UP\\math-data.js', 'utf8');

// Regex to find sequences like " (something) / (something) " or " number / number "
// but excluding the ones inside <span class="frac"> tags (though those usually don't have slashes between num and den)
const slashRegex = /[^"<>=\w][\w\s()√°.-]+\/[\w\s()√°.-]+[^"<>=\w]/g;

const matches = content.match(slashRegex);
if (matches) {
    console.log(`Found ${matches.length} potential slash fractions:`);
    matches.forEach(m => console.log(`- ${m.trim()}`));
} else {
    console.log("No potential slash fractions found.");
}
