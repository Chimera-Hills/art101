/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.
Author: Kevin Hong
Date: 16 November, 2023
*/


// Functions

// This is a function created by combining the functions from Lab 7
// Credits here go to ChatGPT for combining them
function processInput(input) {
    // This creates a variable of the input after being split into an array of words
    var wordsArray = input.split(' ');

    // Create a variable to store the reformatted name
    var processedName = '';

    // Iterates through each word in the array
    for (var i = 0; i < wordsArray.length; i++) {
        // This creates a variable of the word after being split into an array of characters
        var charactersArray = wordsArray[i].split('');

        // This sorts the array into alphabetical order, taking into account capitalization
        var charactersArraySorted = charactersArray.sort(function(a, b) {
            return a.localeCompare(b);
        });

        // After being sorted through, the characters are joined back together to form a string
        var wordSorted = charactersArraySorted.join('');

        // Concatenate processed words into processedName, adding spaces between each word
        processedName = processedName + ' ' + wordSorted;
    }

    // Converts the processed string into lowercase
    var processedLowerCased = processedName.trim().toLowerCase();

    // Capitalizes the first letter of each word using the replace method and a regular expression "/\b./g"
    var processedCapitalized = processedLowerCased.replace(/\b./g, function(a) {
        return a.toUpperCase();
    });

    return processedCapitalized;
}

// This function sorts the name into an anagram instead
// Credits here go to Nicole Van Fleet Kingery for the Fisher-Yates shuffle
function anagram (input) {
    // This creates a variable of the input after being split into an array
    var nameArray = input.split('');

    // This sorts the array into a random order.
    for (let i = nameArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nameArray[i], nameArray[j]] = [nameArray[j], nameArray[i]];
    }

    // Join the characters back into a string and convert to lowercase
    var shuffledString = nameArray.join('').toLowerCase();

    // Replace the first character of each word with its uppercase version
    var finalAnagram = shuffledString.replace( /\b./g, function(a) {
        return a.toUpperCase();
    });
    // Return the resulting anagram string
    return finalAnagram
}

// Event Listener

// Initalize trackers outside of the button
// Credits here go to ChatGPT for the counters and checkers
let clickCount = 0; // Click counter
let alphabetAppended = false; // Flag to track whether alphabetically sorter has already been appended
let anagramAppended = false; // Flag to track whether anagram sorter has already been appended

// Iterates through the sorting function above when button is clicked
$("#submit").click(function(){
    // Increment click count
    clickCount++;
    // Checks if the content has already been appended
    if (!alphabetAppended) {
        // get value of input field
        const userName = $("#user-name").val();
        // now let's sort it
        userNameSorted = processInput(userName);
        // Append a new paragraph to the output div
        // Also checks if there is no input
        if (userName.length == 0) {
            // Prints out dialogue in the console depending on how many times you click the button without inputting a name
            if (clickCount < 100) {
                console.log("Please input a name.");
            } else if (clickCount > 200) {
                console.log("Can you please stop?")
            } else {
                console.log("Stop it. Get some help.");
            }
        } else {
            $("#output").append('<p>Here is your name sorted alphabetically: ' + userNameSorted + '</p>');
            alphabetAppended = true; // Set the flag to true after appending
        }
    }
});

// Event listener for the button click
$("#anagram-submit").click(function(){
    // Increment click count
    clickCount++;
    // Check if content has already been appended
    if (!anagramAppended) {
        // Get value of input field
        const userAnagramInput = $("#anagram-user-name").val();

        // Append a new paragraph to the output div
        // ALso checks if there is no input
        if (userAnagramInput.length == 0) {
            // Prints out dialogue in the console depending on how many times you click the button without inputting a name
            if (clickCount < 100) {
                console.log("Please input a name.");
            } else if (clickCount > 200) {
                console.log("Can you please stop?")
            } else {
                console.log("Stop it. Get some help.");
            }
        } else {
            // Create an anagram from the user input
            const anagramResult = anagram(userAnagramInput);

            // Display the anagram
            $("#output").append('<p>Here is the anagram: ' + anagramResult + '</p>');
            anagramAppended = true; // Set the flag to true after appending
        }
    }
});

// Button CSS
// This is the only one I made legitimately

// Change the button's appearance when the mouse enters it
$("button").mouseenter(function () {
    $(this).addClass("special2");
});

// Reverts it back once mouse exits
$("button").mouseleave(function () {
    $(this).removeClass("special2");
});

// Change the button's appearance when the mouse button is clicked downed on it
$("button").mousedown(function () {
    $(this).addClass("special3");
});

// Reverts it back once mouse button is released
$("button").mouseup(function () {
    $(this).removeClass("special3");
});