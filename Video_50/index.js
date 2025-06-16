console.log("Hello I am a Conditional Tutorial In Javascript");

let age = 50;

if (age < 18) {
    console.log("You cannot Drive !");
}
else console.log("You can Drive !")

let age1 = 3;
let grace = 2;
age1 += grace;
console.log("Addition :", age1 + grace);
console.log("Subtraction :", age1 - grace);
console.log("Multiplication :", age1 * grace);
console.log("Division :", age1 / grace);
console.log("Remainder :", age1 % grace);
console.log("Power :", age1 ** grace);
if ((age1 + grace) > 18) console.log("You can Drive !");
else console.log("You cannot Drive !");

// In javascript to compare use === ( triple equals to ) 
// using double equals to ( double equals to ) can lead to the comparing of values 

// If else if Ladder 

let age2 = 0;

if (age2 == 18) {
    console.log("You Can Drive");
}
else if (age2 == 0) {
    console.log("Are You Kidding !")
}
else {
    console.log("You Can Drive !")
}

let a = 10;
let b = 20;

let c = a > b ? (b - a) : (a + b);

console.log(c);