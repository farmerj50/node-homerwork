const fs = require('fs');

fs.access('file.txt', (err) => {
    if (err) {
        console.log("The file does not exist.");
    } else {
        console.log("The file exists.");
    }
});
