# JavaScript Promises: Theory and Interview Questions

## Introduction

JavaScript Promises are essential for handling asynchronous operations in a clean and manageable way. They provide a mechanism for dealing with asynchronous tasks and their outcomes. This document provides detailed explanations for key concepts and interview questions related to JavaScript promises.

## Key Concepts

### 1. What is a JavaScript Promise?

A JavaScript Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises provide a way to handle asynchronous code more effectively compared to traditional callback-based approaches.

- **Pending**: This is the initial state of a promise. The promise is neither fulfilled nor rejected. It remains in this state until the asynchronous operation completes.
- **Fulfilled**: This state indicates that the asynchronous operation completed successfully. The promise is resolved with a value.
- **Rejected**: This state indicates that the asynchronous operation failed. The promise is rejected with a reason or error.

### 2. How do you create a Promise?

A promise is created using the `new Promise` constructor. This constructor takes a function with two parameters: `resolve` and `reject`. The function executes an asynchronous operation and calls `resolve` if the operation is successful or `reject` if it fails.

- **`resolve(value)`**: This function is called when the asynchronous operation is successful. It changes the promise's state from pending to fulfilled and provides a result.
- **`reject(reason)`**: This function is called when the asynchronous operation fails. It changes the promise's state from pending to rejected and provides an error or reason for the failure.

### 3. What are `.then()`, `.catch()`, and `.finally()` used for?

- **`.then(onFulfilled, onRejected)`**: This method is used to attach fulfillment and rejection handlers to a promise. It returns a new promise, allowing for chaining. If the promise is fulfilled, the `onFulfilled` function is executed. If it is rejected, the `onRejected` function is executed.

- **`.catch(onRejected)`**: This method is used to attach a rejection handler to the promise. It is a shorthand for `.then(null, onRejected)`. It returns a new promise that resolves to the return value of the `onRejected` handler if the promise is rejected.

- **`.finally(onFinally)`**: This method is used to execute a final block of code after the promise has been settled, regardless of its outcome (fulfilled or rejected). It is often used for cleanup activities.

### 4. How does promise chaining work?

Promise chaining allows you to sequence multiple asynchronous operations. Each `.then()` method returns a new promise, which can be used to chain further `.then()` calls.

- When a `.then()` method is executed, it receives the value returned from the previous `.then()` in the chain.
- If a `.then()` method returns a value, that value is passed to the next `.then()` in the chain.
- If a `.then()` method returns another promise, the next `.then()` waits for this promise to settle before executing.

### 5. What happens if a `.then()` handler returns a promise?

If a `.then()` handler returns a promise, the next `.then()` in the chain will wait for this promise to settle. This behavior allows for chaining multiple asynchronous operations, where each step depends on the result of the previous operation.

- **Returning a Promise**: When a `.then()` returns a promise, the subsequent `.then()` in the chain will only execute once the returned promise has been resolved or rejected.

### 6. How is error handling done in promises?

Error handling in promises is done through `.catch()` methods or by using the error handling parameter in `.then()`.

- **Error Propagation**: If a `.then()` handler throws an error or returns a promise that rejects, the error is propagated to the nearest `.catch()` handler in the chain.
- **Placement of `.catch()`**: A `.catch()` method can be placed anywhere in the promise chain to catch errors from any previous `.then()`.

### 7. What are Promise.all and Promise.race?

- **Promise.all**: This method takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved or rejects if any one of the promises rejects. It is useful for running multiple asynchronous operations in parallel and waiting for all to complete.

- **Promise.race**: This method takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. It is useful for reacting to the first completed promise among several.

### 8. What are the states of a Promise?

- **Pending**: The promise is in its initial state. It has not yet been fulfilled or rejected.
- **Fulfilled**: The promise has been successfully resolved with a value.
- **Rejected**: The promise has been rejected with a reason or error.

Understanding these states helps in explaining how promises transition from one state to another and how handlers react to these changes.

### 9. What is the difference between microtasks and macrotasks?

- **Microtasks**: These are tasks that are handled immediately after the currently executing script and before the next macrotask. Examples include promise callbacks and `MutationObserver` callbacks.

- **Macrotasks**: These include tasks like `setTimeout`, `setInterval`, and I/O operations. Macrotasks are executed after the microtasks have been processed.

### 10. What are best practices for error handling in promises?

- **Centralized Error Handling**: Using a single `.catch()` at the end of a promise chain is often preferable to having multiple `.catch()` blocks. This centralizes error handling and ensures consistency.

- **Error Handling in Nested Chains**: Ensure that errors in nested promise chains are handled properly. Consider where to place `.catch()` to catch errors effectively and avoid unhandled promise rejections.

Understanding these concepts and practices is crucial for effectively managing asynchronous operations and writing maintainable, reliable code using promises in JavaScript.

# Additional JavaScript Promises Interview Questions

## 11. How does the `Promise.resolve()` method work?

- **`Promise.resolve(value)`**: Returns a promise that is resolved with the given value. If the value is a promise, it returns that promise; otherwise, it returns a new promise that resolves with the provided value.
  - **Example**: 
    ```javascript
    Promise.resolve(42).then(value => console.log(value)); // Logs: 42
    ```

## 12. How does the `Promise.reject()` method work?

- **`Promise.reject(reason)`**: Returns a promise that is rejected with the given reason or error. This is useful for returning a rejected promise from a function that returns a promise.
  - **Example**: 
    ```javascript
    Promise.reject(new Error('Something went wrong')).catch(error => console.log(error.message)); // Logs: Something went wrong
    ```

## 13. What is the `Promise.allSettled()` method and how is it different from `Promise.all()`?

- **`Promise.allSettled(promises)`**: Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.
  - **Difference from `Promise.all`**: Unlike `Promise.all()`, which rejects as soon as one promise in the array rejects, `Promise.allSettled()` will always resolve, providing information about all promises regardless of their outcome.
  - **Example**: 
    ```javascript
    Promise.allSettled([Promise.resolve(1), Promise.reject('error')])
      .then(results => console.log(results)); 
    // Logs: [{ status: 'fulfilled', value: 1 }, { status: 'rejected', reason: 'error' }]
    ```

## 14. What is the `Promise.any()` method?

- **`Promise.any(promises)`**: Returns a promise that resolves as soon as one of the given promises resolves, or rejects if no promises in the array resolve (i.e., if all are rejected).
  - **Example**: 
    ```javascript
    Promise.any([Promise.reject('error1'), Promise.resolve('success')])
      .then(result => console.log(result)); // Logs: success
    ```

## 15. Explain the concept of “Promise chaining.”

- **Promise Chaining**: Involves linking multiple `.then()` methods together to perform a sequence of asynchronous operations. Each `.then()` returns a new promise, allowing subsequent `.then()` calls to be executed in sequence. If a `.then()` returns a promise, the next `.then()` waits for this promise to settle before executing.
  - **Example**: 
    ```javascript
    Promise.resolve(1)
      .then(value => value + 1)
      .then(value => value * 2)
      .then(result => console.log(result)); // Logs: 4
    ```

## 16. What is the `Promise.race()` method?

- **`Promise.race(promises)`**: Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.
  - **Example**: 
    ```javascript
    Promise.race([Promise.resolve('fast'), new Promise(resolve => setTimeout(resolve, 100, 'slow'))])
      .then(result => console.log(result)); // Logs: fast
    ```

## 17. How do you handle multiple asynchronous operations in parallel?

- **`Promise.all()`**: Useful for running multiple promises in parallel and waiting for all of them to complete. It resolves when all the promises in the array have resolved, or rejects if any promise rejects.
  - **Example**: 
    ```javascript
    Promise.all([fetch(url1), fetch(url2)])
      .then(([response1, response2]) => {
        // Handle responses
      });
    ```

## 18. What is the difference between `Promise.all()` and `Promise.race()`?

- **`Promise.all()`**: Waits for all promises to resolve or any one to reject. Useful when you need all asynchronous operations to complete.
- **`Promise.race()`**: Returns a promise that resolves or rejects as soon as one of the promises resolves or rejects. Useful for reacting to the fastest promise.

## 19. How do you handle errors in nested promise chains?

- **Handling Errors in Nested Chains**: Ensure that errors in nested promise chains are caught properly. Placing `.catch()` at the end of the chain or within specific `.then()` blocks can help manage errors from various levels of the chain.
  - **Example**: 
    ```javascript
    getData()
      .then(result => process(result))
      .catch(error => console.error('Error:', error)); // Handles errors from any part of the chain
    ```

## 20. What are the differences between microtasks and macrotasks in the context of promises?

- **Microtasks**: Include tasks such as promise callbacks and `MutationObserver` callbacks. These are executed after the currently executing script and before the next macrotask.
- **Macrotasks**: Include tasks like `setTimeout`, `setInterval`, and I/O operations. These are executed after microtasks have been processed.
  - **Example**: 
    ```javascript
    console.log('Script start');
    Promise.resolve().then(() => console.log('Promise resolved'));
    setTimeout(() => console.log('Timeout'), 0);
    console.log('Script end');
    // Logs: Script start, Script end, Promise resolved, Timeout
    ```

## Conclusion

Understanding these concepts and their applications is crucial for mastering asynchronous operations in JavaScript. Promises provide a powerful way to manage async code, and knowing how to handle various scenarios will make you well-prepared for technical interviews and real-world programming challenges.

