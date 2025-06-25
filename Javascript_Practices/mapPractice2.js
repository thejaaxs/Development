// First Non-Repeating Character

function printNonRepeatingCharacter(str) {
    const map = new Map();
    for (let ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    for (let [key, value] of map) {
        if (value === 1) return key;
    }
    return null;
}
console.log("The Non Repeating Character is : " + printNonRepeatingCharacter("aabbeddef"));

// Group Anagrams

function groupAnagrams(words) {
    const map = new Map();
    for (let word of words) {
        let sorted = word.split('').sort().join('');
        if (!map.has(sorted)) map.set(sorted, []);
        map.get(sorted).push(word);
    }
    return map;
}
console.log(groupAnagrams(["bat", "tab", "tap", "pat", "cat"]));
