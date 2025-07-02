// Array Functions & Practices

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let empty = [];
let nums1 = [1, 2, 3, 4, 5];
let mixes = ["Fruits", 'A', 1, null];
console.log(mixes);
console.log(nums1);
console.log(empty);

let colors = ["Red", "Yellow", "Green"];
console.log(colors[0]);
colors[0] = "Black";
console.log(colors);
console.log(colors.length);

/* 
    Method	What it does
push()	Add to end
pop()	Remove from end
unshift()	Add to beginning
shift()	Remove from beginning 
*/

let num = [1, 2];
num.push(3);
console.log(num);
num.pop();
console.log(num);
num.unshift(0);
console.log(num);
num.shift();
console.log(num);

// Iterating in array 

let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr1 = ["x", "y", "z"];
for (let ch of arr1) {
    console.log(ch);
}

/*
    map()	Create new array by transforming items
filter()	Create new array with selected items
reduce()	Reduce array to single value
forEach()	Run a function on each item
find()	    Return first match
*/

let nums = [1, 2, 3, 4, 5];
let doubles = nums.map(n => n * 2);
console.log(doubles);
let evens = nums.filter(n => (n % 2) === 0);
console.log(evens);
let sum = nums.reduce((a, b) => a + b);
console.log(sum);
nums.forEach(n => console.log(n));