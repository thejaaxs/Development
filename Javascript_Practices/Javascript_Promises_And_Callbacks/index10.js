// 10. Promise Wrapper for Callback-based API
// You have a function getData(callback) that uses a callback. Wrap it in a Promise so you can use it like getDataPromise().then(...).

function getData(callback) {
    setTimeout(() => {
        callback(null, "Here is your Data !");
    }, 1000);
}

function getDataPromise() {
    return new Promise((resolve, reject) => {
        getData((error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

getDataPromise()
    .then((data) => console.log("Promise Version : ", data))
    .catch((error) => console.log(error));