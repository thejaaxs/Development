let arr = [1, 3, 5, 7, 9];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    newArr.push(element ** 2);
}
console.log(newArr);

// Map 
let arr1 = [1, 2, 3, 4, 5];
let newArr1 = arr1.map((e) => {
    return e ** 2;
});
console.log(newArr1);

// Use of Filter 

const greaterThenSeven = ((e) => {
    if (e > 7) return true;
    return false;
});
console.log(newArr1.filter(greaterThenSeven));

// Reduce 

let arr2 = [1, 2, 3, 4, 5];

const red = (a, b) => {
    return a + b;
}
console.log(arr2.reduce(red));

// Array. form 

let name = "Thejas";
console.log(Array.from(name));