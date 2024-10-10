// Exercise 1
class Employee {
    constructor(
        private name: string,
        private salary: number,
        public position: string,
        protected department: string,
    ) {};

    getEmployeeInfo(): string {
        return `name: ${this.name}, position: ${this.position}`;
    }
};

const employee1 = new Employee('Jack', 10000, 'accountant', 'finance');
console.log(employee1.getEmployeeInfo());

// Exercise 2
class Product {
    constructor(
        readonly id: number,
        public name: string,
        public price: number,
    ) {};

    getProductInfo(): string {
        return `name: ${this.name}, price: ${this.price}`;
    }
};

const product1 = new Product(1, 'iPhone', 3800);
console.log(product1.getProductInfo());
// product1.id = 2 -> throws error: Cannot assign to 'id' because it is a read-only property.

// Exercise 3
class Animal {
    constructor(
        public name: string,
    ) {};

    makeSound(): string {
        return `${this.name} makes whatever sound ${this.name} wants to make`
    };
};

class Dog extends Animal {
    constructor(public name: string) {
        super(name)
    };

    makeSound(): string {
        return `${this.name} barks`
    };
};

const animal1 = new Animal('Misha');
const dog1 = new Dog('Lessie');

console.log(animal1.makeSound());
console.log(dog1.makeSound());

// Exercise 4
class Calculator {
    static add(x: number, y: number): number {
        return x + y;
    };

    static subtract(x: number, y: number): number {
        return x - y;
    };
};

console.log(Calculator.add(7, 3));
console.log(Calculator.subtract(7, 3));

// Exercise 5
interface User {
    readonly id: number;
    name: string;
    email: string;
};

interface PremiumUser extends User {
    membershipLevel?: string;
};

const printUserDetails = (user: PremiumUser): string => {
    let message = `id: ${user.id}, name: ${user.name}, email: ${user.email}`;
    if (user.membershipLevel) message += `, membership: ${user.membershipLevel}`;
    return message;
};

const user1: PremiumUser = {id: 123, name: 'John', email: 'jjj@gmail.com'};
const user2: PremiumUser = {id: 123, name: 'John', email: 'jjj@gmail.com', membershipLevel: 'VIP'};

console.log(printUserDetails(user1));
console.log(printUserDetails(user2));
