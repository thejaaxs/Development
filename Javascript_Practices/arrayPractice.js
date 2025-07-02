// Array Functions & Practices

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

let empty = [];
let nums = [1, 2, 3, 4, 5];
let mixes = ["Fruits", 'A', 1, null];
console.log(mixes);
console.log(nums);
console.log(empty);

let colors = ["Red","Yellow","Green"];
console.log(colors[0]);
colors[0]="Black";
console.log(colors);
console.log(colors.length);

/* Method	What it does
push()	Add to end
pop()	Remove from end
unshift()	Add to beginning
shift()	Remove from beginning */

let num = [1,2];
num.push(3);
console.log(num);
num.pop();
console.log(num);
num.unshift(0);
console.log(num);
num.shift();
console.log(num);