let arr = [1,2,3,4,5]

function area(radius) {
  return Math.PI * radius * radius
}

function circum(radius) {
  return Math.PI * 2 * radius
}

function calculate(array, logic) {
  let arr = []
  array.forEach(item => {
    arr.push(logic(item))
  })

  return arr
}

console.log(calculate(arr, circum))
console.log(calculate(arr, area))

// A higher-order function is a function that can take another function 
// as an argument, or return a function as its result. In this case, the calculate 
// function takes an array (array) and a function (logic) as arguments. 
// It applies the logic function to each element in the array and returns the transformed array.

// Key points that indicate the higher-order function pattern:

// Function as an argument: calculate accepts a function (logic) as a parameter.
// Callback function: The logic function is applied to each element of the array (array) inside the forEach loop.
// This pattern is commonly used in functional programming to abstract operations on data.
