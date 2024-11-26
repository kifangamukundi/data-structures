// reduce() - reduces an array to a single value by calling a function on each element and accumulating the result

// reduce() is another higher-order function in JavaScript that can be used to transform and process arrays. 
// We use reduce() when we want to reduce an array to a single value by repeatedly applying a function to the elements in the array.

// Here are some scenarios where reduce() can be used:

// Calculating totals: If we have an array of numbers and we want to calculate the sum or the average of the numbers, 
// we can use reduce() to add up the numbers and return a total value.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
console.log(sum); // Output: 15
console.log(average); // Output: 3

// Flattening arrays: If we have a multi-dimensional array and we want to flatten it into a single-dimensional array, 
// we can use reduce() to concatenate the elements of the sub-arrays.

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = nestedArray.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Grouping data: If we have an array of objects and we want to group them by a certain property, 
// we can use reduce() to create a new object that maps each distinct value of the property to an array of objects with that value.

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Dave', age: 25 }
  ];
  const groupedUsers = users.reduce((acc, user) => {
    const age = user.age;
    if (!acc[age]) {
      acc[age] = [];
    }
    acc[age].push(user);
    return acc;
  }, {});
  console.log(groupedUsers);
  /*
  Output:
  {
    25: [{ name: 'Alice', age: 25 }, { name: 'Dave', age: 25 }],
    30: [{ name: 'Bob', age: 30 }],
    35: [{ name: 'Charlie', age: 35 }]
  }
  */

// In each of these examples, reduce() is used to transform the data in an array into a new value or data structure. 
// The output of reduce() is a single value in the first example, a flattened array in the second example, and a new object mapping values to arrays in the third example. 
// In each case, reduce() is applied to the array to process each element and accumulate a new value based on the previous values.

// In general, reduce() is useful whenever we need to combine the elements of an array into a single value or a new data structure.