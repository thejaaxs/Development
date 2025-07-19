// Promise-based Delay Function

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Waited ${ms}ms`);
        }, ms);
    });
}

wait(1000)
    .then((msg) => {
        console.log(msg);
        return wait(2000);
    })
    .then((msg) => {
        console.log(msg);
    });