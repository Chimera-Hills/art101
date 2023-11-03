// index.js - Using JS to output a user's sorted name 
// Author: Kevin Hong
// Date: 31 October, 2023
// Special thanks to Ilya Dolgov, my TA, for being the one who created the code for sorting capitalized letters correctly




// Constants

// This prompts the user with a message asking for their name
var nameInput = prompt("Can I get your name?")

// This command retrieves the HTML element containing "userInput"
// innerHTML assigns that element to the value of "nameInput"
document.getElementById("userInput").innerHTML=nameInput;

// This activates the function "processCapitals", which in turn activates the other functions as callbacks
processCapitals(nameInput);



// Functions

// This function, "processName", splits the user's input, sorts it in alphabetical order including 
// capitalized letters, rejoins the letters together back into a string and then returns it to the user.
function processName (input) {
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
    var nameSorted = nameArraySorted.join('');

    // Said variable is returned
    return nameSorted
}

// All the credits here to my lab partner, Nicole Van Fleet Kingery, for creating this code and also ChatGPT for identifying what I did wrong while copying her code.
// This function "processSpaces", takes into account the spaces between a name and sorts each name. It also calls back a function "processName" to sort things correctly.
function processSpaces(input) {
    // Splits the input into an array of names
    var nameArray = input.split(' ');

    // Create a variable to store the reformatted name
    var newName = '';

    // Iterates through each name in the array
    for (var i = 0; i < nameArray.length; i++) {
        // Process each name through the processName function
        var nextName = processName(nameArray[i]);

        // Concatenate processed names into newName, adding spaces between each name
        newName = newName + ' ' + nextName;
    }

    // Returns reformatted name
    return newName
}

// Credits here also go to Nicole!
// This function "processCapitals" takes into account the capitalization of each name after it has been sorted.
function processCapitals(input) {
    // Processes the input by sorting and reformatting it
    var processedName = processSpaces(input);

    // Converts the processed string into lowercase
    var nameLowerCased = processedName.toLowerCase();

    // Capitalizes the first letter of each word using the replace method and a regular expression "/\b./g"
    var nameCapitalized = nameLowerCased.replace( /\b./g, function(a) { 
        return a.toUpperCase() 
    });
    
    // A variable is created for a command that retrieves the HTML element containing "userSorted"
    var nameHolder = document.getElementById("userSorted");

    // Update the HTML element's content
    return nameHolder.innerHTML=nameCapitalized
}