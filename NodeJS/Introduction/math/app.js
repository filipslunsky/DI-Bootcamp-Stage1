// const {multi, divide, plus, minus} = require('./math.js');
import { multi, divide, minus } from "./math.js"; // there needs to be "type": "module" in package.json for import/export to work
import addPlus from "./math.js"; // we can choose one export default and import it under a different name like this


try {
    console.log(multi(4, 5));
    console.log(minus(4, 5));
    console.log(addPlus(4, 5));
    console.log(divide(4, 5));
    console.log(divide(4, 0));
    console.log(multi(3, 5));
    console.log(minus(4, 2));
} catch (error) {
    console.log('Error:', error.message);
}
