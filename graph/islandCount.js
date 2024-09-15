// Write a function, islandCount, that takes in a grid containing Ws and Ls. 
// W represents water and L represents land. The function should return the number of islands on the grid. 
// An island is a vertically or horizontally connected region of land.

// Depth first
const islandCount = (grid) => {
    const visited = new Set();
    
    let count = 0;
    for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
        if (explore(grid, r, c, visited) === true) {
          count += 1;
        }
      }
    }
    
    return count;
  };
  
  const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return false;
    
    if (grid[r][c] === 'W') return false;
    
    const pos = r + ',' + c;
    if (visited.has(pos)) return false;
    visited.add(pos);
    
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);
    return true;
  };

// test 0
const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];
  
console.log(islandCount(grid)); // -> 3

// test 1
const grid1 = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];
  
console.log(islandCount(grid1)); // -> 4

// test 2
const grid2 = [
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
    ['L', 'L', 'L'],
  ];
  
console.log(islandCount(grid2)); // -> 1

// test 3
const grid3 = [
    ['W', 'W'],
    ['W', 'W'],
    ['W', 'W'],
  ];
  
console.log(islandCount(grid3)); // -> 0
  
  
  
  
