// Count the Vowels in a String
// Use of because the String ( not object )

let string = "Thejas";
let vowels = 0;
for (let char of string) {
    if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        vowels++;
}
console.log("Number of Vowels in " + string + " is " + vowels);

// Using Functions 

function countVowels(name) {
    let vowel = 0;
    for (let char of name) {
        if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
            vowel++;
    }
    return vowel;
}
console.log("Number Of Vowel is : " + countVowels("Thejas"));

// Using .includes & Functions 

function countVowelsInString(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log("Number Of Vowels is : "+countVowelsInString("Thejas"));