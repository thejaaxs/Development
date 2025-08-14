// 1️⃣ Counter function that increments every time it's called, but cannot be reset from outside

function createCounter() {
    let count = 0;
    return function () {
        return count++;
    }
}
const counter = createCounter();
console.log(counter()); // this prints 0 
console.log(counter()); // this prints 1

// 2️⃣ multiplyBy(n) — returns a function that multiplies its argument by n

function multiplyBy(n) {
    return function (x) {
        return x * n;
    };
}
const double = multiplyBy(2);
console.log(double(10)); // this prints 20 