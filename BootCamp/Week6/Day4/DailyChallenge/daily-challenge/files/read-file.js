import fs from 'fs';

const readAndDisplayFile = filePath => {
    fs.readFile(filePath, 'utf-8', (data, err) => {
    if(err) return console.log(err);
    console.log(data);
    });
}

export { readAndDisplayFile };