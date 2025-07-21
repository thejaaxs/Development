// Handle 404 for Invalid User
// Objective: Try fetching a user with an invalid ID.
// Endpoint: https://jsonplaceholder.typicode.com/users/:invalidId
// Task: Use try/catch and show a custom error message if user not found.

async function fetchInvalidUser(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`User Not Found ! || Status : ${response.status}`);
        }
        const user = await response.json();
        console.log('User : ', user);
    } catch (error) {
        console.log("Fetch Error : ", error.message)
    }
}

fetchInvalidUser(1000);