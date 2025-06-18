// Sum of First N Natural Numbers

let num = 10;
let sum = 0;
for (let i = 0; i <= num; i++) {
    sum += i;
}
console.log("Sum of First N Natural Numbers : " + sum);

// Using Function 

function sumOfNNumbers(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Sum of First N Natural Numbers is : "+sumOfNNumbers(5));