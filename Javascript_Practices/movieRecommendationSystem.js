// Movie Recommendation System

let user = {
    name: "Thejas",
    age: 40,
    mood: "happy"
};
if (user.age < 13)
    console.log("Watch Cartoons !");
else if (user.mood === "happy")
    console.log("Watch Comedy !");
else if (user.mood === "sad")
    console.log("Watch Drama !");
else
    console.log("Watch a Documentary !");