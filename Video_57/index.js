// Factorial Of a Number 

let number = prompt("Enter Any Number : ");
let fact = 1;
if (number <= 0) {
    alert(`Not Possible , Enter Greater Number !`);
}
else {
    for (let i = 1; i <= number; i++)
        fact *= i;
}
alert(`Factorial Of ${number} is : ${fact}`);