import { promises as fs } from 'fs';

let directoryPath = './';

fs.readdir(directoryPath)
    .then(files => {
        console.log('Files in directory:');
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(error => {
        console.error('Error reading directory:', error);
    });