// Count Characters in a String 

let str = "dad";
const obj = {};
for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
}
console.log(obj);

// Function 

function countCharactersInString(str) {
    const count = {};
    for (let ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }
    console.log(count);
}
countCharactersInString("Apple");

// Using the other method 

function countCharacters(string) {
    const cnt = {};
    for (let ch of string) {
        if (cnt[ch]) cnt[ch] += 1;
        else cnt[ch] = 1;
    }
    return cnt;
}
console.log(countCharacters("Apple"));