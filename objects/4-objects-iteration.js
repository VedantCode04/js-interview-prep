const person = {
  name: "Vedant",
  age: 21,
  skills: ["web developer", "software developer"],
};

// Loop through each key in the person object using Object.keys() and forEach
// Object.keys(person) returns an array of the object's own keys: ["name", "age", "skills"]
Object.keys(person).forEach((key) => {
  console.log(key, " ", person[key]);
});
console.log();

// Loop through each key in the person object using a for...in loop
// This loop iterates over all enumerable properties, including inherited ones (if any)
for (key in person) {
  console.log(key, " ", person[key]);
}
console.log();

// Create a new object (indian) that inherits from person
// The indian object will have its own property (isSmart) and also inherit properties from person
const indian = Object.create(person);
indian.isSmart = true;

// Loop through each key in the indian object using a for...in loop
// This loop will iterate over both own and inherited properties
for (key in indian) {
  // hasOwnProperty ensures that only the indian object's own properties are logged
  // Inherited properties from person (name, age, skills) will be skipped
  if (indian.hasOwnProperty(key)) {
    console.log(key, " ", indian[key]);
  }
}

// Loop through the own properties of indian using Object.entries() and for...of
// Object.entries(indian) returns an array of key-value pairs of the indian object's own properties
for (const [key, value] of Object.entries(indian)) {
  // Logs each key-value pair of the indian object's own properties
  console.log(key, " ", value);
}
