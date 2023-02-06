// const {add: addNumbers, addAndMultiply} = require("./add");
import { add as addNumbers, addAndMultiply } from "./add";

function add() {
    console.log('hello add');
}

add();
console.log(addNumbers(4, 5));
console.log(addAndMultiply(4, 5, 6));