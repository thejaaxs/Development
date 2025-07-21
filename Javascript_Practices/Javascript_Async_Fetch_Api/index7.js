//  7. Fetch Multiple Users in Parallel
// Objective: Fetch details of user IDs [1, 3, 5] at the same time.
// Task: Use Promise.all() to get them and log the names.

async function fetchMultipleUsers(userIds) {
    try {
        const userPromises = userIds.map(id => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
        );

        const users = await Promise.all(userPromises);
        users.forEach(user => console.log(user.name));
    }
    catch (error) {
        console.log("Error Fetching Users : ", error);
    }
}

fetchMultipleUsers([1, 3, 5]);