// JavaScript Variables

let name = "Alice";
const PI = 3.14159;
var age = 20;

// JavaScript Data Types

let name1 = "Thejas";
let ag1 = 21;
let isReady = true;
let a = undefined;
let b = null;
let symbol = Symbol();

// Complex Data Types 

let person = {
    name: "Thejas",
    age: 21
};
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function greet() {
    console.log("Hey !");
}

// JavaScript Objects

let person1 = {
    name: "Thejas",
    age: 21,
    greet: function () {
        console.log("Hey", this.name);
    }
};
// Accessing Properties:

console.log(person1);
console.log(person1.name);
console.log(person1["age"]); // Always use the " " to access using the Bracket !
// person.greet();

//  JavaScript Conditionals: if, else if, else

let score = 85;
if (score >= 90) {
    console.log("Grade : A");
}
else if (score >= 75) {
    console.log("Grade : B");
}
else if (score >= 50) {
    console.log("Grade : C");
}
else {
    console.log("Fail ! (But it's okay to be failed !)");
}