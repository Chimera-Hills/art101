// index.js - Using arrays and objects to output my main imaginary ride and other modes of transport
// Author: Kevin Hong
// Date: 26 Oct. 2023

// Constants

// Define variables in an array for my modes of transport
const myTransport = [
  "bus",
  "car",
  "walking"
]

// Define an object for my main ride
const myMainRide = {
  make: "Cadillac",
  model: "CT5-V Blackwing",
  color: "Dark Emerald Frost",
  year: 2022,
  age: function() {
      return 2023 - this.year;
  }
}

// Output
$("#output").prepend(`<p>My main modes of transportation for moving around UCSC are: ${myTransport[0]}es, ${myTransport[1]}s, and ${myTransport[2]}.</p>
<p>The specs for a car that is on my wishlist are:<ul><li>make: ${myMainRide.make}</li><li>model: ${myMainRide.model}</li><li>color: ${myMainRide.color}</li>
<li>year: ${myMainRide.year}</li><li>age: ${myMainRide.age()}</li></ul>`)
// document.writeln("The specs for a car that is on my wishlist are: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");