// Callbacks - Overview

// A callback is a function that is passed as an argument to another function.
// The callback function is usually executed after the completion of a specific task.
// This is particularly useful in asynchronous programming, where tasks like fetching data
// from an API or reading a file may take some time to complete.

// Basic Callback Example

// The 'first' function accepts another function as an argument (callback).
// This callback will be executed after 'first' completes its task.
function first(callback) {
  console.log("First task completed...");
  // After logging the message, the callback function is called.
  callback();
}

// The 'second' function simply logs a message.
// It will serve as the callback for the 'first' function.
function second() {
  console.log("Second task...");
}

// Here, we call the 'first' function and pass 'second' as the callback.
// Once 'first' completes, it will automatically execute 'second'.
first(second);

// Explanation:
// In this example, 'second' is passed to 'first' as a callback.
// The callback ensures that 'second' runs only after 'first' is done.
// This is a typical pattern in asynchronous JavaScript where one task
// should execute only after another completes.

// Callback Hell Example

// Asynchronous Task Example with Nested Callbacks
// When multiple asynchronous tasks depend on each other,
// you may end up with nested callbacks, leading to what's called "callback hell."

// Simulates an asynchronous task with a delay of 1 second
function firstTask(callback) {
  setTimeout(() => {
    console.log("First Task");
    // After the task completes, the callback function is called.
    callback();
  }, 1000); // 1000ms delay
}

// Another asynchronous task, similar to 'firstTask'
function secondTask(callback) {
  setTimeout(() => {
    console.log("Second Task");
    // Calls the next callback after completion
    callback();
  }, 1000);
}

// A third asynchronous task
function thirdTask(callback) {
  setTimeout(() => {
    console.log("Third Task");
    // Calls the final callback after completion
    callback();
  }, 1000);
}

// This is where callback hell begins.
// Each task is nested inside the previous one, making the code harder to read and maintain.
firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      setTimeout(() => {
        console.log("All tasks completed");
      }, 1000);
    });
  });
});

// Explanation:
// This code demonstrates "callback hell" where functions are nested within each other.
// Each task depends on the previous one, creating a deep nesting structure.
// This makes the code difficult to read, understand, and maintain.
// Callback hell is often mitigated using Promises or async/await in modern JavaScript.

// Error Handling in Callbacks

// Error handling in callbacks is typically done by following the "error-first" callback pattern.
// The first argument in the callback is reserved for an error object (or null if no error).

function firstTaskWithError(callback) {
  setTimeout(() => {
    // Simulating an error
    const error =
      Math.random() > 0.7
        ? new Error("Something went wrong in First Task")
        : null;

    if (error) {
      // If there's an error, we pass it as the first argument to the callback
      return callback(error);
    }

    console.log("First Task completed without errors");
    callback(null); // No error, so we pass null as the first argument
  }, 4000);
}

function secondTaskWithError(callback) {
  setTimeout(() => {
    const error =
      Math.random() > 0.7
        ? new Error("Something went wrong in Second Task")
        : null;

    if (error) {
      return callback(error);
    }

    console.log("Second Task completed without errors");
    callback(null);
  }, 4000);
}

function thirdTaskWithError(callback) {
  setTimeout(() => {
    const error =
      Math.random() > 0.7
        ? new Error("Something went wrong in Third Task")
        : null;

    if (error) {
      return callback(error);
    }

    console.log("Third Task completed without errors");
    callback(null);
  }, 4000);
}

// Using error-first callbacks to handle potential errors
firstTaskWithError((err) => {
  if (err) {
    return console.error("Error in First Task:", err);
  }

  secondTaskWithError((err) => {
    if (err) {
      return console.error("Error in Second Task:", err);
    }

    thirdTaskWithError((err) => {
      if (err) {
        return console.error("Error in Third Task:", err);
      }

      setTimeout(() => {
        console.log("All tasks completed successfully");
      }, 4000);
    });
  });
});

// Explanation:
// In this example, each task follows the error-first callback pattern.
// The first argument of the callback is reserved for an error, if any occurs.
// If an error occurs, it is handled immediately, and subsequent tasks may be skipped or handled accordingly.
// This pattern allows for graceful handling of errors in asynchronous code.
