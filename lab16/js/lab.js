/*
lab.js - Use ajax to incorporate a comic website into your webpage.
Author: Kevin Hong
Date: 5 December, 2023
*/

// Constants/Variables

var ENDPOINT = "https://xkcd.com/info.0.json"

console.log(ENDPOINT);

const comicObj = {
    url: ENDPOINT,
    type: "GET",
    dataType: "json",
    success: comicObjSuccess,
    error: comicObjError
}

// Event Calls

$.ajax(comicObj);

// Event handler for the "Random" button
$("#random").click(function() {
    // Generate a random ID and update the ENDPOINT
    var ENDPOINT = "https://xkcd.com/" + getRandomInt(0, 2864) + "/info.0.json";

    // Update the URL in the comicObj
    comicObj.url = ENDPOINT;

    // Make the AJAX request
    $.ajax(comicObj);
});

// Event handler for the "Prev" button
$("#previous").click(function() {
    // Initialize a variable that subtracts 1 from the number of the current image
    var num = comicObj.num - 1;

    // Check if the previous number is less than 1, and if it is, reset to 2862
    if (num < 1) {
        num = 2864;
    }

    // Update the ENDPOINT with newly subtracted ID/number
    var ENDPOINT = "https://xkcd.com/" + num + "/info.0.json"; 

     // Update the URL in the comicObj
    comicObj.url = ENDPOINT;

    // Call the AJAX request
    $.ajax(comicObj);
})

// Event handler for the "Next" button
$("#next").click(function() {
    // Initialize a variable that adds 1 to the number of the current image
    var num = comicObj.num + 1

    // Check if the next number exceeds the maximum (2864)
    if (num > 2864) {
        num = 1;
    }

    // Update the ENDPOINT with newly incremented ID/number
    var ENDPOINT = "https://xkcd.com/" + num + "/info.0.json";

    // Update the URL in the comicObj
    comicObj.url = ENDPOINT;

    // Call the AJAX request
    $.ajax(comicObj);
})

// Functions

// Function for getting random ID
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function for success
function comicObjSuccess(data) {
    console.log("Success:", data);

    // Add the comic number to the comicObj
    comicObj.num = data.num;

    // Empty the output div of pre-existing content
    $("#output").empty();

    // Append new information
    $("#output").append(`<h1>${data.title}</h1>
    <img src="${data.img}" title="${data.alt}" alt="${data.alt}" />
    `)
}

// Function for error
function comicObjError(request, error) {
    console.log("Error:", request, error);

    // Clear existing content in #output
    $('#output').empty();

    // Append error message
    $('#output').append(`<p id="error">Error fetching data</p>`);
}

// Reusable function for handling mouse events
// From ChatGPT (Simplified the code I made for both button and icons)
function handleMouseEvents(element, hoverClass, clickClass) {
    // Change appearance on mouse enter
    element.on("mouseenter", function () {
        $(this).addClass(hoverClass);
    });

    // Revert on mouse leave
    element.on("mouseleave", function () {
        $(this).removeClass(hoverClass);
    });

    // Change appearance on mouse click
    element.on("mousedown", function () {
        $(this).addClass(clickClass);

        // Bind mouseup to the document to handle cases where the mouse is released outside the button
        $(document).on("mouseup", function () {
            element.removeClass(clickClass);
            // Unbind the mouseup event after it's been triggered once
            $(document).off("mouseup");
        });
    });
}

// Apply the function to buttons
handleMouseEvents($("button"), "buttonHover", "buttonClick");