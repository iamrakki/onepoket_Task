const fs = require('fs');

const filename = 'data.txt';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const words = data.trim().split(/\s+/);
    const wordCount = words.length;

    console.log('Total word count:', wordCount);
});
