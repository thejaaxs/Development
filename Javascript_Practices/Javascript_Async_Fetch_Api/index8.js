// Retry Failed Fetch 3 Times
// Objective: Write a function that tries to fetch a URL up to 3 times before failing.
// Task: Simulate intermittent failure and retry logic using async/await.


async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const data = await res.json();
            console.log("Data : ", data);
            return;
        }
        catch (error) {
            console.warn(`Attempt ${i + 1} Failed... Retrying !`);
        }
    }
    console.log("Failed After 3 Retreies !");
}
fetchWithRetry(`https://jsonplaceholder.typicode.com/posts/1`);
