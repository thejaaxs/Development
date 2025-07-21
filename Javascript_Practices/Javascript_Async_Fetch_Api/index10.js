// Simulate Delayed API + Loading Message
// Objective: Simulate an API call with setTimeout and use await to wait.
// Task: Show “Loading...” before fetch and then “Done” after completion.

async function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithLoading() {
    console.log("Loading...!");
    simulateDelay(2000);
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
        const data = await res.json();
        console.log("Done")
        console.log(data);
    } catch (error) {
        console.log("Error Fetching : ", error);
    }
}

fetchWithLoading();
