import fs from "fs/promises"

// Reading a file !

let a = await fs.readFile("Thejas.txt");
console.log(a.toString());

// To Write in the same file

let b = fs.writeFile("Thejas.txt", "Thejas is on the way to master the Web Development & Also Full Stack Development !\n\n\n\n\n\nThejas will be the next big thing in the world !");

// Append File

const c = fs.appendFile("Thejas2.txt", "\n\nHey I'll make the history remember me !");
