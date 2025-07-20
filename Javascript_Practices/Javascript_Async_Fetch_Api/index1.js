async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = (await response).json();
        console.log(data);
    }
    catch (error) {
        console.log("Something Went Wrong !");
    }
}
getData();
// Problem 1: Fetch and Print Posts

async function fetchPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log("Something went Wrong !");
    }
}
fetchPosts();