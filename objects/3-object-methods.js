const car = {
    wheels: 4,
    steering: 1
}

const tata = Object.create(car)
// console.log(tata == car);
tata.brand = "Tata motors"
tata.price = 40000
// console.log(tata);

// Object.keys() - returns an array of the object's own enumerable property names, 
// excluding those inherited through the prototype chain.

console.log(Object.keys(car)); // Outputs: ['wheels', 'steering']
console.log(Object.keys(tata)); // Outputs: ['brand', 'price'] (doesn't include 'wheels' or 'steering' as they're inherited)

// Object.values() - returns an array containing the object's own enumerable property values,
// similarly excluding those inherited through the prototype chain.

console.log(Object.values(car)); // Outputs: [4, 1] (values of the 'wheels' and 'steering' properties)
console.log(Object.values(tata)); // Outputs: ['Tata motors', 40000] (only the own properties 'brand' and 'price')

// Object.entries() - Returns an array of the object's own enumerable property [key, value] pairs,
// again excluding inherited properties. The result is an array of arrays, where each inner array 
// contains the key and the corresponding value.

console.log(Object.entries(car)); // Outputs: [['wheels', 4], ['steering', 1]]
console.log(Object.entries(tata)); // Outputs: [['brand', 'Tata motors'], ['price', 40000]]

// You can also loop through the object's own properties using a for...of loop,
// which allows you to destructure the key-value pairs returned by Object.entries().

for(const [key, value] of Object.entries(car)){
    console.log("Key = ", key, " Value = ", value)
}

// Object.hasOwn() - Checks if the object has the specified property as its own,
// rather than inheriting it from its prototype. It returns true if the property 
// exists directly on the object, otherwise false.

console.log(Object.hasOwn(car, "wheels")); // true, 'wheels' is car's own property
console.log(Object.hasOwn(tata, "wheels")); // false, 'wheels' is inherited from car, not an own property of tata
console.log(Object.hasOwn(tata, "brand")); // true, 'brand' is tata's own property

// Object.getOwnPropertyNames() - Returns an array of all own properties' names 
// (including non-enumerable ones) of an object, but still excludes inherited properties.

console.log(Object.getOwnPropertyNames(car)); // Outputs: ['wheels', 'steering']
console.log(Object.getOwnPropertyNames(tata)); // Outputs: ['brand', 'price']

// Object.getOwnPropertyDescriptors() - Returns an object containing all own property descriptors 
// (metadata about each property) for the object's own properties, such as their value, 
// whether they are writable, enumerable, and configurable.

console.log(Object.getOwnPropertyDescriptors(tata)); 
// Outputs: {
//   brand: {value: 'Tata motors', writable: true, enumerable: true, configurable: true},
//   price: {value: 40000, writable: true, enumerable: true, configurable: true}
// }

console.log(Object.getOwnPropertyDescriptors(car)); 
// Outputs: {
//   wheels: {value: 4, writable: true, enumerable: true, configurable: true},
//   steering: {value: 1, writable: true, enumerable: true, configurable: true}
// }

// Object.getPrototypeOf() - Retrieves the prototype (i.e., the internal [[Prototype]]) 
// of the specified object, which is the object it inherits properties from.

console.log(Object.getPrototypeOf(car)); // Outputs: null, since car was not created with any prototype (i.e., it’s a base object)
console.log(Object.getPrototypeOf(tata)); // Outputs: { wheels: 4, steering: 1 }, which is the car object, as tata inherits from car

// Object.setPrototypeOf() - Sets the prototype (i.e., the internal [[Prototype]]) of a specified object 
// to another object or null. This allows changing the inheritance chain of the object.

const truck = {wheels: 8, steering: 1 }
Object.setPrototypeOf(tata, truck)
console.log(Object.getPrototypeOf(tata)); // Outputs: { wheels: 8, steering: 1 }, now tata inherits from truck instead of car

// Object.seal() - Seals an object, preventing new properties from being added to it and 
// marking all existing properties as non-configurable. Existing properties can still be modified.

const temp = {
    name: "vedant",
    age: 20
}

Object.seal(temp)
temp.gender = "male" // This won't be added to the temp object as it's sealed, so new properties cannot be added.
console.log(temp); // Outputs: { name: 'vedant', age: 20 }, gender was not added.
delete temp.name // This won't delete the 'name' property as sealed objects cannot have properties removed.
console.log(temp); // Outputs: { name: 'vedant', age: 20 }
temp.age = 30 // This will successfully update the 'age' property as sealed objects can still have their existing properties modified.
console.log(temp); // Outputs: { name: 'vedant', age: 30 }

// Object.freeze() - Freezes an object, making it immutable. No changes to the object 
// are possible: you cannot add new properties, delete existing ones, or modify the values of properties.

Object.freeze(temp) // Now temp is completely immutable
temp.age = 40 // This will have no effect, as the object is frozen, so properties cannot be modified.
console.log(temp); // Outputs: { name: 'vedant', age: 30 }, the 'age' value remains unchanged.
