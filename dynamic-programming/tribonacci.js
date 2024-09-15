// Write a function tribonacci that takes in a number argument, n, and 
// returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous three numbers.

// Solve this recursively.

// Brute force
const tribonacciBruteForce = (n) => {
    if (n === 0 || n === 1) return 0;
  
    if (n === 2) return 1;
  
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  };

// Memoized
const tribonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
  
    if (n === 0 || n === 1) return 0;
  
    if (n === 2) return 1;
  
    memo[n] = tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
    return memo[n];
  };

// test 0
console.log(tribonacci(0)); // -> 0

// test 1
console.log(tribonacci(1)); // -> 0

// test 2
console.log(tribonacci(2)); // -> 1

// test 3
console.log(tribonacci(5)); // -> 4

// test 4
console.log(tribonacci(7)); // -> 13

// test 5
console.log(tribonacci(14)); // -> 927

// test 6
console.log(tribonacci(20)); // -> 35890

// test 7
console.log(tribonacci(37)); // -> 1132436852







  

