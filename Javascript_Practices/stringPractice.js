// Strings Practice 

let name1 = "Thejas";
let name2 = 'Rahul';
let name3 = `Hello ${name2} !`;

console.log(name1);
console.log(name2);
console.log(name3);

// String Length 

let str = "Hello";
console.log(str.length);

// String Characters 

let str1 = "Code";
console.log(str1[0]);
console.log(str1.charAt(2));

// Templates 
let real_name = "Thejas";
console.log(`Hello ${real_name.toUpperCase()}`);

// Reverse a String 

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(`Reverse : ` + reverseString("Hello"));