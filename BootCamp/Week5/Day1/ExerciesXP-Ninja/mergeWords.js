// 1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// 2. When the function is called without any arguments return a string where all words have been merged into a sentence.

const mergeWords = (initialWord) => {
    let words = [initialWord];
    const addWord = (word) => {
        if (word === undefined) {
            return words.join(' ');
        } else {
            words.push(word);
            return addWord;
        }
    };

    return addWord;
};


console.log(mergeWords('There')('is')('no')('spoon.')())

// 3. Below is a verbose JavaScript solution, turn this into a currying function.
function mergeWordsVerbose(string) {
    return function(nextString) {
      if (nextString === undefined) {
        return string;
      } else {
        return mergeWordsVerbose(string + ' ' + nextString);
      }
    }
   }

   console.log(mergeWordsVerbose('There')('is')('no')('spoon.')())

   const mergeWordsCurry = (string) => {
    const addWord = (nextString) => {
        if (nextString === undefined) {
            return string;
        }
        return mergeWordsCurry(string + ' ' + nextString);
    };
    
    return addWord;
};


console.log(mergeWordsCurry('There')('is')('no')('spoon.')())