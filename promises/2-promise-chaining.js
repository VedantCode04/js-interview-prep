// Function to create a promise that resolves if the number is even, otherwise rejects
function getEven(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /
      if (num % 2 === 0) {
        resolve(num);
      } else {
        reject(num); 
      }
    }, delay); 
  });
}

// Start of promise chaining
getEven(6, 2000) 
  .then((data) => {
    // Executed when the first promise is fulfilled
    console.log(data, " is even"); // Logs "6 is even"
    return getEven(8, 1000); // Returns a new promise from getEven with 8 and 1000 ms delay
  })
  .then((data) => {
    // Executed when the second promise is fulfilled
    console.log(data, " is even"); // Logs "8 is even"
    return getEven(9, 2000); // Returns a new promise from getEven with 9 and 2000 ms delay
  })
  .catch((err) => {
    // Handles any errors from the promises in the chain
    console.log("error = is not even", err); // Logs errors if any promise is rejected
  });

// A new promise chain to demonstrate execution and ordering
new Promise((resolve, reject) => {
  resolve(); // Immediately resolves the promise
}).then(() => {
  // First .then() schedules the first setTimeout
  setTimeout(() => {
    console.log("1st then"); // Logs "1st then" after the current call stack is cleared
  }, 0);
}).then(() => {
  // Second .then() schedules the second setTimeout
  setTimeout(() => {
    console.log("2nd then"); // Logs "2nd then" after 3000 milliseconds
  }, 3000);
}).then(() => {
  // Third .then() schedules the third setTimeout
  setTimeout(() => {
    console.log("3rd then"); // Logs "3rd then" after 1000 milliseconds, but executes after "2nd then"
  }, 1000);
}).catch((err) => {
  // Catch block to handle errors (not used here)
});

// Theory of Promise Chaining:

// 1. **Promise Creation**:
//    - `new Promise((resolve, reject) => { ... })` creates a promise object representing the eventual completion or failure of an asynchronous operation.

// 2. **Promise Resolution**:
//    - When a promise is resolved (`resolve()`), the next `.then()` in the chain is executed with the resolved value.
//    - If the promise is rejected (`reject()`), the error is passed to the nearest `.catch()` in the chain.

// 3. **Chaining Promises**:
//    - Each `.then()` returns a new promise, allowing for sequential execution. The next `.then()` in the chain receives the resolved value of the previous `.then()`.
//    - **Returning Values**: The returned value from a `.then()` becomes the resolved value of the next `.then()` in the chain.
//    - **Returning Promises**: If a `.then()` returns a promise, the next `.then()` waits for this promise to settle before executing.

// 4. **Error Handling**:
//    - **Error Propagation**: Errors thrown or promises that reject in a `.then()` are caught by the subsequent `.catch()`.
//    - **Placement of `.catch()`**: `.catch()` can be placed anywhere in the chain to handle errors from any previous `.then()`.

// 5. **Promise States**:
//    - **Pending**: The initial state of a promise.
//    - **Fulfilled**: The state when `resolve` is called.
//    - **Rejected**: The state when `reject` is called.
//    - Understanding these states helps explain how promises transition and how handlers react to these changes.

// 6. **Microtasks vs. Macrotasks**:
//    - **Microtasks**: Handled immediately after the currently executing script and before the next macrotask. Promises and `MutationObserver` callbacks are microtasks.
//    - **Macrotasks**: Include `setTimeout`, `setInterval`, and I/O callbacks, executed after microtasks are completed.

// 7. **Promise.all and Promise.race**:
//    - **Promise.all**: Waits for all promises to resolve or for any one to reject. Useful for parallel execution of multiple promises.
//    - **Promise.race**: Resolves or rejects as soon as one of the promises resolves or rejects. Useful for reacting to the first completed promise.

// 8. **Error Handling Best Practices**:
//    - **Centralized Error Handling**: A single `.catch()` at the end of a chain can be more effective than multiple `.catch()` blocks.
//    - **Error Handling in Nested Chains**: Ensure proper handling of errors in nested promise chains and consider where to place `.catch()`.
