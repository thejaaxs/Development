// Maximum Element in an Array 

let arr = [10, 210, 3, 40, 5];
let max = arr[0];
for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) max = arr[i];
}
console.log("Maximum Element : " + max);

// Using for of !

let arr1 = [10, 2, 4, 70, 9];
let max1 = arr1[0];

for (let val of arr1) {
    if (val > max1) max1 = val;
}
console.log("Maximum Element : " + max1);

// Using Function 

function maxInArray(arr2) {
    let max2 = arr[0];
    for (let num of arr2) {
        if (num > max2) max2 = num;
    }
    console.log(`Maximum Element : ${max2}`);
}
maxInArray([2, 9, 4, 7, 1]);

// Using Function & Return  

function maxElementInArray(arr3) {
    let max2 = arr3[0];
    for (let num1 of arr3) {
        if (num1 > max2) max2 = num1;
    }
    return max2;
}
console.log("Maximum Element : " + maxElementInArray([1, 2, 3, 5, 6, 7, 10]));