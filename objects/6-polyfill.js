// Polyfill for Array.prototype.forEach

/**
 * Polyfill for Array.prototype.forEach
 *
 * The forEach method executes a provided function once for each array element.
 * It allows iteration over elements without using a loop directly.
 *
 * Interview Question: What is a polyfill, and why would you write one for `forEach`?
 * Answer: A polyfill is a piece of code that adds support for features not natively implemented by the environment.
 * We might write a polyfill for `forEach` to ensure compatibility in older environments where `forEach` is not available.
 */
Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.myForEach((i) => {
  console.log(i);
});

// Polyfill for Array.prototype.map

/**
 * Polyfill for Array.prototype.map
 *
 * The map method creates a new array with the results of calling a provided function on every element in the calling array.
 * It does not mutate the original array.
 *
 * Interview Question: How does `map` differ from `forEach`?
 * Answer: `map` creates and returns a new array based on the results of the callback function, while `forEach` simply iterates over elements and does not return anything.
 */
Array.prototype.myMap = function (callback) {
  let arr = [];

  for (let index = 0; index < this.length; index++) {
    let data = callback(this[index], index, this);
    arr.push(data);
  }

  return arr;
};

const arr2 = [1, 2, 3, 4];
let newArr = arr2.myMap((val) => val * 2);
console.log(newArr);

// Polyfill for Array.prototype.filter

/**
 * Polyfill for Array.prototype.filter
 *
 * The filter method creates a new array with all elements that pass the test implemented by the provided function.
 * It does not change the original array.
 *
 * Interview Question: What is the difference between `filter` and `map`?
 * Answer: `filter` creates a new array with only the elements that pass the condition specified by the callback, whereas `map` creates a new array with transformed elements based on the callback function.
 */
Array.prototype.myFilter = function (callback) {
  let arr = [];

  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      arr.push(this[index]);
    }
  }

  return arr;
};

const arr3 = [1, 2, 3, 4, 5, 6, 7];

newArr = arr3.myFilter((val) => val % 2 == 0);
console.log(newArr);

// Polyfill for Array.prototype.reduce

/**
 * Polyfill for Array.prototype.reduce
 *
 * The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * It can be used for accumulating values, such as summing elements or concatenating arrays.
 *
 * Interview Question: How does `reduce` work, and how is the initial value handled?
 * Answer: `reduce` iterates over the array, applying the reducer function to accumulate a result. The initial value is optional; if not provided, the first element of the array is used as the initial accumulator value.
 */
Array.prototype.myReduce = function (callback, initialState) {
  // Handling the case when the initial value is not provided
  let acc = initialState === undefined ? this[0] : initialState;
  let startIndex = initialState === undefined ? 1 : 0;

  for (let index = startIndex; index < this.length; index++) {
    acc = callback(acc, this[index], index, this);
  }

  return acc;
};

const data = [0, 1, 2, 3, 4].myReduce(function (acc, value) {
  acc[value] = 1;
  return acc;
}, {});

console.table(data);

// 1. What is a polyfill?
// Answer: A polyfill is a piece of code (usually JavaScript) 
//   used to provide modern functionality on older browsers that do not 
//     natively support it. It "fills in" the gaps in the browser's implementation.
// 2. Why would you write a polyfill?
// Answer: Polyfills are written to ensure that a web application works correctly
//     across different browsers, especially older ones that may lack support for newer JavaScript features.
// 3. What does a polyfill for Array.prototype.map do?
// Answer: A polyfill for Array.prototype.map simulates the behavior of the 
//       map method, which creates a new array by applying a function to each element of the original array.
// 4. Can you explain the key differences between forEach, map, and reduce?
// Answer:
// forEach: Iterates over each element of an array
//   and executes a callback function. It does not return a new array or alter the original array.
// map: Similar to forEach, but it returns a new array containing the results of 
//     applying the callback function to each element.
// reduce: Reduces an array to a single value by executing a callback function that accumulates a result, passing the result of each iteration as the accumulator to the next.
// 5. What happens if you don't return the accumulator in a reduce polyfill?
// Answer: If you don't return the accumulator from the callback in a reduce polyfill, 
//   the accumulator won't be updated correctly for the next iteration, leading to incorrect results.
// 6. How would you write a polyfill for Array.prototype.filter?
// Answer: A polyfill for Array.prototype.filter iterates over each element in the array, 
//   applies a callback function that returns a boolean, and creates a new array containing only the elements for which the callback returned true.
// 7. What are some common issues to watch out for when writing polyfills?
// Answer:
// Performance: Ensure that the polyfill does not introduce significant performance overhead.
// Edge Cases: Handle edge cases such as empty arrays, non-array inputs, or undefined initial values in reduce.
// Browser Compatibility: Test the polyfill across different browsers and environments to ensure it works as intended.
// 8. How would you polyfill Array.prototype.forEach?
// Answer: A polyfill for Array.prototype.forEach would iterate over each element 
//   of the array and execute a provided callback function for each element without returning a new array.
// 9. What are some advantages of using native methods over polyfills?
// Answer:
// Performance: Native methods are generally more optimized by the JavaScript engine and faster than polyfills.
// Maintenance: Relying on native methods reduces the need to maintain custom code.
// Consistency: Native methods behave consistently across environments, whereas polyfills might have subtle differences or bugs.
