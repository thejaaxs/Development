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
function removeAllInstances(arr, value) {
    return arr.filter(item =>
        item !== value
    );
}
console.log(removeAllInstances([1, 2, 3, 2, 4], 2));

// Insert Element in Sorted Array
function insertElementInSortedArray(arr, value) {
    let index = arr.findIndex(e => e > value);
    if (index === -1) index = arr.length;
    arr.splice(index, 0, value);
    return arr;
}
console.log(insertElementInSortedArray([10, 20, 30], 25));

// Custom Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop());
console.log(stack.peek());