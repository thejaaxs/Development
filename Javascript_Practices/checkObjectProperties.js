// Object-Focused 
// Description: Create a student object with keys: name, age, marks.

// If marks ≥ 40, print "Pass", else "Fail".

let student = {
    name: "Thejas",
    age: 21,
    marks: 100
};
let message;
if (student.marks >= 40 && student.marks <= 100) message = "Pass";
else message = "Fail";
console.log(message);

let std = {
    name: "Thejas",
    isAdmin: true
};
if (std.isAdmin) {
    console.log("Welcome Admin !");
}
else console.log("Welcome User !");