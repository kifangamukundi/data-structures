// Write a function sumPossible that takes in an amount and an array of positive numbers. 
// The function should return a boolean indicating whether or not it is possible to create the amount by
// summing numbers of the array. 
// You may reuse numbers of the array as many times as necessary.

// You may assume that the target amount is non-negative.

// Memoized
const sumPossible = (amount, numbers, memo = {}) => {
    if (amount === 0) return true;
    
    if (amount < 0) return false;
    
    if (amount in memo) return memo[amount];
    
    for (let num of numbers) {
      if (sumPossible(amount - num, numbers, memo)) {
        memo[amount] = true;
        return true;
      }
    }
    
    memo[amount] = false;
    return false;
  };

// test 0
console.log(sumPossible(8, [5, 12, 4])); // -> true, 4 + 4

// test 1
console.log(sumPossible(15, [6, 2, 10, 19])); // -> false

// test 2
console.log(sumPossible(13, [6, 2, 1])); // -> true

// test 3
console.log(sumPossible(103, [6, 20, 1])); // -> true

// test 4
console.log(sumPossible(12, [])); // -> false

// test 5
console.log(sumPossible(12, [12])); // -> true

// test 6
console.log(sumPossible(0, [])); // -> true

// test 7
console.log(sumPossible(271, [10, 8, 265, 24])); // -> false

// test 8
console.log(sumPossible(2017, [4, 2, 10])); // -> false

// test 9
console.log(sumPossible(13, [3, 5])); // -> true










