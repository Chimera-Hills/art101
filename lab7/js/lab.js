// index.js - Using JS to output a user's sorted name 
// Author: Kevin Hong
// Date: 31 October, 2023
// Special thanks to Ilya Dolgov, my TA, for actually being the one who created this code



// Constants

// This prompts the user with a message asking for their name
var nameInput = prompt("Can I get your name?")

// This command retrieves the HTML element containing "userInput"
// innerHTML assigns that element to the value of "nameInput"
document.getElementById("userInput").innerHTML=nameInput;

// This activates the function "processName"
processName(nameInput);



// Functions

// This function, "processName", splits the user's input, sorts it in alphabetical order including 
// capitalized letters, rejoins the letters together back into a string and then returns it to the user.
function processName (input){
    // This creates a variable of the input after being split into an array
    var nameArray = input.split('');

    // This sorts the array into alphabetical order. The function below takes into context the 
    // capitalization and properly ensures that things are sorted correctly.
    var nameArraySorted = nameArray.sort(
        function (a, b) {
        return a.localeCompare(b);
        }
    );
    
    // After being sorted through, the name is joined back together to form a string
    var nameSorted = nameArray.join('');

    // A variable is created for a command that retrieves the HTML element containing "userSorted"
    var nameHolder = document.getElementById("userSorted");

    // Returns the user's name sorted and updates the HTML element's content
    return nameHolder.innerHTML=nameSorted;
}
