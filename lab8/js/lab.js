// index.js - Playing with Anon Functions & Callbacks
// Author: Kevin Hong
// Date: 5 November, 2023

// Variables

// Initalizes a variable, numbers, which contains randomized numbers between 1-100
var numbers = [18, 36, 96, 46, 12];

// Initalizes a variable, names, which contains randomized names
var names = ["Cerys", "Kabir", "Hannah", "Mya", "Aleesha", "Reuben", "Annabelle", "Yousuf", "Chiara", "Ioan"];


// Functions

// Splits the number in half
function divideBy2(x) {
    // Initializes a variable, quotient, in which the number is divided by 2
    var quotient = x / 2;

    // Prints the number and its result only in the console.
    console.log("Your number,", x + ", halved is", quotient + ".");

    // Returns the variable
    return quotient;
};

// Using map with the function, divideBy2, on variable, numbers, 
// and an anonymous function on variable, names
var resultA = numbers.map(divideBy2);

// Checks whether the length of a name is even or odd.
var resultB = names.map(function isNameEven(x) {
    // Initializes a variable, result, which checks if the length of a string, x, is divisible by 2
    var result = x.length % 2 == 0;
    
    // Prints the name in the console, announcing its result
    if (result) {
        console.log(x + ", your name is even.");
    } else {
        console.log(x + ", your name is odd.");
    }

    // Returns the variable
    return result;
});


// Output

// Set variables to their ids in the HTML
// This will put the outputs into their specified locations in the HTML
document.getElementById("numberArray").innerHTML=numbers;
document.getElementById("numberArrayResults").innerHTML=resultA;
document.getElementById("namesArray").innerHTML=names;
document.getElementById("namesArrayResults").innerHTML=resultB;