//lets make a simple file which will contain few functions and we will import these funcs
// in our server.js file

const add = (a, b) => a + b;

const mult = (a, b) => a * b;

const sub = (a, b) => a - b;

module.exports = { add, mult, sub };
