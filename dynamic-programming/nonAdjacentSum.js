// Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. 
// The function should return the maximum sum of non-adjacent elements in the array. 
// There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

// For example, given:

// [2, 4, 5, 12, 7]

// The maximum non-adjacent sum is 16, because 4 + 12. 
// 4 and 12 are not adjacent in the array.

// Memoized
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
    if (i in memo) return memo[i];
    
    if (i >= nums.length) return 0;
    
    const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
    const exclude = nonAdjacentSum(nums, i + 1, memo);
    memo[i] = Math.max(include, exclude);
    return memo[i]
  };

// test 0
const nums = [2, 4, 5, 12, 7];
console.log(nonAdjacentSum(nums)); // -> 16

// test 1
const nums1 = [7, 5, 5, 12];
console.log(nonAdjacentSum(nums1)); // -> 19

// test 2
const nums2 = [7, 5, 5, 12, 17, 29];
console.log(nonAdjacentSum(nums2)); // -> 48

// test 3
const nums3 = [
    72, 62, 10,  6, 20, 19, 42,
    46, 24, 78, 30, 41, 75, 38,
    23, 28, 66, 55, 12, 17, 9,
    12, 3, 1, 19, 30, 50, 20
  ];
console.log(nonAdjacentSum(nums3)); // -> 488

// test 4
const nums4 = [
    72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
    30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
    83, 80, 56, 68,  6, 22, 56, 96, 77, 98,
    61, 20,  0, 76, 53, 74,  8, 22, 92, 37,
    30, 41, 75, 38, 23, 28, 66, 55, 12, 17,
    72, 62, 10,  6, 20, 19, 42, 46, 24, 78,
    42
  ];
console.log(nonAdjacentSum(nums4)); // -> 1465
  
  




