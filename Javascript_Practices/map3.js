// Practice Problems 

function frequencyCounter(arr) {
    const map = new myMap();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}
console.log(frequencyCounter([1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 9, 10, 10]));
// Using Objects 

function frequencyCounter(arr) {
    const freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}
console.log(frequencyCounter([1, 2, 2, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 10]));