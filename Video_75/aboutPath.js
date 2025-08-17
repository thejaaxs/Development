// The Path Modules

import path from "path";
console.log(path);

// The Extension Name of the Path

let myPath = "D:\\Development\\Video_75\\Thejas.txt"; // this fetches the .txt !
console.log(path.extname(myPath));

// The base name is the file name in the path module !
// The Dir Name and also join the path !

let myPath1 = "D:\\Development\\Video_75\\main.js";
console.log(path.dirname(myPath1));

// The Base name 

let myPath2 = "D:\\Development\\Video_75\\main.js";
console.log(path.basename(myPath2));

// Joining in Path
let myPath3 = "D:\\Development\\Video_75";
console.log(path.join("D:\\Development\\Video_75", "\\Thejas.js"));
