const processInput = (inputItem: number | string | boolean): number | string | boolean => {
    if (typeof inputItem === 'number') {
        return inputItem ** 2;
    } else if (typeof inputItem === 'string') {
        return inputItem.toUpperCase();
    } else {
        return !inputItem;
    }
};

console.log(processInput('word'));
console.log(processInput(5));
console.log(processInput(false));