// Find the first non-repeating character

function firstNonRepeatingCharacter(str) {
    const map = new Map();
    for (let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    // return map;

    for (let [key, value] of map) {
        if (value === 1) return key;
    }
    return null;
}
console.log(firstNonRepeatingCharacter("aabbssbbsf"));