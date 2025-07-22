let a = prompt("Enter First Number : ");

let b = prompt("Enter Second Number : ");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Not Allowed !");
}
let sum = parseInt(a) + parseInt(b);

try {
    console.log("The Sum : " + sum);
}
catch (error) {
    console.log("Error Presented !");
}
finally {
    console.log("Finally EveryThing are closed !");
}

// Finally Even runs even if the return function exists !!
