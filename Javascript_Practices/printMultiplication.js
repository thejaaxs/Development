// Print Multiplication Table

let num = 12;
for (let i = 1; i <= 10; i++) {
    console.log(num + " X " + i + " = " + (num * i));
}
console.log();

// Using the functions 

function printMultiplication(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
printMultiplication(10);