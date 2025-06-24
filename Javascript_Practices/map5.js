// Convert temperatures from Celsius to Fahrenheit

const celcius = [0, 10, 20, 30];
const fahrenheit = celcius.map(c => (c * 9.0) / 5.0 + 32);
console.log(fahrenheit);

//  Extract usernames from objects

const users = [
    { id: 1, username: "Thejas" },
    { id: 2, username: "Akash" }
];
const usernames = users.map(user => user.username);
console.log(usernames);