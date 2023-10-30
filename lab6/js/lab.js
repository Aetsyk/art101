// index.js - Lab 6: Arrays and Objects
// Author: Akira Shemansky
// Date: 10/29/2023

// Define Variables
var myTransport = ['legs', 'bus', 'car'];

var myMainRide = {
  make: 'Honda',
  model: 'Accord',
  color: 'white',
  year: 2018,
  age: 5
}

// Printing the Variables in the Document
document.writeln('How I get around: ' + myTransport + '<br>');

document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");