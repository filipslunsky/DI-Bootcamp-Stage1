// Exercise 1
type MappedType<T> = T extends number ? number : T extends string ? number : never;

const mapType = <T extends number | string> (inputValue: T): MappedType<T> => {
    if (typeof inputValue === 'number') {
        return (inputValue ** 2) as MappedType<T>;
    } else if (typeof inputValue === 'string') {
        return inputValue.length as MappedType<T>;
    } else {
        throw new Error('invalid input type')
    }
};

console.log(mapType('string for testing'));
console.log(mapType(6));

// Exercise 2
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
};

const user = {
    name: 'Jim',
    age: 42,
    gender: 'm',
    loggedIn: false
};

const userName: string = getProperty(user, 'name');
const userAge: number = getProperty(user, 'age');
const userGender: string = getProperty(user, 'gender');
const userIsLoggedIn: boolean = getProperty(user, 'loggedIn');

console.log(userName);
console.log(userAge);
console.log(userGender);
console.log(userIsLoggedIn);

// Exercise 3
interface HasNumericProperty {
    length: number,
    width: number,
    height: number
}

const multiplyProperty = (obj: HasNumericProperty, key: keyof HasNumericProperty, factor: number): number => {
    return obj[key] * factor;
};

const numericPropertyObj: HasNumericProperty = {
    length: 12,
    width: 13,
    height: 45
};

console.log(multiplyProperty(numericPropertyObj, 'height', 3));
console.log(multiplyProperty(numericPropertyObj, 'length', 2));
console.log(multiplyProperty(numericPropertyObj, 'width', 5));

