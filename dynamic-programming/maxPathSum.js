// Write a function, maxPathSum, that takes in a grid as an argument. 
// The function should return the maximum sum possible by traveling a path from
//  the top-left corner to the bottom-right corner. 
//  You may only travel through the grid by moving down or right.

// You can assume that all numbers are non-negative.

// Memoized
const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
    const pos = r + ',' + c;
    if (pos in memo) return memo[pos];
    
    if (r === grid.length || c === grid[0].length) return -Infinity;
    
    
    if (r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];
    
    const down = maxPathSum(grid, r + 1, c, memo);
    const right = maxPathSum(grid, r, c + 1, memo);
      
    memo[pos] = grid[r][c] + Math.max(down, right);
    return memo[pos];
  };

// test 0
const grid = [
    [1, 3, 12],
    [5, 1, 1],
    [3, 6, 1],
  ];
console.log(maxPathSum(grid)); // -> 18

// test 1
const grid1 = [
    [1, 2, 8, 1],
    [3, 1, 12, 10],
    [4, 0, 6, 3],
  ];
console.log(maxPathSum(grid1)); // -> 36

// test 2
const grid2 = [
    [1, 2, 8, 1],
    [3, 10, 12, 10],
    [4, 0, 6, 3],
  ];
console.log(maxPathSum(grid2)); // -> 39

// test 3
const grid3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
console.log(maxPathSum(grid3)); // -> 27

// test 4
const grid4 = [
    [1, 1, 3, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 6, 1, 1, 5, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 5, 1, 1, 1, 1, 0, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1],
    [2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];
console.log(maxPathSum(grid4)); // -> 56
  
