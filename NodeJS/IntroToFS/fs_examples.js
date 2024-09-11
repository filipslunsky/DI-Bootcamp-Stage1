const { error } = require('console')
const fs = require('fs')


// //reading from a file
// console.log('before');

// // try {
// //     const data = fs.readFileSync('info', 'utf-8'); // sync version of reading
// //     console.log(data);
// // } catch (e) {
// //     console.log('Error=>', e)
// // }

// fs.readFile('info', 'utf-8', (err, data) => {
//     if(err) return console.log(err);
//     console.log(data);
// }) // async reading

// console.log('after');

// // writing to a file
// let data = '123 456 789';

// let users = [{
//     name: 'John',
//     email: 'jjj@gmail.com'
// },{
//     name: 'Jane',
//     email: 'bbb@gmail.com' 
// }]

// let usersJson = JSON.stringify(users);

// fs.writeFile('info.txt', usersJson, 'utf-8', (err) => {
//     if (err) return console.log(err);
// })

// // update a file
// fs.appendFile('info', '123456', 'utf-8', (err) => {})

// copying
fs.copyFile('info', 'newInfo', err => {});

fs.copyFile('info.txt', 'info.json', err => {});

