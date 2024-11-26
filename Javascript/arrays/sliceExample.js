// slice(): Returns a new array containing a portion of the original array, 
// starting at the specified start index and continuing up to (but not including) the specified end index.

let myArray = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Extract a section of the array starting at index 1 and ending at index 3 (but not including index 3)
let section = myArray.slice(1, 3);

console.log(section); // Output: ["banana", "orange"]
console.log(myArray); // Output: ["apple", "banana", "orange", "grape", "kiwi"]
