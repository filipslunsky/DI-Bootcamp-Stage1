

const multi = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        throw new Error('division by zero is not allowed');
    }
    return a / b;
};

const plus = (a, b) => a + b;

const minus = (a, b) => a - b;

// console.log(multi(3, 4));
// console.log(divide(3, 4));
// console.log(plus(3, 4));
// console.log(minus(3, 4));

// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus
// }

export {
    multi,
    divide,
    minus
}

export default plus;