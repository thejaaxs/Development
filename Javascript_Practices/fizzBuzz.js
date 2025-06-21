// Fizz Buzz 

let num = 20;
for (let i = 1; i <= num; i++) {
    if (i % 3 == 0)
        console.log("Fizz !");
    else if (i % 5 == 0)
        console.log("Buzz !");
    else if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz !");
    else
        console.log(i);
}

console.log();
// Using Function 

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz !");
        else if (i % 3 == 0)
            console.log("Fizz !");
        else if (i % 5 == 0)
            console.log("Buzz !");
        else
            console.log(i);
    }
}
fizzBuzz(20);