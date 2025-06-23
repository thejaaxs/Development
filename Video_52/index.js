console.log("Hey Thejas , you are good !");
console.log("Hey Thejas , you are nice !");
console.log("Hey Thejas , your Tshirt is awesome !");
console.log("Hey Thejas , you are learning Javascript !");

console.log();
// Using Function

function nice(name) {
    console.log("Hey " + name + ", you are good !");
    console.log("Hey " + name + ", you are nice !");
    console.log("Hey " + name + ", your Tshirt is awesome !");
    console.log("Hey " + name + ", you are learning Javascript !");
}
nice("Harry");

console.log();

function sum(a, b) {
    console.log("Result : " + (a + b));
}
sum(10, 100);
// Using return 

function sum1(a, b) {
    return a + b;
}
let result = sum1(10, 20);
console.log("Result : " + result);

// Optional Parameter 

function sum2(a, b, c = 10) {
    return a + b + c;
}
console.log("Result : " + sum2(10, 20));

console.log();
// Arrow Function 

const funct1 = (x) => {
    console.log("Arrow Function : " + x);
}
funct1(1);
funct1(2);
funct1(3);

