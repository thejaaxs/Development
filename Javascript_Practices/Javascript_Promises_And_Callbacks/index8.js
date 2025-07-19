// Promise.all to Fetch Multiple APIs

function fetchApi(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} Data`);
        }, delay);
    });
}

Promise.all([
    fetchApi("API1", 1000),
    fetchApi("API2", 2000),
    fetchApi("API3", 3000)
]).then((results) => {
    console.log("All Results Done : ", results);
})