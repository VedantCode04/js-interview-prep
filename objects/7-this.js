// "use strict"
console.log(this); // In non-strict mode: global object (window in browsers, global in Node.js)
// In strict mode: undefined inside functions

function demo() {
  // 'this substitution'
  // first it will check if 'this' is null or undefined
  // if yes, then 'this' is replaced with the global object/window
  console.log(this); // In non-strict mode: global object (window). In strict mode: undefined.
}
demo();

const obj = {
  name: "obj1",
  a: function () {
    console.log(this); // 'this' refers to obj, because a() is called as a method of obj
    // 'this.a' will print the method a()
  },
};

// obj.a();

const obj2 = {
  name: "obj2",
  a: function (params) {
    function b() {
      console.log(this); 
      // Function b() is a regular function, not a method of obj2
      // In non-strict mode, 'this' in a regular function defaults to the global object (window)
      // In strict mode, 'this' is undefined
    }
    b(); // Regular function call, not bound to obj2
  },
};

let name = "window object"
const obj3 = {
  name: "obj3",
  a: () => {
    // Arrow function does not have its own 'this'
    // 'this' refers to the enclosing lexical environment (global context here)
    console.log("inside arrow function", this); // Global object (window)
    console.log(this.name); // 'this.name' refers to 'window.name' because 'this' is the global object
  }
}

obj3.a();

const obj4 = {
  name: "obj4",
  a: function () {
    console.log("parent function");
    console.log(this); // 'this' refers to obj4 because a() is called as a method of obj4
    b = () => {
      // Arrow function captures 'this' from its surrounding lexical environment (a())
      console.log("nested arrow function");
      console.log(this); // 'this' refers to obj4, same as the outer function
    }

    b(); // Calls the arrow function which inherits 'this' from 'a'
  }
}

obj4.a();

const obj5 = {
  name: "obj5",
  a: () => {
    console.log("parent arrow function", this); // 'this' refers to global object because a() is an arrow function
    b = () => {
      console.log("nested arrow function", this); // 'this' is also the global object due to lexical scoping
    }
    b(); // Calls the nested arrow function
  }
}

obj5.a();

const obj6 = {
  name: "obj6",
  a: () => {
    console.log("parent arrow function", this); // 'this' refers to the global object because 'a' is an arrow function
    function b() {
      console.log("nested function", this); // Regular function 'b()', so 'this' refers to global object (window)
    }
    b(); // Calls the regular function
  }
}

obj6.a();
