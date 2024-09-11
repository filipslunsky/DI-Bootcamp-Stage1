import { displayColorfulMessage } from "./colorful-message.js";
import { readAndDisplayFile } from "./files/read-file.js";
import { greet } from "./greeting.js";

console.log(greet('Jimmy'));
displayColorfulMessage('Great to see you again!');
readAndDisplayFile('./files/file-data.txt');

