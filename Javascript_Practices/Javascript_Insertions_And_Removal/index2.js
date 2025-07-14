// Insert Value at Specific Index

function insertAtIndex(arr, index, element) {
    if (index < 0 || index > arr.length) {
        console.log("Invalid Index !");
        return arr;
    }
    arr.splice(index, 0, element);
    return arr;
}
console.log(insertAtIndex([10, 20, 30], 1, 15));

// Remove All Duplicates from Array

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 1]));

// Remove All Instances of a Given Value