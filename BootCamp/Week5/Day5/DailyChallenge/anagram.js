const isAnagram = (str1, str2) => {
    trimmedStr1 = str1.toLowerCase().replace(' ', '');
    trimmedStr2 = str2.toLowerCase().replace(' ', '');
    let sortedStr1 = trimmedStr1.split('').sort().join('');
    let sortedStr2 = trimmedStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
};

console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('School master', 'The classroom'));
console.log(isAnagram('The Morse Code', 'Here come dots'));
console.log(isAnagram('Anagrams are hard', 'This is not an anagram'));

