//  Function Declaration (Traditional)

function greet(name) {
    return `Hello : ${name} !`;
}
console.log(greet("Thejas"));
console.log(greet("Rahul"));

// Function Expression

const add = function (a, b) {
    return a + b;
};
console.log(add(10, 20));

// Arrow Functions 

const greet1 = (name1) => {
    return `Hello : ${name1} !`;
}
console.log(greet1("Tanushree"));

// Only one line 

const square = (n) => {
    return n * n;
}
console.log("Square : " + square(10));

const square1 = (a) => a * a;
console.log("Square 1 :" + square1(20));

// Add Two Numbers

const add_1 = (a, b) => a + b;

console.log("Addition : " + add_1(10, 200));

// Check if a number is even

const isEven = (n) => n % 2 === 0;

console.log("Result : " + isEven(4));
console.log("Result : " + isEven(15));

// Find the largest of two numbers

const largestOfTwo = (a, b) => (a > b ? a : b);

console.log(largestOfTwo(10, 20));
console.log(largestOfTwo(20, 10));

// Count Vowels In a String 

const countVowel = (str) => {
    let count = 0;
    const vowel = "aeiouAEIOU";
    for (let ch of str) {
        if (vowel.includes(ch)) {
            count++;
        }
    }
    return count;
}
console.log("Vowels : " + countVowel("aeiouAEIOU"));