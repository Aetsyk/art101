// index.js - Lab 8: Anon Functions and Callbacks
// Author: Akira Shemansky
// Date: 11/-/2023

// Declare array of numbers
var nums = [1, 2, 3, 873478];

// Function for operating on numbers
function doThing(x) {
    return x * (x + 1);
}

// Runs the function on each number in the array and returns a new array
var newNums = nums.map(doThing);

console.log(newNums);

// Same as before, but using an anonymous function
var newerNums = nums.map(function(x) {
    return x / 2;
})

console.log(newerNums);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = "<p>Original array: [" + nums + "]<br>Numbers multiplied by themselves plus one: [" + newNums
    + "]<br>Numbers divided by two: [" + newerNums + "]";