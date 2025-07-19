// Simulate API Call Chain
// Create a sequence:
// loginUser() → getUserData() → showDashboard()
// Each returns a Promise that resolves in order.Chain them using.then().

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User Logged In");
            resolve("User 123");
        }, 1000);
    });
}

function getUserData(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched data for User 123");
            resolve({ name: "Thejas", role: "Dev" });
        }, 1000);
    });
}
function showDashboard(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Welcome ${data.name}`);
            resolve();
        }, 1000);
    });
}
loginUser()
    .then(getUserData)
    .then(showDashboard);