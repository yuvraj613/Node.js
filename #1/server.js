//nodejs is a JS runtime and built on V8 chrome engine
//node has global var while vanilla js has window var
//eg..
// console.log("Hello");
// console.log(global);

//node uses CommonJS not ES6 module
const os = require("os");
// const math = require("./math"); // this is how you can import a user-built mdoule..later we
// will destructure it
const { add, sub, mult } = require("./math");

// console.log(math.add(3, 4)); // this is how you can use math's module function add
console.log(add(7, 5));
// console.log(os.version());
// console.log(os.type());
// console.log(__filename);
