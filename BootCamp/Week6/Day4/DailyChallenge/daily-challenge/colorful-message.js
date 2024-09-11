import chalk from 'chalk';

const displayColorfulMessage = message => {
    console.log(chalk.green(message));
}

// displayColorfulMessage('Hello, how are you?');

export { displayColorfulMessage };