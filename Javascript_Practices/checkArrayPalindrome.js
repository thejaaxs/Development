// Check if Array is a Palindrome

let arr = [1, 2, 3, 2, 1];
let result = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[arr.length - i - 1])
        result = "false";
    else
        result = "true";
}
console.log(`Palindrome : ` + result);

// Using 2 method

let arr1 = [0, 1, 2, 3, 49, 4, 3, 2, 1, 0];
let result1 = "true";
for (let i = 0; i < arr1.length / 2; i++) {
    if (arr1[i] != arr1[arr1.length - i - 1]) {
        result1 = "false";
        break;
    }
}
console.log("Palindrome : " + result1);

// Using function

function isArrayPalindrome(arr2) {
    for (let i = 0; i < arr2.length / 2; i++) {
        if (arr2[i] != arr2[arr2.length - i - 1]) return false;
    }
    return true;
}
console.log("Palindrome : " + isArrayPalindrome([1, 2, 3, 2, 1]));
