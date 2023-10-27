// index.js - Using arrays and objects to output my main imaginary ride and other modes of transport
// Author: Kevin Hong
// Date: 26 Oct. 2023

// Define variables in an array for my modes of transport
var myTransport = [
  "bus",
  "car",
  "walking"
]

// Define an object for my main ride
var myMainRide = {
  make: "Cadillac",
  model: "CT5-V Blackwing",
  color: "Dark Emerald Frost",
  year: 2022,
  age: function() {
      return 2023 - this.year;
  }
}

// Output
document.writeln("My main modes of transportation for moving around UCSC's big campus are " + myTransport[0] + "es, " + myTransport[1] + "s, or " + myTransport[2] + ". <br>");
document.writeln("The specs for a car that is on my wishlist are: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
