// Closure
const addTo = x => y => x + y;
const addToTen = addTo(10);
addToTen(3);

// expected output -> 13
console.log(addToTen(3))