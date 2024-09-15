
// PROBLEM: Write a function "allConstruct(target, wordBank)" that accept a target
// string and an array of strings.

// Returned a 2d array indicating all the unique ways that can we construct the target with the words in the wordBank.
// return [] if there's no way

// Brute force
const allConstructBruteForce = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructBruteForce(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
};

// Memoized
const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return memo[target];
 };
 
// Tabulation
const allConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [ ...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
};

 console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl'])); // 2 ways on the output
 console.log(allConstructTabulation("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])); // 4 ways on the output
 console.log(allConstruct("potato", ['pot', 'ta', 'to']));
 console.log(allConstructTabulation("eeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee',
    'eeeeeee',
    'eeeeeeee'
]));
