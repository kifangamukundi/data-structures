// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

let myArray = ['apple', 'banana', 'orange'];

// Add an element to the beginning of the array using unshift()
myArray.unshift('grape');

console.log(myArray); // Output: ["grape", "apple", "banana", "orange"]

// Add multiple elements to the beginning of the array using unshift()
myArray.unshift('pear', 'kiwi');

console.log(myArray); // Output: ["pear", "kiwi", "grape", "apple", "banana", "orange"]
