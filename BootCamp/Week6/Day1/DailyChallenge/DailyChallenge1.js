const makeAllCaps = arrayOfWords => {
    return new Promise((res, rej) => {
        if (arrayOfWords.every(word => typeof word === 'string')) {
            let upperCaseWords = arrayOfWords.map(word => word.toUpperCase());
            res(upperCaseWords);
        } else {
            rej('there are some elements in the array that are not strings');
        }
    });
};

// // test
// makeAllCaps(['daisy', 'banana', 'apple'])
//   .then(result => {
//     console.log(result); // expected output ['DAISY', 'banana', 'apple']
//   })
//   .catch(error => {
//     console.log(error);
//   });

// makeAllCaps(['banana', 42, true])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error); // expected output: "Array contains non-string elements"
//   });

const sortWords = arrayOfWords => {
    return new Promise((res, rej) => {
        if (arrayOfWords.length > 4) {
            let sortedWords = arrayOfWords.sort();
            res(sortedWords);
        } else {
            rej('there need to be more words in the array')
        }
    });
};

// // test
// sortWords(["BANANA", "KIWI", "APPLE", "ORANGE", "PEACH"])
// .then(result => console.log(result)) // expected output: sorted array
// .catch(error => console.log(error));

// sortWords(["BANANA", "KIWI", "APPLE"])
// .then(result => console.log(result))
// .catch(error => console.log(error)); // expected output: 'there need to be more words in the array'

// full test
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error));

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error));