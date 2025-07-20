// 🔹 3. Add a New Post (POST Request)
// Objective: Send a POST request to create a new blog post.
// Endpoint: https://jsonplaceholder.typicode.com/posts
// Task: Log the response with the created post's ID.

async function createNewPost() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: `POST`,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'Async/Await Practice',
                body: 'Learning to Use Fetch & Async / Await !',
                userId: 1
            })
        });
        // const data = await respone.json();
        const data = await response.text();
        console.log(data);
    }
    catch (error) {
        console.log("Something Went Wrong !", error);
    }
}

createNewPost();