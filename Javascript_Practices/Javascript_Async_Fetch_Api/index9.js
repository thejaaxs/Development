// Fetch User and Their Posts Sequentially
// Search Users by Name
// Objective: Fetch all users and search if a user with given name exists.
// Task: Return the user’s email if found, else return “User not found”.

async function searchUserByName(name) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());

        if (user) {
            console.log(`Eamil Of User ${user.name} : ${user.email}`);
        }
        else {
            console.log("User Not found !");
        }
    }
    catch (error) {
        console.log("Fetching Error", error);
    }
}
searchUserByName('Leanne Graham');