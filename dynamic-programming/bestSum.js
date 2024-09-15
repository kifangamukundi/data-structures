
// PROBLEM: Write a function "bestSum(targetSum, numbers)" that takes in a targetSum
// and an array of numbers as arguments.
// The function should return an array containing the minimum combination of elements that
// add up to exactly the targetSum. If there is no combination, result is null.

// Only one combination is needed

// Brute force
const bestSumBruteForce = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumBruteForce(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};

// Memoized
const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination
    return memo[targetSum];
};

// Tabulation
const bestSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of  numbers) {
                const combination = [ ...table[i], num];
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[targetSum];
};

console.log(bestSum(7, [5,3,4,7])); // [7]
console.log(bestSum(8, [2,3,5])); // [3, 5]
console.log(bestSum(8, [1,4,5])); // [4, 4]
console.log(bestSumTabulation(100, [1,2,5,25])); // [25, 25, 25, 25]

