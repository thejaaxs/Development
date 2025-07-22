// // Problem 1: Parse Invalid JSON String

// // const jsonString = `{"name":"Thejas","age":20}`;
// const jsonString = '{"name": "Thejas", "age": 25}'; // Missing closing }

// try {
//     const data = JSON.parse(jsonString);
//     console.log("Parsed JSON : " + data);
// }
// catch (error) {
//     console.log("Error : " + error.message);
// }

// console.log();

// // Problem 2: Catch Division by Zero

// function divide(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Divide By Zero Error");
//         }
//         return a / b;
//     } catch (e) {
//         return e.message;
//     }
// }
// console.log(divide(10, 0));

// // Handle Missing Function Parameter

// function greetUser(user) {
//     try {
//         if (!user) {
//             throw new Error("Name is Required !");
//         }
//         return `Welcome ${user}`;
//     }
//     catch (error) {
//         return error.message;
//     }
// }

// console.log(greetUser("Thejas"));
// console.log(greetUser(null));

// // Access Property of undefined Object

// try {
//     console.log(user.toLowerCase());
// }
// catch (error) {
//     console.log("Error : " + error.message);
// }

// // Handle Asynchronous API Call Failure

// async function fetchData() {
//     try {
//         const response = await fetch("https://invalid.url.com/data");
//         const data = await response.json();
//         console.log("Data : " + data);
//     } catch (error) {
//         console.error(error.message);
//     }
// }
// fetchData();

// // Catch Invalid Type Operation

// function safeAdd(a, b) {
//     try {
//         if (typeof (a) !== 'number' || typeof (b) !== 'number') {
//             throw new TypeError("Both Augments Must Be Numbers");
//         }
//         return a + b;
//     }
//     catch (error) {
//         return error.message;
//     }
// }
// console.log(safeAdd(10, 20));
// console.log(safeAdd(10, "Thejas"));

// // Validate Form Data with Custom Error
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "Validation Error !";
//     }
// }

// function validateForm(username, email) {
//     try {
//         if (!username) throw new ValidationError("Username Invalid !");
//         if (!email.includes('@')) throw new ValidationError("Email Invalid !");
//         return `Form is Valid`;
//     } catch (error) {
//         return `${error.name} : ${error.message}`;
//     }
// }

// // console.log(validateForm("Thejas", "abz@gmail.com"));
// console.log(validateForm("Thejas", "abcgmail.com"));

// // Safely Access Nested Object Properties

// const data = {
//     user: {
//         profile: {
//             name: "Thejas"
//         }
//     }
// };

// try {
//     const age = data.user.profile.age.value; // throws error ( since undefined )
//     console.log("Age is " + age);
// } catch (error) {
//     console.log("Error : " + error.message);
// }

// // Catch File Read Error (Simulated)

// function readFile(filename) {
//     try {
//         if (filename !== 'data.text') {
//             throw new Error("Invalid File Name");
//         }
//         return `File Content : Hello, World !`;
//     } catch (error) {
//         return error.message;
//     }
// }
// console.log(readFile('data.text'));
// console.log(readFile('Thejas'));

// // Retry Logic After Failure

function riskyOperations() {
    let success = Math.random() > 0.5;
    if (!success)
        throw new Error("Random Failure");
    return "Success !";
}

function runWithRetry() {
    try {
        return riskyOperations();
    } catch (error1) {
        console.log("First Attempt Failed : " + error1.message);
    } try {
        return riskyOperations();
    } catch (error2) {
        return ("Both Attempts Failed : " + error2.message);
    }
}
console.log(runWithRetry());
