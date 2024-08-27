// OBJECTS
// essentially the same thing as a dictionary in python
// keys don't have to be in quotation marks
// they can also contain functions/methods

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

console.log(person["age"])
console.log(person.age)

delete person.age

console.log(person)