// sort() - sorts an array by calling a function that defines the sort order

// sort() is a built-in method in JavaScript that can be used to sort the elements of an array in place. 
// We use sort() when we want to order the elements of an array based on a specific criteria.

// Here are some scenarios where sort() can be used:

// Sorting strings: If we have an array of strings and we want to sort them alphabetically, 
// we can use sort() to arrange the strings in ascending or descending order.

const fruits = ['apple', 'orange', 'banana', 'kiwi'];
const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ["apple", "banana", "kiwi", "orange"]

// Sorting numbers: If we have an array of numbers and we want to sort them in ascending or descending order, 
// we can use sort() to order the numbers based on their value.

const numbers = [5, 2, 9, 1, 7];
const ascendingNumbers = numbers.sort((a, b) => a - b);
const descendingNumbers = numbers.sort((a, b) => b - a);
console.log(ascendingNumbers); // Output: [1, 2, 5, 7, 9]
console.log(descendingNumbers); // Output: [9, 7, 5, 2, 1]

// Sorting objects: If we have an array of objects and we want to sort them based on a property of the objects, 
// we can use sort() to order the objects based on the value of the property.
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Dave', age: 20 }
  ];
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  console.log(sortedUsers);
  /*
  Output:
  [
    { name: 'Dave', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ]
  */

// In each of these examples, sort() is used to rearrange the elements of an array based on a specific criteria. 
// In the first example, the strings are sorted alphabetically. 
// In the second example, the numbers are sorted in ascending and descending order based on their value. 
// In the third example, the objects are sorted based on their age property. 
// Note that sort() modifies the original array in place, so it is often a good practice to make a copy of the array if the original array needs to be preserved.

// In general, sort() is useful whenever we need to rearrange the elements of an array based on a specific order or ranking.