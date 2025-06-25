// Character Frequency Comparison (Anagram Check)

function checkAnagrams(s1, s2) {
    if (s1.length != s2.length) return false;
    const freqMap = new Map();
    for (let ch of s1) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }
    for (let ch of s2) {
        if (!freqMap.has(ch)) return false;
        freqMap.set(ch, freqMap.get(ch) - 1);
        if (freqMap.get(ch) === 0) freqMap.delete(ch);
    }
    return freqMap.size === 0;
}
console.log("Are Anagrams : " + checkAnagrams("listen", "silent"));

// Top K Frequent Elements

function topKFrequentElements(nums, k) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    // return map;
    const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(([num]) => num);
}
console.log(topKFrequentElements([1, 1, 1, 2, 2, 3], 2));