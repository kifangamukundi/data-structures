
// PROBLEM: Say that you are a traveler on a 2D grid. You begin in the
// top-left corner and your goal is to travel to the bottom-right corner.
// You may only move down or right.
// In how many ways can you travel to the goal on a grid with dimensions m * n?

// Bruteforce
const gridTravelerBruteForce = (m, n) => {
    if (m ===1 && n ===1) return 1;
    if (m ===0 || n ===0) return 0;
    return gridTravelerBruteForce(m -1, n) + gridTravelerBruteForce(m, n - 1);
};
// Memoized
const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m ===1 && n ===1) return 1;
    if (m ===0 || n ===0) return 0;

    memo[key] = gridTraveler(m -1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

// Tabulation
const gridTravelerTabulation = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));

    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }

    return table[m][n];
};

console.log(gridTraveler(2,3));
console.log(gridTraveler(18,18));
console.log(gridTravelerTabulation(31,31));

