const fs = require("fs");
console.log(fs);

// In order to make it in the Commonjs 

// const fs = require("fs/promises");

// Usage of fs and file path 

console.log("Starting !");
fs.writeFileSync("Thejas.txt", "Thejas is on the way to master the Web Development");
console.log("Ending !");

// The use of only writeFile

// console.log("Starting !");
// fs.writeFile("Thejas2.txt", "Thejas is a good boy 2", () => {
//     console.log(`Done !`); // This is printed at the end !
// })
// console.log("Ending !");

// In order to read a file !

console.log("Starting !");
fs.writeFile("Thejas2.txt", "Thejas is a good boy", () => {
    console.log("Done !");
    fs.readFile("Thejas2.txt", (error, data) => {
        // console.log(error, data); // this only prints up the number 
        console.log(error, data.toString()); // this will print the exact details
    })
})
console.log("Ending !");

// Dont make call back hell !

// Append a file ( means to add the information at the end )

fs.appendFile("Thejas.txt", "& Also Full Stack Development", (e, d) => {
    console.log(d);
})