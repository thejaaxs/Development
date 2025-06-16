// Greet user based on time

const prompt = require('prompt-sync')(); // use the command npm install prompt-sync
let hour = parseInt(prompt("Enter The Hour : "));

if (hour < 12) console.log("Good Morning !");
else if (hour < 18) console.log("Good Afternoon !");
else console.log("Good Evening !");