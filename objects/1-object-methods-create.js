// Using Object Literal
// Object literals are a simple and convenient way to create objects. 
// They allow you to define properties and methods directly within the object definition.
const person = {
  firstName: "John", 
  lastName: "Doe",   
  age: 30,           
  "full name": "John Doe", 
  isStudent: false,  
  fullName: function () { 
    return this.firstName + " " + this.lastName;
  },
};

console.log(person); 
console.log(person.firstName); 
console.log(person["age"]);
console.log(person["full name"]); 

// Delete the "full name" property from the person object
delete person["full name"];
console.log("person = ");
console.log(person); 

// Using Constructor Function
// Constructor functions are used to create multiple objects with similar properties and methods.
// They provide a template for creating new objects using the `new` keyword.
function Person(firstname, lastname, age) {
  this.firstName = firstname; 
  this.lastName = lastname;   
  this.age = age;             
}

// Create a new Person object using the constructor function
const person2 = new Person("Vedant", "Patel", "21");

console.log(person2);


delete person2.firstName;
console.log(person2); 

// Modify the firstName property in person2 object
person2.firstName = "ABC";
console.log(person2); // Logs the updated person2 object with the new firstName value

// Using new Object()
// `new Object()` creates a new object. When passed an existing object, it references that object.
// This is different from cloning as it does not create a copy but rather a reference to the original object.
console.log("using new Object");
const person3 = new Object(person2); 
console.log(person3); 
person3.firstName = "test"; // Modifies the firstName property in both person2 and person3
console.log(person3 === person2); // true: person3 and person2 refer to the same object
console.log("person2= ");
console.log(person2); // Logs person2 showing the same firstName property change as person3

// Create a new, empty object using new Object()
const person4 = new Object(); // Creates a new empty object

person4.firstName = "Pujan"; // Adds a new property firstName to person4
person4.lastName = "Patel";  // Adds a new property lastName to person4

console.log(person4); // Logs person4 with its new properties

// Using Object.create
// `Object.create()` creates a new object with a specified prototype object. The new object inherits properties from the prototype.
const person5 = Object.create(person4);

console.log(person5); // Logs person5, which inherits properties from person4
console.log(person5.firstName); // Logs "Pujan", inherited from person4
console.log(person5 == person4); // false: person5 is not the same as person4, but it inherits from it

// Using Object.assign
// `Object.assign()` copies properties from one or more source objects to a target object. It returns the target object.
const source1 = { key1: "value1" };
const source2 = { key2: "value2" };
const objAssign = Object.assign({}, source1, source2); // Creates a new object and copies properties from source1 and source2
console.log("assign");
console.log(objAssign); // Logs the new object with combined properties from source1 and source2

// Using Factory Function
// Factory functions return new objects each time they are called. They are used to create objects with similar structures.
function createObject(key1, key2) {
  return {
    key1: key1, // Property with value passed as argument
    key2: key2, // Property with value passed as argument
  };
}
const objFactory = createObject("value1", "value2");
console.log("factory");
console.log(objFactory); // Logs the new object created by the factory function
