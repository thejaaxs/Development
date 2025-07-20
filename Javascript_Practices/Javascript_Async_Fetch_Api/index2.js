// Fetch a Single Post by ID

async function fetchPostById(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        console.log(`Title : ${data.title}\nBody : ${data.body}`);
    }
    catch (error) {
        console.log("Something Went Wrong !", error);
    }
}

fetchPostById(3);