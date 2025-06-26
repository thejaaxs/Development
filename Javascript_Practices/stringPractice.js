// Strings Practice 

let name1 = "Thejas";
let name2 = 'Rahul';
let name3 = `Hello ${name2} !`;

console.log(name1);
console.log(name2);
console.log(name3);

// String Length 

let str = "Hello";
console.log(str.length);

// String Characters 

let str1 = "Code";
console.log(str1[0]);
console.log(str1.charAt(2));

// Templates 
let real_name = "Thejas";
console.log(`Hello ${real_name.toUpperCase()}`);

// Reverse a String 

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(`Reverse : ` + reverseString("Hello"));

// Check Palindrome 

function checkPalindrome(str) {
    let clear = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clear === clear.split('').reverse().join('');
}
console.log("Palindrome : " + checkPalindrome("A man, a plan, a canal: Panama"));

// Count Vowels in a String

function countVowels(str) {
    const vowel = "aeiouAEIOU";
    let count = 0;
    for (let ch of str) {
        if (vowel.includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("Interview"));

// Other Method 

function countVowel(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowel("Interview"));
