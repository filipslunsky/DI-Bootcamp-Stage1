import fs from 'fs';

const readAndWrite = async (fromFile, toFile) => {};

fs.readFile('source.txt', 'utf-8', (err, data) => {
    if(err) return console.log(err);
    console.log(data);
    fs.writeFile('destination.txt', data, 'utf-8', (err) => {
        if (err) return console.log(err);
        })
})
