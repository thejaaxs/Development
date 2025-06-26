const obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+"
}
let a = parseFloat(prompt("Enter the First Number : "));
let c = prompt("Enter the Operator : ");
let b = parseFloat(prompt("Enter the Second Number : "));


let isFaulty = Math.random() < 0.1;
let actualOperator = isFaulty ? obj[c] : c;
if (isFaulty) {
    console.log("Faulty Operation Will Carry !");
}
let result;
switch (actualOperator) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': result = (b !== 0 ? a / b : "Divide By Zero Error !"); break;
    case "**": result = a ** b; break;
    default: result = "Invalid Operator";
}
alert("Result : " + result);