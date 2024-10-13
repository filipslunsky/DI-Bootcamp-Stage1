"use strict";
// static method - addition from day2
class UserS {
    static getCount() {
        return UserS.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++UserS.count;
    }
}
UserS.count = 0;
;
const user1 = new UserS('John');
const user2 = new UserS('Mary');
const user3 = new UserS('Anne');
console.log(user1.name, user1.id, UserS);
console.log(user2.name, user2.id, UserS);
console.log(user3.name, user3.id, UserS);
console.log(UserS.getCount());
