// concat(): Returns a new array that combines two or more arrays.

let array1 = ['apple', 'banana'];
let array2 = ['orange', 'grape'];
let array3 = ['kiwi'];

// Concatenate array1 and array2 into a new array
let newArray1 = array1.concat(array2);

console.log(newArray1); // Output: ["apple", "banana", "orange", "grape"]

// Concatenate array1, array2, and array3 into a new array
let newArray2 = array1.concat(array2, array3);

console.log(newArray2); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
