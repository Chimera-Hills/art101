// index.js - Making a car in JS
// Author: Kevin Hong
// Date: Oct. 24, 2023


// Constants

const car = {
  make: "Cadillac",
  model: "CT5-V Blackwing",
  color: "Dark Emerald Frost",
  year: 2022,
  ownIt: false,
}

// Variable
var age = 2023 - car.year // calculations

// Output

$("#output").append(`<p>Make: ${car.make}<br>Model: ${car.model}<br>Color: ${car.color}<br>Year: ${car.year}<br>Age: ${age}</p>`)
