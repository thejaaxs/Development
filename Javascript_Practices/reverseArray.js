// Reverse an Array

let arr = [1, 2, 3, 4, 5, 6];
let left = 0, right = arr.length - 1;
while (left <= right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}
console.log(arr);

// Using a function 

function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}
console.log("Reverse Of The Array is : " + reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Using push and the functions 

function reverseArrayFully(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("Reversed : " + reverseArrayFully([1,2,3,4,5]));