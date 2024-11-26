// filter() - creates a new array by filtering out elements that don't pass a test defined by a function

// filter() is a higher-order function in JavaScript that creates a new array by filtering out elements that don't pass a test defined by a function. 
// We use filter() when we want to select a subset of elements from an array based on a certain condition.

// Here are some scenarios where filter() can be used:

// Filtering data: If we have an array of data and we want to select a subset of elements that meet a certain criteria, 
// we can use filter() to create a new array with only the elements that pass the test. 
// For example, we can use filter() to select only the even numbers from an array of numbers.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Searching data: If we have an array of objects and we want to find a specific object or objects that meet a certain criteria, 
// we can use filter() to create a new array with only the objects that pass the test. 
// For example, we can use filter() to find all the users in an array of user objects who are over the age of 18.

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const adultUsers = users.filter(user => user.age >= 18);
  console.log(adultUsers); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
  
// Removing duplicates: If we have an array of data that contains duplicates and we want to remove them,
// we can use filter() to create a new array with only the unique elements. 
// For example, we can use filter() to remove duplicates from an array of numbers.

const numbersWithDuplicates = [1, 2, 3, 2, 4, 3, 5];
const uniqueNumbers = numbersWithDuplicates.filter((num, index, array) => array.indexOf(num) === index);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// In each of these examples, filter() is used to create a new array based on the data in an existing array. 
// The output of filter() is a new array that can be used for further processing or rendering in a UI. 
// In the first example, only even numbers are selected. 
// In the second example, only users who are over 18 are selected. 
// In the third example, duplicates are removed from the array.

// In general, filter() is useful whenever we need to select
// a subset of elements from an array based on a certain condition.
