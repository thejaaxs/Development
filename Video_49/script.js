console.log("Hey Thejas , Welcome to Javascript")
var a = 10;
var b = 20;
var c = "Thejas";
console.log(a + b + 10);
console.log(typeof a, typeof b, typeof c);

// Cannot change const once assigned 
// In modern code the , let is used instead of var 

let a1 = 10;
// a1 = a1 + 10;

let b1 = 20;
let c1 = 30;

console.log(a1 + b1);
{
    let a1 = 100;
    console.log(a1 + b1);
}
console.log(a1);

// Var is globally scoped in Javascript

let x = "Thejas";
let y = "21";
let z = "9.99";
let p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o = {
    "name": "Thejas",
    "job code": 5600,
    "Role": "Software Programmer",
    "is_Handsome" : true
}

console.log(o);

o.salary = "500 Crores";
console.log(o);
o.salary = "1000 Crores";
console.log(o);

// Practice Questions

let name = "Thejas";
console.log("My Name is " + name);

let str = "Thejas";
let num = 55;
let bool = true;
let undef;
let nul = null;

console.log(str, num, bool, undef, nul);

// To Convert one data type into other 

let numToStr = String(100);
let strToNum = Number("123");

console.log(numToStr, typeof numToStr);
console.log(strToNum, typeof strToNum);

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul);

let A = 10, B = 5;
console.log("Addition : " + (A + B));
console.log("Difference : " + (A - B));
console.log("Multiplication :", A * B);
console.log("Division :", A / B);
console.log("Remainder :", A % B)

let userName = "Thejas";
let age = 21;
console.log(`Hello ${userName}, he is ${age} years old !`);

// we can access the objects using the dot (.) and bracket ([]) notation

let person = {
    name: "Akash",
    age: 21,
    city: "Kundapura"
}

console.log(person.name);
console.log(person["city"]);

console.log(person);

person.email = "Akash@gmail.com";
person.age = 22;
delete person.city;

console.log(person);

// Nested Object Access 
let student = {
    name: "Thejas",
    marks: {
        math: 100,
        science: 99
    }
};
console.log(student);
console.log(student.marks);
console.log(student.marks.science);

// Check the existence using object.hasOwnProperty("attribute_name")

console.log("email" in person);
console.log(person.hasOwnProperty("email"));

// Looping over Object Properties 

for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

// Count object keys 

function countKeys(obj) {
    return Object.keys(obj).length;
}

console.log(countKeys(person));