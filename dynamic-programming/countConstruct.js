
// PROBLEM: Write a function "countConstruct(target, wordBank)" that accept a target
// string and an array of strings.

// Returned a value indicating how many unique ways can we construct the target with the words in the wordBank.
// return zero if there's no way

// Brute force
const countConstructBruteForce = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstructBruteForce(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
};

// Memoized
const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount
    return memo[target];
 };

//  Tabulation
const countConstructTabulation = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
};
 
 console.log(countConstruct("banana", ["ba", "pa", "ca", "na"])); // 1
 console.log(countConstruct("", ["ba", "pa", "ca", "na"])); // 0
 console.log(countConstruct("abcdef", ["ab", "abcdefgh", "c", "def"])); // 1
 console.log(countConstruct("potato", ["pot", "ta", "to"])); // 0
 console.log(countConstruct("skateboard", ["skat", "te", "bor", "ard"])); // 0
 console.log(countConstruct("skateboard", ["skat", "te", 'e', "bo", "ard", 'ska'])); // 2
 console.log(countConstructTabulation("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
     'e',
     'ee',
     'eee',
     'eeee',
     'eeeee',
     'eeeeee',
     'eeeeeee',
     'eeeeeeee'
 ])); // 0