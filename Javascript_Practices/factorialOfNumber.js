// Factorial of a Number

let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(fact);

// Using Function 

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial " + factorial(5));

// Using Function & Printing only Function name  

function facto(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    console.log(`Result : ${result}`);
}
facto(15);