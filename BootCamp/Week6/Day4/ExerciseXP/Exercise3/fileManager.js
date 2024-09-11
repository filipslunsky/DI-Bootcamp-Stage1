const fs = require('fs');

const readFile = (filePath, encoding = 'utf8') => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const writeFile = (filePath, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('file written successfully');
            }
        });
    });
};

module.exports = {
    readFile,
    writeFile
};
