let myObject = {
    'firstName': 'Filip',
    'lastName': 'Slunsky',
    'age': 38,
    'isCitizen': true
}

let newProp = 'favColor';
let favColor = 'blue';

myObject[newProp] = favColor;

console.log(myObject)

for (let key in myObject) {
    console.log(key)
    console.log(myObject[key])
}