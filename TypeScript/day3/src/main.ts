// static method - addition from day2
class UserS {
    static count: number = 0;
    static getCount(): number {
        return UserS.count;
    }

    public name: string;
    public id: number;
    constructor(name: string) {
        this.name = name;
        this.id = ++UserS.count;
    }
};

const user1 = new UserS('John');
const user2 = new UserS('Mary');
const user3 = new UserS('Anne');

console.log(user1.name, user1.id, UserS);
console.log(user2.name, user2.id, UserS);
console.log(user3.name, user3.id, UserS);
console.log(UserS.getCount());


