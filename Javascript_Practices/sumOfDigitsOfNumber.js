// Sum of Digits of a Number

let n = 12345, sum = 0;
let temp = n;
while (n != 0) {
    let lastDigit = n % 10;
    sum += lastDigit;
    // n /= 10;
    // You can't use the above since Javascript makes it as a Float / Double 
    // Make Sure you use Math.floor
    n = Math.floor(n / 10);
}
console.log(`The Sum of the ${temp} is ${sum}`);

// Using Functions

function sumOfDigits(n) {
    let sum1 = 0, temp1 = sum1;
    while (n != 0) {
        sum1 += n % 10;
        n = Math.floor(n / 10);
    }
    return sum1;
}
console.log("Sum : " + sumOfDigits(123456789));