// Inserting in Js ( DOM )

let arr = [1, 2, 4];

// Push Method
arr.push(5);
console.log(arr); // adds at the end of the array 

// Unshift Method 
arr.unshift(0);
console.log(arr); // dds at the begining of the array

// Splice Method
arr.splice(3, 0, 3);
console.log(arr); // adds the element at the index ( splice(index,0,element ))

// Removal in Js ( DOM )

let arr1 = [0, 1, 2, 3, 4, 5];

// Pop method 
arr1.pop();
console.log(arr1); // Removes an element from the end of the array 

// Shift method 
arr1.shift();
console.log(arr1); // Removes from the begining 

// splice Method 
arr1.splice(2, 1); // Remove from the index 2 , 1 ( to remove )

// filter Method
arr1 = arr1.filter(num => num % 2 !== 0);
console.log(arr1); // Only keeps the non even ( Odd ) Numbers

// Working with the DOM's 
// Write a function insertAt(arr, index, value) that inserts value at position index.

function insertElement(arr, index, element) {
    arr.splice(index, 0, element)
    return arr
}
console.log(insertElement([0, 1, 2, 4], 3, 3));

// Remove all negative numbers from array
function removeNegativeElement(arr) {
    arr = arr.filter(num => num >= 0);
    return arr;
}
console.log(removeNegativeElement([5, -2, 3, -1, 0]));