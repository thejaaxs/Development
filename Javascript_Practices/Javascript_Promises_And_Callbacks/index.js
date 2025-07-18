// // Take it as : Hey, go fetch water. When you're done, call me (I'll be in the kitchen)."

// function fetchData(callback) {
//     setTimeout(() => {
//         console.log("Data Fetched !");
//         callback();
//     }, 2000);
// }
// function processData() {
//     console.log("Processing Data !");
// }
// fetchData(processData);

// // Promises 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success !");
//         // Or reject("Error !");
//     }, 2000);
// });
// promise.then((result) => {
//     console.log(result)
// }).catch((error) => console.log(error));

// // // Imagine ordering food at a restaurant:

// // Callback: You give your number. They call you when food is ready.

// // Promise: You’re told: “Your order will arrive in 30 mins” (promise). If it does → .then() → enjoy food. If it fails → .catch() → complain.

// // Use of Callbacks 

// function task1(cb) {
//     console.log("Task 1");
//     cb();
// }
// function task2() {
//     console.log("Task 2");
// }
// task1(task2);

// // Example of call Hell 

// setTimeout(() => {
//     console.log("Task1");
//     setTimeout(() => {
//         console.log("Task2");
//         setTimeout(() => {
//             console.log("Task3");
//         }, 1000)
//     }, 1000)
// }, 1000)

// Refractor Callback Hell With Promises

// function delay(msg, ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, ms);
//     });
// }

// delay("Step-1", 1000)
//     .then(() => delay("Step-2", 1000))
//     .then(() => delay("Step-3", 1000));

// Simulate the API With promises

// function fetchUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = { name: "Thejas", id: 1 };
//             resolve(user);
//         }, 2500);
//     });
// }

// fetchUser()
//     .then((user) => console.log(user))
//     .then((error) => console.log(error));

// Promise with Error Handling

function getData(fail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject("Something Went Wrong !");
            }
            else {
                resolve("Data Received !");
            }
        }, 1000);
    });
}
getData()
    .then((data) => console.log(data))
    .then((error) => console.log(error));
