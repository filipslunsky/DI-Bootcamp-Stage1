// Exercise 1 : Bird class
    // Analyze the code below, what will be the output?

class Bird {
    constructor() {
        console.log("I'm a bird. 🦢"); // any new instance of Bird will log this string
    }
}
    
class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸"); // any new instance of Flamingo logs this string
        super(); // any new instance of Flamingo calls the Bird log as well after logging its own string
    }
}
      
const pet = new Flamingo();
// expected output:
// I'm pink. 🌸
// I'm a bird. 🦢
