// Error Type	Example
// ReferenceError	Using undeclared variable
// TypeError	Calling non-function, wrong types
// SyntaxError	Wrong code structure
// RangeError	Number out of allowed range
// Custom Error	Your own defined error (shown below)


try {
    let a = 10 / 0;
    console.log("Result : " + a);

    let name = undefined;
    console.log(name.toUpperCase());
}
catch (error) {
    console.log("Error is : " + error.message);
}
finally {
    console.log("This will always run !");
}
console.log();

// Catch Invalid JSON Parsing
let jsonString = '{"name": "Thejas", "age": 25}';

try {
    let data = JSON.parse(jsonString);
    console.log("Parsed Json" + data);
}
catch (error) {
    console.log("Error : " + error.message);
}
console.log();

// Catch Division by Zero (Custom Error)
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Cannot Divide By Zero !");
        }
        return a / b;
    }
    catch (error) {
        return error.message;
    }
}
console.log(divide(10, 0));

// Handle Undefined Variable (ReferenceError)
try {
    console.log(nonExistingVariable);
}
catch (error) {
    console.log("Reference Error : " + error.message)
}
console.log();

// Use finally to Always Clean Up

try {
    console.log("Opening DB Connection...");
    throw new Error("DB Connection failed !");
}
catch (error) {
    console.log("Error : " + error.message);
}
finally {
    console.log("Closing DB Collection !");
}
console.log();

//  Custom Function With Error Propagation

function authenticate(user) {
    if (!user)
        throw new Error("User Not Provided");
    return `Welcome ${user}`;
}
try {
    // const message = authenticate("Thejas");4
    const message = authenticate(null);
    console.log(message);
}
catch (error) {
    console.log("Error " + error.message);
}
console.log();

// Creating Your Own Error Class

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Validation Error";
    }
}

function validAge(age) {
    if (age < 18) {
        throw new ValidationError("Age Must Be atleast 18")
    }
    return "Valid Age";
}

try {
    console.log(validAge(13));
}
catch (error) {
    console.log(`${error.name} : ${error.message}`);
}