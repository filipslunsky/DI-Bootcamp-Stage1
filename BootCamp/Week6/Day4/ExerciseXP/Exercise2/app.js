import { persons } from "./data.js";

const getAvgAge = peopleArr => {
    let totalAge = 0;
    for (let i = 0; i < peopleArr.length; i++) {
        totalAge += peopleArr[i].age;
    }
    return totalAge / peopleArr.length;
}

console.log(getAvgAge(persons));
