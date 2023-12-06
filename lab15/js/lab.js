/*
lab.js - This JavaScript/jQuery script uses AJAX to get pokemon.
Author: Kevin Hong
Date: 3 December, 2023
*/

// Functions

// Function to getting random ID
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Event Listeners

// Click event that, when activated, shuffles through the list of pokemon and picks a starter one for you
$('#activate').click(function() {
    // Initialize variable for getting a random ID
    var randomInteger = getRandomInt(1, 1017);
    console.log(randomInteger); // print debug

    $.getJSON('https://pokeapi.co/api/v2/pokemon/' + randomInteger)
        .done(function (data) {
            // Print for debug
            console.log(data.name);
            console.log(data.types[0].type.name);
            console.log(data.sprites.front_default);
            console.log('Success:', data);

            // Clear existing content in #output
            $('#output').empty();

            // Initialize a function for capitalizing pokemon name
            function processCapitals(string) {
                return string.replace(/\b./g, function(a) {
                    return a.toUpperCase();
                })
            }

            // Initialize a function for looping through and printing abilities
            function processAbilities() {
                var abilities = '';
                for (var i = 0; i < data.abilities.length; i++) {
                    abilities += (`${processCapitals(data.abilities[i].ability.name)}`);
                    if (i < data.abilities.length - 1) {
                        abilities += ', ';
                    }
                    if (data.abilities[i].is_hidden) {
                        abilities += ' (Hidden)';
                    }
                }
                return abilities;
            }         

            // Append new content
            $('#output').append(`
                <h3>${processCapitals(data.species.name)}</h3>
                <p>${processCapitals(data.types[0].type.name)}-type Pokemon</p>
                <img src="${data.sprites.front_default}" />
                <p><b>Abilities:</b> ${processAbilities()}</p>
            `);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            // Handle the failure scenario
            console.error('Error:', textStatus, errorThrown);

            // Clear existing content in #output
            $('#output').empty();

            // Append error message
            $('#output').append(`<p id="error">Error fetching data</p>`);
        });
});

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
handleMouseEvents($("#activate"), "buttonHover", "buttonClick");