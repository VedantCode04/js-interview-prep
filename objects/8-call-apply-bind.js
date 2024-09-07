// call(), apply(), and bind() in JavaScript
// These methods are used to control the value of this inside functions and provide flexibility in how functions are invoked.

const student1 = {
  name: "student1",
  getName: function (id, surname) {
    console.log("name = ", this.name, " surname = ", surname);
    
    console.log("id = ", id);
  },
};

student1.getName(10, "patel");

const student2 = {
  name: "student2",
};


// call()
// Purpose: The call() method allows you to invoke a function immediately, 
// with a specified this context and arguments passed individually.
// How it works: You explicitly pass the this value, followed by a list of arguments. 
// It’s useful when you want to borrow a method from one object and use it on another.
console.log("");
console.log("call");
student1.getName.call(student2, 20, "sharma");

// apply()
// Purpose: Similar to call(), apply() also allows you to invoke a function with a 
// specified this context, but it differs in how arguments are passed.
// How it works: Instead of passing arguments individually, you pass them 
// as an array. This can be useful when arguments are already in the form of an array or 
// you want to pass multiple values without explicitly listing them.

console.log("");
console.log("apply");
student1.getName.apply(student2, [20, "sharma"])

// bind()
// Purpose: The bind() method doesn’t invoke the function immediately. 
// Instead, it creates a new function with a specified this context and optional preset arguments.
// How it works: The returned function can be called later, preserving 
// the context and any arguments you passed during its creation. It’s useful for event handling 
// and scenarios where you want to set the context but not call the function immediately.
console.log("");
console.log("bind");
const newGetname = student1.getName.bind(student2);
newGetname(30, "desai")

// newGetname(40, "panchal") // valid

// both are valid code
// const newGetname = student1.getName.bind(student2, 30, "desai");
// newGetname(); "but now you cant override the arguments passed above"
