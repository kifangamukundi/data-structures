// Regular expressions are a powerful tool for manipulating text, allowing you to search for patterns in strings, replace text, and more.

// Creating a RegExp object:
// You can create a RegExp object in two ways: 
// using a regular expression literal or 
let regex = /pattern/;

// using the RegExp() constructor.
let regex2 = new RegExp("pattern");

// Matching text:
// You can use the test() method of the RegExp object to test whether a string matches a pattern. 
// This method returns a boolean value indicating whether the pattern was found in the string.
let regex3 = /hello/;
console.log(regex3.test("hello world")); // output: true
console.log(regex3.test("goodbye")); // output: false

// Matching multiple occurrences:
// To match multiple occurrences of a pattern, you can use the g flag in your regular expression. 
// This flag indicates that the search should be global, and not stop after the first match.
let regex4 = /hello/g;
console.log("hello world".match(regex4)); // output: ["hello"]
console.log("hello hello world".match(regex4)); // output: ["hello", "hello"]

// Replacing text:
// You can use the replace() method of the string object to replace text that matches a pattern with a new string.
let str = "hello world";
let regex5 = /hello/;
console.log(str.replace(regex5, "goodbye")); // output: "goodbye world"

// Matching with capture groups:
// You can use parentheses in your regular expression to define capture groups. 
// This allows you to extract specific parts of the matched string.
let str2 = "John Doe";
let regex6 = /(\w+)\s(\w+)/;
let result = regex6.exec(str2);
console.log(result[0]); // output: "John Doe"
console.log(result[1]); // output: "John"
console.log(result[2]); // output: "Doe"

// Matching with character classes:
// You can use character classes to match a specific set of characters in your regular expression. 
// For example, the \d character class matches any digit character.
let regex7 = /\d+/;
console.log(regex7.test("123")); // output: true
console.log(regex7.test("abc")); // output: false

// Matching with quantifiers:
// You can use quantifiers to specify how many times a pattern should match. 
// For example, the + quantifier matches one or more occurrences of the preceding pattern.
let regex8 = /ab+/;
console.log(regex8.test("ab")); // output: true
console.log(regex8.test("a")); // output: false
console.log(regex8.test("abb")); // output: true

// Matching with alternation:
// You can use the | character to match one of several possible patterns. 
// For example, the pattern a|b matches either "a" or "b".
let regex9 = /dog|cat/;
console.log(regex9.test("dog")); // output: true
console.log(regex9.test("cat")); // output: true
console.log(regex9.test("bird")); // output: false

// Matching with anchors:
// You can use anchors to match a pattern at the beginning or end of a string. 
// For example, the ^ anchor matches the beginning of a string, and the $ anchor matches the end of a string.
let regex10 = /^hello/;
console.log(regex10.test("hello world")); // output: true
console.log(regex10.test("goodbye")); // output: false

// JavaScript provides several methods for working with regular expressions:

// test(): Tests whether a string matches a pattern. Returns a boolean value.
let regex11 = /hello/;
console.log(regex11.test("hello world")); // output: true
console.log(regex11.test("goodbye")); // output: false

// exec(): Searches a string for a pattern and returns an array containing information about the match. 
// Returns null if no match is found.
let str3 = "John Doe";
let regex12 = /(\w+)\s(\w+)/;
let result2 = regex12.exec(str3);
console.log(result2[0]); // output: "John Doe"
console.log(result2[1]); // output: "John"
console.log(result2[2]); // output: "Doe"

// match(): Searches a string for a pattern and returns an array containing the matched substrings. 
// If the global flag g is used, returns an array of all matches.
let str4 = "The quick brown fox jumps over the lazy dog.";
let regex13 = /the/gi;
let result3 = str4.match(regex13);
console.log(result3); // output: ["The", "the"]

// replace(): Searches a string for a pattern and replaces matched substrings with a new substring.
let str5 = "Hello world";
let regex14 = /world/;
let newStr = str5.replace(regex14, "Universe");
console.log(newStr); // output: "Hello Universe"

// search(): Searches a string for a pattern and returns the index of the first match. 
// Returns -1 if no match is found.
let str6 = "The quick brown fox jumps over the lazy dog.";
let regex15 = /the/i;
let result4 = str6.search(regex15);
console.log(result4); // output: 0

// split(): Splits a string into an array of substrings based on a specified pattern.
let str7 = "The quick brown fox jumps over the lazy dog.";
let regex16 = /\s+/;
let result5 = str7.split(regex16);
console.log(result5); // output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

// toString(): Returns a string representation of a regular expression.
let regex17 = /hello/;
console.log(regex17.toString()); // output: "/hello/"

// Some of the most commonly used regular expressions include:
// Matching URLs: 
// Regular expressions can be used to match URLs in strings, making it easy to extract links from web pages or other documents. 
// Matches URLs that start with "http://" or "https://" followed by one or more non-space characters.
let regex18 = /https?:\/\/\S+/;

// Matching email addresses: 
// Regular expressions can be used to match email addresses in strings, making it easy to validate user input or extract email addresses from documents. 
// Matches valid email addresses that contain only letters, numbers, and certain special characters.
let regex19 =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;

// Matching phone numbers: 
// Regular expressions can be used to match phone numbers in strings, making it easy to validate user input or extract phone numbers from documents. 
// Matches phone numbers in the format XXX-XXX-XXXX or XXX.XXX.XXXX.
let regex20 =  /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/; 

// Matching dates: 
// Regular expressions can be used to match dates in strings, making it easy to extract dates from documents or validate user input. 
// Matches dates in the format YYYY-MM-DD.
let regex21 = /^\d{4}-\d{2}-\d{2}$/;

// Matching HTML tags: 
// Regular expressions can be used to match HTML tags in strings, making it easy to extract or modify HTML elements in web pages or other documents. 
// Matches any HTML tag and can be used to remove or replace tags in a document.
let regex22 = /<[^>]+>/g;

// Matching and replacing text: 
// Regular expressions can be used to match and replace text in strings, making it easy to modify or manipulate large amounts of text. 
// Matches two words separated by a space, and can be used with the replace() method to swap the order of the words.
let regex23 = /(\w+)\s(\w+)/;

// Matching specific characters or patterns: 
// Regular expressions can be used to match specific characters or patterns in strings, making it easy to extract or manipulate specific parts of a text. 
// Matches any vowel in a string, and can be used to count the number of vowels in a text.
let regex24 = /[aeiou]/;

// Validating user input: 
// Regular expressions can be used to validate user input, ensuring that data entered by users meets certain requirements or constraints. 
// Can be used to validate that a user has entered a valid five-digit ZIP code.
let regex25 = /^\d{5}$/;

// Parsing text data: 
// Regular expressions can be used to parse text data, making it easy to extract structured data from unstructured text. 
// Can be used to extract dates in the format DD-MM-YYYY.
let regex26 = /(\d{2})-(\d{2})-(\d{4})/;

// Slugs usually contain only lowercase letters, numbers, and hyphens ("-"), and are often generated automatically based on the title or name of the resource.
let regex27 = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// To generate a slug from a title using the regular expression
function generateSlug(title) {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return slug;
}
const title = 'My Awesome Blog Post';
const slug = generateSlug(title);
console.log(slug);

// This regular expression matches any string that is between 1 and 60 characters long.
const title2 = "My Awesome Blog Post";
let regex28 = /^(.{1,60})$/;

if (regex28.test(title2)) {
  console.log("Title is valid");
} else {
  console.log("Title is too long");
}

