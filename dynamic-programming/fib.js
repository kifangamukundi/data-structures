// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// Solve this recursively.

// Brute force
const fibBruteForce = (n) => {
    if (n <= 2) return 1;
  
    return fibBruteForce(n - 1) + fibBruteForce(n - 2);
  };

// Memoized
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];

    if (n <= 2 ) return 1;
  
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  };

// Tabulation
const fibTabulation = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }

  return table[n];
};
  
// test 0
console.log(fib(0)); // -> 0

// test 1
console.log(fib(1)); // -> 1

// test 2
console.log(fib(2)); // -> 1

// test 3
console.log(fib(3)); // -> 2

// test 4
console.log(fib(4)); // -> 3

// test 5
console.log(fib(5)); // -> 5

// test 6
console.log(fibTabulation(35)); // -> 9227465

// test 7
console.log(fibTabulation(46)); // -> 1836311903

