// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let myArray = ['apple', 'banana', 'orange', 'peach'];

// Remove an element from the array using splice()
myArray.splice(2, 1);

console.log(myArray); // Output: ["apple", "banana", "peach"]

// Add an element to the array using splice()
myArray.splice(1, 0, 'grape');

console.log(myArray); // Output: ["apple", "grape", "banana", "peach"]

// Replace an element in the array using splice()
myArray.splice(2, 1, 'kiwi', 'melon');

console.log(myArray); // Output: ["apple", "grape", "kiwi", "melon", "peach"]
