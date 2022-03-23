//lev1_1: import / export
const { arrayCars, arrayNumbers } = require("./data.js")

const { arrayNum, arrayCar } = require("./functions.js")

const stringSort = arrayCar(arrayCars)
console.log(stringSort);

const numberSort = arrayNum(arrayNumbers)
console.log(numberSort);



// console.log(arrayNum());
// console.log(arrayCar());