// Named Export
import { a } from "./myModule.js";
console.log(a);

// Default export 
import obj from "./myModule.js";
console.log(obj);

// You can call with any name in case it is default !
import thejas from "./myModule.js";
console.log(thejas);

// Use of Common Js 
const a = require("./myModule2.js"); // will run once all the above ones are commented
console.log(a);

const b = require("./myModule2.js");
console.log(b, __dirname, __filename); // gets from the module.export !