// Reverse a String

let str = "Thejas";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log("Reversed : " + reversed);

// Using Function 

function reverseAString(str1) {
    let reverse = "";
    for (let i = str1.length - 1; i >= 0; i--) {
        reverse += str1[i];
    }
    console.log(`Reversed : ${reverse}`);
}
reverseAString("Rahul");

// Using Function 2 

function reverseString(str2) {
    let reversedString = "";
    for (let i = str2.length - 1; i >= 0; i--) {
        reversedString += str2[i];
    }
    return reversedString;
}
console.log("Reversed : " + reverseString("Postman"));