//  4. Fetch Comments of a Post
// Objective: Get all comments for a particular post.
// Endpoint: https://jsonplaceholder.typicode.com/posts/:id/comments
// Task: Display all comment names and emails.

async function fetchComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await response.json();
        comments.forEach(comment => {
            console.log(`Name : ${comment.name} || Email : ${comment.email}`);
        });
    } catch (error) {
        console.log("Something Went Wrong !", error);
    }
}
fetchComments(1);