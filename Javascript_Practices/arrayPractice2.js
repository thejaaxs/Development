// Remove duplicates

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 2, 1, 1, 2]));

// Sort an array

function sortAnArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortAnArray([5, 2, 9, 1]));

// Print All Elements (Basic Access, Loops)

function printAllElements(arr) {
    arr.forEach(n => {
        console.log(n);
    });
    for (let elements of arr)
        console.log(elements);

    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);
}
printAllElements(["Apple", 1, 'A', null]);

// Find Max Value (Conditionals, Iteration)

function returnMax(arr) {
    let max = Number.MIN_VALUE;
    let max1 = arr[0];
    arr.forEach(n => {
        if (n > max) max = n;
    });
    for (let nums of arr) {
        if (nums > max1) max1 = nums;
    }
    return max1;
    // return max;
}
console.log(returnMax([12, 5, 9, 23, 17]));

// Sum of All Numbers (Loops, Arithmetic)

function sumOfNumbers(arr) {
    // return arr.reduce((a, b) => a + b);
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// Count Frequency (Objects + Arrays)

function countFrequency(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(countFrequency([1, 2, 2, 3, 1, 1]));

// Remove Duplicates (Set, Spread Operator)

function removeDup(arr) {
    return [...new Set(arr)];
}
console.log(removeDup([1, 2, 2, 3, 1, 4]));

// Reverse an Array (reverse())

function rev(arr) {
    return [...arr].reverse();
}
console.log(rev([1, 2, 3, 4, 5]));

// Filter Even Numbers (filter())

function filterEvenNumbers(arr) {
    return [...arr].filter(n => n % 2 == 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Square All Numbers (map())

function squareAllNumbers(arr) {
    return arr.map(n => n * n);
}
console.log(squareAllNumbers([1, 2, 3, 4]));

// Sort Ascending (sort() with Comparator)

function AscSort(arr) {
    return [...arr].sort((a, b) => a - b);
}
console.log(AscSort([5, 2, 9, 1, 3]));

// Descending Order 

function DescSort(arr) {
    return [...arr].sort((b, a) => a - b);
}
console.log(DescSort([5, 2, 9, 1, 3]));

// Second Largest 

function secondLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log(secondLargest([10, 5, 20, 8, 20]));

// Factorial 

function factorial(n) {
    let arr = Array.from(Array(n + 1).keys());
    // console.log(arr.slice(1));
    let c = arr.slice(1).reduce((a, b) => {
        return a * b;
    })
    console.log(c);
}
factorial(5);
