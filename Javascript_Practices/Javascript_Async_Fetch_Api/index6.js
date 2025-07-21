// Fetch User and Their Posts Sequentially
// Objective: First fetch user info, then their posts.
// Endpoints:
// https://jsonplaceholder.typicode.com/users/:id
// https://jsonplaceholder.typicode.com/posts?userId=:id
// Task: Display the user’s name and a list of their post titles.

async function fetchUserAndPosts(userId) {
    try {
        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userRes.json();

        const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postRes.json();

        console.log(`User : ${user.name}`);
        posts.forEach(post => console.log(`${post.title}`));

    } catch (error) {
        console.log("Error : ", error);
    }
}

fetchUserAndPosts(1);