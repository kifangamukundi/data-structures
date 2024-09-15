
// PROBLEM: Write a function "canConstruct(target, wordBank)" that accept a target
// string and an array of strings.

// Returned a boolean indicating whether or not the target can be constructed by concatenating elements of 
// the wordBank array.

// Brute force
const canConstructBruteForce = (target, wordBank) => {
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstructBruteForce(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
};

// Memoized
const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return memo[target];
            }
        }
    }

    memo[target] = false;
    return memo[target];
};

// Tabulation
const canConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <=target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                // if the word matches the characters starting at position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length];
};

console.log(canConstruct("banana", ["ba", "pa", "ca", "na"])); // True
console.log(canConstruct("", ["ba", "pa", "ca", "na"])); // false
console.log(canConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])); // True
console.log(canConstruct("potato", ["pot", "ta", "to"])) // False
console.log(canConstruct("skateboard", ["skat", "te", "bor", "ard"])); // False
console.log(canConstruct("skateboard", ["skat", "te", 'e', "bo", "ard"])); // True
console.log(canConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee'
])); // false

