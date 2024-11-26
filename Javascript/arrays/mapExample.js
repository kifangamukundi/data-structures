// map() - creates a new array by calling a function on each element of an existing array

// map() is a higher-order function in JavaScript that creates a new array by calling a function on each element of an existing array. 
// We use map() when we want to transform each element of an array based on a certain criteria.

// Here are some scenarios where map() can be used:

// Transforming data: If we have an array of data that needs to be transformed in some way, 
// we can use map() to create a new array with the transformed data. 
// For example, we can use map() to convert an array of Fahrenheit temperatures to Celsius temperatures.

const fahrenheitTemperatures = [32, 68, 86, 104];
const celsiusTemperatures = fahrenheitTemperatures.map(temp => (temp - 32) * 5/9);
console.log(celsiusTemperatures); // Output: [0, 20, 30, 40]


// Formatting data: If we have an array of data that needs to be formatted in a specific way, 
// we can use map() to create a new array with the formatted data. 
// For example, we can use map() to format an array of dates in a specific date format.

const dates = ['2022-01-01', '2022-02-01', '2022-03-01'];
const formattedDates = dates.map(date => new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
console.log(formattedDates); // Output: ["January 1, 2022", "February 1, 2022", "March 1, 2022"]

// Extracting data: If we have an array of objects and we want to extract a specific property of each object, 
// we can use map() to create a new array with the extracted data. 
// For example, we can use map() to extract the names of all the users in an array of user objects.

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  const userNames = users.map(user => user.name);
  console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]
  
// Rendering lists: If we want to render a list of elements in a React or Vue component, 
// we can use map() to create an array of elements based on the data that we want to render.
const items = ['item1', 'item2', 'item3'];
const itemList = items.map(item => <li key={item}>{item}</li>);
// In a React component:
return <ul>{itemList}</ul>;

// Output: <ul><li>item1</li><li>item2</li><li>item3</li></ul>

// In each of these examples, map() is used to create a new array based on the data in an existing array. 
// The output of map() is a new array that can be used for further processing or rendering in a UI.

// In general, map() is useful whenever we need to create a new array by transforming, 
// formatting, or extracting data from an existing array.
