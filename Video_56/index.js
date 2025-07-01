let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);

arr[0] = 5003;
console.log(arr[0]);

// Type Of 

console.log(typeof arr);

// ToString function
console.log(arr.toString());

// Join function 
console.log(arr.join(" and "));

// pop removes a element and returns it 

let b = [1, 2, 3, 4, 5];
console.log(b.pop());

// push to add the element 

let c = [100, 200, 300, 400, 500];
c.push(600);
console.log(c);

// To Remove first Element
c.shift();
console.log(c);

// Delete using delete 

delete c[4];
console.log(c);

// concat 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
console.log(arr1.concat(arr2, arr3));

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2); // remove 3 elements from the first element (index)
console.log(numbers)

// add using the splice

let number = [1, 2, 3, 4, 5, 6, 7, 8,];
number.splice(2, 2, 900, 1000);
console.log(number);

