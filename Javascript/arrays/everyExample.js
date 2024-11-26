// every() - returns true if all elements of an array pass a test defined by a function

// every() is a built-in method in JavaScript that checks if every element in an array satisfies a condition. 
// We use every() when we want to test whether all the elements in an array meet a certain condition.

// Here are some scenarios where every() can be used:

// Validation: If we want to validate that all the elements in an array meet a certain condition (such as checking that all the input fields in a form are filled out), 
// we can use every() to test whether all the elements meet the condition.

const fields = ["name", "email", "password"];

const allFieldsFilledOut = fields.every((field) => {
  return field !== "";
});

console.log(allFieldsFilledOut); // Output: true

// In this example, every() is used to test whether all the elements in the fields array are filled out (i.e., not empty). 
// The callback function returns false for the first empty field it encounters, which causes every() to return false.

// Access control: If we want to control access to certain resources based on some condition (such as checking whether all the required permissions are present), 
// we can use every() to check whether all the required conditions are met.

const userPermissions = ["read", "write", "delete"];
const requiredPermissions = ["read", "write"];

const hasAllPermissions = requiredPermissions.every((permission) => {
  return userPermissions.includes(permission);
});

console.log(hasAllPermissions); // Output: true

// In this example, every() is used to check whether the user has all the required permissions to access a resource. 
// The callback function returns false for the first missing permission it encounters, which causes every() to return false.

// In general, every() is useful whenever we need to test whether all the elements in an array meet a certain condition.

// Note that every() returns true if all the elements in the array meet the condition, or false if at least one element does not meet the condition.