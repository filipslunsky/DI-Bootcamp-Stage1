const { readFile, writeFile } = require('./fileManager.js');

readFile('./Hello World.txt')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
 });

writeFile('./Bye World.txt', 'Writing to the file')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
});