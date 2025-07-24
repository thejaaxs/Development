// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleElements(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            results.push(arr[i]);
        }
        else
            results.push(arr[i] ** 2);
    }
    return results;
}
console.log(doubleElements([1, 2, 3, 4, 5, 5]));

// The sum selector
function sumUntilNegative(arr) {
    let sum = 0;
    for (let item of arr) {
        if (item < 0) break;
        sum += item;
    }
    return sum;
}
console.log(sumUntilNegative([10, 20, 30, 40, -5]));

// The Vowel Counter 

function countVowel(str) {
    return str.match(/[AEIOUaeiou]/g || []).length;
}
console.log(countVowel("Bharath"));