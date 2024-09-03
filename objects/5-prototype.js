// JavaScript uses a prototype-based inheritance model, where objects can inherit properties and methods from other objects.
// Every JavaScript object has an internal property called [[Prototype]], which points to another object.
// This 'other' object is known as the prototype, and the original object inherits properties and methods from it.
// The prototype itself can have its own prototype, forming a prototype chain. This chain continues until an object is reached
// whose prototype is null (which is usually Object.prototype, the top-level prototype).

// When you try to access a property or method on an object, JavaScript first looks for it on the object itself.
// If the property or method is not found, it traverses up the prototype chain, looking for it in the prototype object,
// then the prototype's prototype, and so on, until it either finds the property/method or reaches the end of the chain.

// Prototypes are also how JavaScript's built-in objects (like Array, Object, and Function) share common methods.
// For instance, all arrays inherit methods like push() and pop() from Array.prototype.

// By setting one object's prototype to another object (using __proto__ or Object.setPrototypeOf()),
// we can make the first object inherit properties and methods from the second object, effectively extending its behavior.

// Constructor functions in JavaScript (functions used to create objects) also use prototypes.
// When an object is created using a constructor function, it inherits from the constructor's prototype.
// This is why methods and properties added to a constructor's prototype are shared across all instances created by that constructor.

// Understanding prototypes is key to mastering JavaScript, as it forms the foundation of object-oriented programming (OOP) in the language.

// Defining a 'person' object with properties and methods.
const person = {
  name: "Vedant",
  gender: "male",

  // Method to get the name property
  getName: function () {
    console.log(this.name); // 'this' refers to the object that calls the method
  },

  // Method to get the id property
  getId: function () {
    console.log(this.id); // 'this' will refer to the calling object
  },
};

// Creating a 'student' object and setting 'person' as its prototype.
const student = {
  id: 1,
  __proto__: person, // 'person' is set as the prototype of 'student'
};

// Creating a 'degree' object and setting 'student' as its prototype.
const degree = {
  name: "CSE",
  __proto__: student, // 'student' is set as the prototype of 'degree'
};

// Log the student object to see its structure, including the prototype chain.
console.log(student);

// Call getName method on 'student'.
// JavaScript will look for 'name' in 'student' first. If not found, it will search the prototype chain.
student.getName(); // Output: "Vedant"

// Call getId method on 'student'.
// The method is found in 'person', but 'this' refers to 'student', so it logs the 'id' from 'student'.
student.getId(); // Output: 1

// Call getName method on 'degree'.
// The 'name' property in 'degree' overrides the 'name' property in the prototype chain.
degree.getName(); // Output: "CSE"

// Demonstrating built-in prototypes by creating instances of Array, Object, and Function.
const arr = new Array();
const obj = new Object();
const func = new Function();

console.log(arr); // Outputs an empty array.
console.log(obj); // Outputs an empty object.
console.log(func); // Outputs an empty function.

// Constructor function 'Human' with a property 'name'.
function Human(name) {
  this.name = name;
}

// Create an instance of 'Human'.
const person2 = new Human("I'm human");
console.log(person2.name); // Output: "I'm human"

// Override the default prototype of 'Human' with 'person'.
Human.prototype = person; // All instances of 'Human' will now have 'person' as their prototype.

// Create another instance of 'Human' after overriding the prototype.
const person3 = new Human("person3");

// Call getName method on 'person3'.
// Since 'person' is now the prototype, 'getName' is available and will log the name.
person3.getName(); // Output: "person3"

// Log the gender property which is inherited from the 'person' prototype.
console.log(person3.gender); // Output: "male"

// Create an 'animal' object with a 'name' property.
const animal = {
  name: "lion",
};

// Change the prototype of 'person3' to 'animal' using Object.setPrototypeOf.
Object.setPrototypeOf(person3, animal);

console.log("After changing prototype...");

// Log 'person3' to inspect its structure and prototype.
console.log(person3);

// Attempt to call getName method on 'person3'.
// This will throw an error because 'animal' does not have the 'getName' method.
person3.getName(); // Error: person3.getName is not a function
