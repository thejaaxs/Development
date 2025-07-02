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

// Print all elements

function printAllElements(arr) {
    arr.forEach(n => console.log(n));
}
printAllElements(["Name", "Is", "Alice"]);

// Find the largest number

function largestElement(arr) {
    let max = arr[0];
    arr.forEach(n => {
        if (n > max) max = n;
    });
    return max;
}
console.log(largestElement([4, 10, 2, 99, 23]));

// Count how many times each number appears

function countElementAppears(arr) {
    let freq = {};
    arr.forEach(n => {
        freq[n] = (freq[n] || 0) + 1;
    });
    return freq;
}
console.log(countElementAppears([1, 2, 2, 3, 1, 1]));

// Reverse an array

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 2 Method 

function reverseArray2(arr) {
    for (let i = 0; i <= arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
console.log(reverseArray2([1, 2, 3, 4, 5]));