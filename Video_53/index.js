/*
    Create a faulty calculator using JavaScript

    This faulty calculator does the following:
    1. It takes two numbers as input from the user
    2. It performs wrong operations as follows:
        a. + ----> - 
        b. * ----> +
        c. - ----> /
        d. / ----> **

    3. It performs wrong operations 10% of the time      
*/

let random = Math.random();
console.log("Random Number : " + random);

let a = prompt("Enter the First Number : ");
let c = prompt("Enter the Operator : ");
let b = prompt("Enter the Second Number : ");

let obj =
{
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};

if (random > 0.1) {
    // Correct Calculation 
    console.log(`The Result is ${a} ${c} ${b}`)
    alert(`The Result is ${eval(`${a}${c}${b}`)}`);
}

else {
    c = obj[c];
    alert(`The Result is ${eval(`${a}${c}${b}`)}`);
}