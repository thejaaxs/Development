// Print Even Numbers up to N

let i, even = "", n = 10;
for (i = 0; i <= n; i++) {
    if (i % 2 == 0) even += i + " "
}
console.log(even);

// Using Functions 

function printEvenTillN(n) {
    for (let i = 2; i <= n; i++) {
        if (i % 2 == 0) console.log(i);
    }
}
printEvenTillN(10);
console.log();

// Using Functions 2 

function printEven(n) {
    for (let i = 2; i <= n; i += 2)
        console.log(i);
}
printEven(10);