// Add Two Numbers

const add = (a, b) => a + b;
console.log("Addition : " + add(100, 200));

// Find the Maximum of Two Numbers

const maxOfTwo = (a, b) => (a > b ? a : b);
console.log("Max Of Two : " + maxOfTwo(100, 200));

// Check if a Number is Even

const isEven = (n) => (n % 2 === 0);
console.log(isEven(10));
console.log(isEven(15));

// Count Vowels in a String

const countVowels = (str) => {
    // spread operator 
    const vowels = "aeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
}
console.log("Number of Vowels : " + countVowels("Javascript"));

// Square All Elements in an Array

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = nums.map(n => n * n);
console.log(squares);

//  Second Method 

const squareArrays = (arr) => arr.map(n => n * n);
console.log(squareArrays([10, 20, 30, 40, 50]));

// Find Factorial of a Number

const factorial = (n) => {
    if (n === 1 || n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial : " + factorial(5));

// Reverse a String 

const reverseString = (str) => [...str].reverse().join("");
// Join with no seperator between
console.log("Reverse String : " + reverseString("Thejas"));

// Filter Even Numbers from Array

const filterEven = arr => arr.filter(n => n % 2 === 0);
console.log(filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Count words in a sentence 

let countFrequency = (str) => {
    let words = str.toLowerCase().split(" ");
    const freq = {};
    words.forEach((word) => {
        freq[word] = (freq[word] || 0) + 1;
    });
    return freq;
}
console.log(countFrequency("This is this String in Javascript & Not Java"));

// Other Method !

const countFrequency1 = (sentence) => {
    const words1 = sentence.toLowerCase().split(/\s+/);
    const freq1 = {};
    for (let i = 0; i < words1.length; i++) {
        const word = words1[i];
        freq1[word] = (freq1[word] || 0) + 1
    }
    return freq1;
}
console.log(countFrequency1("I'm learning Javascript !"));

// Composite Functions 

const compositeFunc = (f, g) => x => (f(g(x)));

const add2 = (x) => x + 2;
const square = (x) => x * x;

const comp = compositeFunc(square, add2);
console.log("Composite Functions : " + comp(3));