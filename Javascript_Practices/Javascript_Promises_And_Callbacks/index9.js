// Conditional Rejection with Promises
// Create a function getTemperature(location) that returns a Promise. If location is "Bangalore", resolve with temp; else reject with error.

function getTemperature(location) {
    return new Promise((resolve, reject) => {
        if (location === "Bangalore")
            resolve("Temperature is 28°C");
        else
            reject("Location not supported !")
    });
}

getTemperature("Bangalore")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

getTemperature("Mumbai")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));