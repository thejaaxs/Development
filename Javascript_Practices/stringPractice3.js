//  Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Thejas"));

// 2 Method 

function reverseAString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}
console.log(reverseAString("Hello"));

// Count Vowels

function countVowels(str) {
    let vowels = "aeiouAEIUO";
    let count = 0;
    for (let ch of str) {
        if (vowels.includes(ch)) count++;
    }
    return count;
}
console.log(countVowels("Interview"));

// Check Palindrome

function checkPalindrome(str) {
    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) return false;
    }
    return true;
}
console.log(checkPalindrome("emadame"));

// Convert to Title Case

function convertToTitleCase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(convertToTitleCase("hello world"));

// 2 Method 

function capitalizeFirstWord(sentence) {
    return sentence.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstWord("hello world"));

// Longest Word in a Sentence

function longestWordInSentence(sentence) {
    return sentence.split(/\s+/).reduce((longest, word) => longest.length > word.length ? longest : word);
}
console.log(longestWordInSentence("The quick brown fox jumps over the lazy dog"));

// Character Frequency Count

function characterFreqCount(str) {
    let obj = {};
    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }
    return obj;
}
console.log(characterFreqCount("aabbccdde"));

// Object 

let object = {
    'e': 1,
    'g': 2,
};
console.log(object['g']);

// First Non-Repeating Character

function firstNonRepeatingCharacter(str) {
    for (let ch of str) {
        if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
    }
    return null;
}
console.log(firstNonRepeatingCharacter("aabbcdeff"));

// Is Anagram

function isAnagram(str1, str2) {
    let similar = word => word.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    return similar(str1) === similar(str2);
}
console.log(isAnagram("Listen", "Silent"));

// Compress String (Run-Length Encoding)

function compressString(str) {
    let count = 1;
    let res = '';
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        }
        else {
            res += str[i - 1] + count;
            count = 1;
        }
    }
    return res;
}
console.log(compressString("aabcccccaaa"));

// Find All Duplicates

function returnDuplicates(str) {
    let obj = {};
    let dup = {};
    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }
    // Use Object . Keys when you have to print only the keys in the object !
    return Object.keys(obj).filter(ch => obj[ch] > 1);
}
console.log(returnDuplicates("programming"));