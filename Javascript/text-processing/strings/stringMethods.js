// length: returns the length of a string.
let str = "Hello World";
console.log(str.length); // Output: 11

// charAt(): returns the character at the specified index of a string.
let str2 = "Hello World";
console.log(str2.charAt(1)); // Output: e

// substring(): returns a portion of a string between the specified start and end indexes.
let str3 = "Hello World";
console.log(str3.substring(0, 5)); // Output: Hello

// slice(): returns a portion of a string between the specified start and end indexes.
let str4 = "Hello World";
console.log(str4.slice(0, 5)); // Output: Hello

// toLowerCase(): returns the string with all characters converted to lowercase.
let str5 = "Hello World";
console.log(str5.toLowerCase()); // Output: hello world

// toUpperCase(): returns the string with all characters converted to uppercase.
let str6 = "Hello World";
console.log(str6.toUpperCase()); // Output: HELLO WORLD

// indexOf(): returns the index of the first occurrence of a specified substring within a string.
let str7 = "Hello World";
console.log(str7.indexOf('o')); // Output: 4

// lastIndexOf(): returns the index of the last occurrence of a specified substring within a string.
let str8 = "Hello World";
console.log(str8.lastIndexOf('o')); // Output: 7

// replace(): replaces a specified substring with another string or a regular expression.
let str9 = "Hello World";
console.log(str9.replace('World', 'Universe')); // Output: Hello Universe

// split(): splits a string into an array of substrings based on a specified separator.
let str10 = "Hello World";
console.log(str10.split(' ')); // Output: ['Hello', 'World']

// trim(): removes whitespace from both ends of a string.
let str11 = "   Hello World   ";
console.log(str11.trim()); // Output: "Hello World"

let str12a = "Hello";
let str12b = "World";
console.log(str12a.concat(' ', str12b)); // Output: "Hello World"

// startsWith(): returns true if a string starts with a specified substring.
let str13 = "Hello World";
console.log(str13.startsWith('Hello')); // Output: true

// endsWith(): returns true if a string ends with a specified substring.
let str14 = "Hello World";
console.log(str14.endsWith('World')); // Output: true

// includes(): returns true if a string contains a specified substring.
let str15 = "Hello World";
console.log(str15.includes('o')); // Output: true

// repeat(): returns a new string that contains the original string repeated a specified number of times.
let str16 = "Hello";
console.log(str16.repeat(3)); // Output: "HelloHelloHello"

// toLocaleUpperCase(): returns the string with all characters converted to uppercase, according to the host's current locale.
let str17 = "hello world";
console.log(str17.toLocaleUpperCase()); // Output: "HELLO WORLD"

// toLocaleLowerCase(): returns the string with all characters converted to lowercase, according to the host's current locale.
let str18 = "HELLO WORLD";
console.log(str18.toLocaleLowerCase()); // Output: "hello world"

// constructor: This property returns a reference to the constructor function used to create the string object.
const str19 = new String('Hello, world!');
console.log(str19.constructor); // Output: [Function: String]

// prototype: This property allows you to add properties and methods to all string objects. 
String.prototype.newMethod = function() {
    return 'This is a new method added to all string objects!';
  }
  
const str20 = 'Hello, world!';
console.log(str20.newMethod()); // Output: This is a new method added to all string objects!

// __proto__ is a property of JavaScript objects that allows you to access the prototype of the object. 
// In the case of a string object, __proto__ refers to the prototype object of the String constructor.
const str21 = new String('Hello, world!');
console.log(str21.__proto__); // Output: [String: '']

// Note that the use of __proto__ is discouraged in modern JavaScript code, 
// and it's recommended to use the Object.getPrototypeOf() method instead
const str22 = new String('Hello, world!');
console.log(Object.getPrototypeOf(str22)); // Output: [String: '']

// In JavaScript, you can use the instanceof operator to check if an object is an instance of a given prototype.
const str23 = new String('Hello, world!');

if (str23 instanceof String) {
  console.log('str is an instance of String prototype');
} else {
  console.log('str is not an instance of String prototype');
}

// Both primitives and objects have prototypes in JavaScript. 
// The prototype is an internal property of JavaScript objects that is used to inherit properties and methods from a parent object.

// For primitive values like strings, numbers, and booleans, JavaScript creates temporary wrapper objects when methods or properties are accessed. 
// These wrapper objects have a prototype property that is inherited from the parent object of the corresponding constructor function (String, Number, or Boolean).
const str24 = 'Hello, world!';
console.log(Object.getPrototypeOf(str24)); // Output: [String: '']


// In JavaScript, you can't directly set the prototype of a string primitive value because primitive values are immutable and don't have methods or properties of their own. 
// However, you can set the prototype of a string object by modifying the prototype property of the String constructor function.
function CustomString(value) {
    this.value = value;
  }
  
  CustomString.prototype = Object.create(String.prototype);
  CustomString.prototype.constructor = CustomString;
  
  const str25 = new CustomString('Hello, world!');
  console.log(Object.getPrototypeOf(str25)); // Output: [String: '']
  