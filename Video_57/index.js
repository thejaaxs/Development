// Factorial Of a Number 

let number = prompt("Enter Any Number : ");
let fact = 1;
if (isNaN(number)) {
    alert(`Invalid input. Please enter a number.`);
}
else if (number <= 0)
    alert("Not Possible. Factorial is not defined for negative numbers!");
else {
    for (let i = 1; i <= number; i++)
        fact *= i;
    alert(`Factorial Of ${number} is : ${fact}`);
}