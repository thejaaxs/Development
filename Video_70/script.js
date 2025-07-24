async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50);
        }, 2000);
    })
}

// This is the error hence use the IIFE 

(async function main() {
    let a = await sleep();
    console.log(a);
})()

// The Use of Destructuring 

let [x, y, ...rest] = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(x, y, rest);

// To Access the object we can try 

let obj = {
    a: 10,
    b: 20,
    c: 30
};
const { a, b } = obj;
console.log({ a, b })

// Spread Operator is used everywhere to just split the array
function sum(a, b, c) {
    return a + b + c;
}
let arr = [10, 20, 30];
console.log(sum(...arr));

// Hoisting means we can use the var at the bottom also , only var variable is sent upwards not the value

