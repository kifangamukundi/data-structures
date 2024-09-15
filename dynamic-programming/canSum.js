 
// PROBLEM: Write a funcion "canSum(targetSum, numbers)" that takes in a targetSum
// and an array of numbers as arguments.
// The function should return a boolean indicating whether or not it is possible to
// generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative

// Brute force
const canSumBruteForce = (targetSum, numbers) =>{
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSumBruteForce(remainder, numbers) === true) {
            return true;
        }
    }
    return false;
};

// Memoized
const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }

    memo[targetSum] = false;
    return memo[targetSum];
};

// Tabulation
const canSumTabulation = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
};

console.log(canSum(7, [2,3])); // true
console.log(canSum(7, [5,3,4,7])); //true
console.log(canSum(7, [2,4])); // false
console.log(canSum(7, [2,3,5])); // true
console.log(canSum(7, [2,3,5,7])); // true
console.log(canSum(197, [1,10,2])); // true
console.log(canSumTabulation(300, [7, 14])); // false

