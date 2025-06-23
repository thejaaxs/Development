// Get the square of all numbers in an array

// Using Loops 

const num = [1, 2, 3, 4, 5];
const squares = [];

for (let i = 0; i <= num.length - 1; i++) {
    squares.push(num[i] * [num[i]]);
}

console.log(squares);

// Using other method 

let num1 = [1, 2, 3, 4, 5];
const squares1 = [];
for (let num of num1) {
    squares1.push(num * num);
}
console.log(squares1);

// Map Function 

let num2 = [6, 7, 8, 9, 10, 5];
let squares2 = num2.map(n => n * n);
console.log(squares2);