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

// Using Functions and only calling function Name 

function sumOfDigit(n1) {
    let sum2 = 0, original = n1;
    while (n1 != 0) {
        sum2 += (n1 % 10);
        n1 = Math.floor(n1 / 10);
    }
    console.log(`Sum of ${original} : ${sum2}`);
}
sumOfDigit(123456);