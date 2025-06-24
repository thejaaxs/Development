// Count Element Frequencies

function countFrequnency(arr) {
    const map = new Map();
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    return map;
}
console.log(countFrequnency([0, 0, 1, 1, 2, 3, 4, 5, 5]));

// Check for Duplicates

function checkDuplicates(arr) {
    const seen = new Map();
    for (let num of arr) {
        if (seen.has(num)) return true;
        seen.set(num, true);
    }
    return false;
}
console.log(checkDuplicates([1, 2, 2, 3, 4, 5]));