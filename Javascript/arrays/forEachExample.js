// forEach() - calls a function on each element of an array, without returning a new array

// forEach() is a built-in method in JavaScript that can be used to iterate over the elements of an array and perform a function on each element. 
// We use forEach() when we want to perform the same operation on each element of an array.

// Here are some scenarios where forEach() can be used:

// Performing a side effect: If we want to perform a side effect on each element of an array (such as logging the element to the console or updating a global variable), 
// we can use forEach() to perform the side effect for each element.

const names = ['Alice', 'Bob', 'Charlie'];

names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// Updating an array in place: If we want to update an array in place (such as replacing each element with a modified version of the element), 
// we can use forEach() to perform the update for each element.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]

// In this example, forEach() is used to multiply each number in the numbers array by 2 and replace the original value with the updated value. 
// Note that we can use the index and array parameters of the callback function to access the current index and the original array, respectively.

// In general, forEach() is useful whenever we need to perform the same operation on each element of an array.

// Note that forEach() does not return a new array, so it is not appropriate for scenarios where we need to transform an array into a new array.