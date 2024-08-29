// Creating an object using object literal syntax
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York'
  }
};

// Accessing object properties using dot notation
// Dot notation is straightforward and commonly used to access properties.
console.log(person.firstName); // Output: 'John'
console.log(person.age);       // Output: 30

// Accessing object properties using bracket notation
// Bracket notation is useful when property names are dynamic or have special characters.
console.log(person['lastName']); // Output: 'Doe'

// Using a variable to access a property via bracket notation
const prop = 'age';
console.log(person[prop]); // Output: 30

// Accessing nested object properties
// You can access properties of nested objects using a chain of dot or bracket notations.
console.log(person.address.city); // Output: 'New York'

// Optional chaining (?.) for safe property access
// Optional chaining prevents errors when trying to access properties of undefined or null objects.
console.log(person.address?.postalCode); // Output: undefined
// If 'postalCode' doesn’t exist, it returns 'undefined' instead of throwing an error.

// Modifying existing properties
// You can change the value of existing properties by assigning a new value.
person.age = 31;
console.log(person.age); // Output: 31

// Adding new properties to an object
// Properties can be added dynamically after the object is created.
person.email = 'john.doe@example.com';
console.log(person.email); // Output: 'john.doe@example.com'

// Deleting properties from an object
// The 'delete' operator removes a specific property from the object.
delete person.address.street;
console.log(person.address); // Output: { city: 'New York' }

// After deletion, 'street' no longer exists in the 'address' object.

// Attempting to delete the entire object using 'delete' (incorrect usage)
// The following will not delete the 'person' object but might mistakenly be assumed to:
delete person; 
console.log(person); // Output: Object still exists, 'delete' doesn't remove entire objects.
