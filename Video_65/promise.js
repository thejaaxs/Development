console.log("Promise");

const prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ! , The Random Number was not Supporting You !");
    }
    else {
        setTimeout(() => {
            console.log("I'm Done !");
            resolve("Harry");
        }, 3000);
    }
});
// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No ! , The Random Number was not Supporting You 2 !")
    }
    else {
        setTimeout(() => {
            console.log("I'm Done 2 !");
            resolve("Harry 2");
        }, 1000);
    }
})

// let prom3 = Promise.all([prom1, prom2]);
// prom3.then((a) => {
//     console.log(a);
// }).catch(err => console.log(err));

// Promise.allSettled() , means will get the status ( rejected ) & Value of all the promises

let prom3 = Promise.allSettled([prom1, prom2]);
prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});

// Race is nothing but which executes first !