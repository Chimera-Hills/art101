// index.js - This simple JavaScript/jQuery script appends new elements to an output div
// Author: Kevin Hong
// Date: 14 November, 2023

// Generates random text messages that respond to each other in the output
function generateRandomText() {
    // Create a constant for placeholder text, Lorem Ipsum
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    // Set a minimum and maximum length for the generated text
    const min = 3;
    const max = 100;

    // Generate a random length between the minimum and maximum number
    // Rounds the number out
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

    // Get a random starting index to slice the Lorem Ipsum text
    // Rounds the number out
     const randStart = Math.floor(Math.random() * (text.length - randLen + 1));

    // Generate the random Lorem Ipsum-like text
     return text.slice(randStart, randStart + randLen);
}

// Create an event listener for the button
$("#make-convo").click(function(){
    // Grab new dialogue using previously created function, generateRandomText()
    const newText = generateRandomText();

    // Append a new div with the class, text, to div with id, output
    $("#output").append("<div class='text'><p>" + newText + "</p></div>");
});

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