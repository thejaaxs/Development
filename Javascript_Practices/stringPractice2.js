// Compress a String (Run-length Encoding)

function compress(str) {
    let result = '';
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) count++;
        else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    return result;
}
console.log("Compressed : " + compress("aabbeeccddd"));

// Longest Word in a Sentence

function longestWordInSentence(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest)
}
console.log("Longest Word : " + longestWordInSentence("I am Learning Javascript !")); 