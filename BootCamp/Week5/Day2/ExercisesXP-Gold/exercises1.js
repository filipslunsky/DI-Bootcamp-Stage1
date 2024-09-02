// // Exercise 1 : Analyzing the map method
// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return num * 2;
//     return ;
//   });
// // expected output: [2, 4, 6]

// // Exercise 2: Analyzing the reduce method
// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );
// // expected output: [ 1, 2, 0, 1, 2, 3 ]

// // Exercise 3 : Analyze this code
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })
// // What is the value of i ? - optional index 0 - 5

// Exercise 4 : Nested arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const newArray2 = array.flat(2);
console.log(newArray2);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newArray3 = [greeting[0].join(" "), greeting[1].join(" "), greeting[2].join(" ")];
console.log(newArray3);
const newArray4 = greeting.flat(1).join(" ");
console.log(newArray4);

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(25);
console.log(untrapped);


