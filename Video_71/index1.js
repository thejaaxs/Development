// Advance Javascript 
// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Anush", "Bharathiram", "Charithesh", "Dhanusharyan", "Emanuel", "Farid", "Gajendragadani", "Himanshuprabhuyan", "Iskimakidua"];

function sortHouse(students) {
    return students.map((name) => {
        const len = name.length;
        if (len < 6) return { name, house: "Gryffindor" };
        else if (len < 8) return { name, house: "HufflePuff" };
        else if (len < 12) return { name, house: "Ravenclaw" }
        else return { name, house: "Slytherin" };
    });
}
console.log(sortHouse(students));

// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    return str.split('').reverse().join('');
}
console.log("Mirror : " + mirrorString("apple"));

// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidation(password) {
    return password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password);
}
console.log("Password Validation Check : " + passwordValidation("Thejas@"));

// Async Array Mapping 

async function asyncMapDouble(numbers) {
    return Promise.all(numbers.map(num =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve(num ** 2)
            }, 5000)
        )
    ))
}
let result = await asyncMapDouble([10, 20, 30, 40, 50]);
console.log(result);