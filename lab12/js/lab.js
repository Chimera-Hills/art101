/*
lab.js - This JavaScript/jQuery script utilizes conditionals to create a function for sorting the user into a house at Hogwarts.
Author: Kevin Hong
Date: 21 November, 2023
*/

// Houses are: Gryffindor, Ravenclaw, Hufflepuff, Slytherin

// Button CSS

// Change the button's appearance when the mouse enters it
$("#button").mouseenter(function () {
    $(this).addClass("special2");
});

// Reverts it back once mouse exits
$("#button").mouseleave(function () {
    $(this).removeClass("special2");
});

// Change the button's appearance when the mouse button is clicked downed on it
$("#button").mousedown(function () {
    $(this).addClass("special3");

    // Bind mouseup to the document to handle cases where the mouse is released outside the button
    // From ChatGPT
    $(document).mouseup(function () {
        $("#button").removeClass("special3");
        // Unbind the mouseup event after it's been triggered once
        $(document).off("mouseup");
    });
});

// Array for houses

const houses = [
    {
        house: "<span id='gryffindor'>Gryffindor!</span>",
        desc: "You belong in <i>Gryffindor</i>, where dwell the brave at heart. Their daring, nerve, and chivalry set them apart..."
    },
    {
        house: "<span id='hufflepuff'>Hufflepuff!</span>",
        desc: "You belong in <i>Hufflepuff</i>, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil..."
    },
    {
        house: "<span id='ravenclaw'>Ravenclaw!</span>",
        desc: "You belong in <i>Ravenclaw</i>, where those of wit and learning will always find their kind..."
    },
    {
        house: "<span id='slytherin'>Slytherin!</span>",
        desc: "You belong in <i>Slytherin</i>. Those cunning folk use any means to achieve their ends..."
    }
]

// Constants

const credits = "<div class='credits'>–from Harry Potter & The Sorcerer\'s Stone, Chapter 7: The Sorting Hat.</div>";
const exposition = "<div class='stage-direction'><i>For a few seconds, there was complete silence. Then the hat twitched. A rip near the brim opened wide like a mouth – and the hat began to sing:</i></div>"

// Functions

/* This is an old function used for Task 2
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}
*/

// Converts a string into a hashed checksum
// From https://stackoverflow.com/questions/26057572/
function hashedString (str) {
    let hash = 0;
    const len = str.length;
    if (len === 0) {
        return alert("I said... put in YOUR NAME!!!");
    }
    for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

// Takes an input string, hashes it, and returns one of the houses
// Credits to Professor Wes Modes
function sortingHat (input) {
    const hashValue = hashedString(input);
    const mod = Math.abs(hashValue) % houses.length;
    return houses[mod];
};

// Credits to ChatGPT for template literals, 
$("#button").click(function () {
    // Gets the string value from input field
    const name = $("#input").val();
    // Uses constant, name, to get the house from sortingHat function
    const houseObj = sortingHat(name);
    // Uses template literals that interpolate values from different variables
    const newText = `<h2>${houseObj.house}</h2>${exposition}<p>"${houseObj.desc}"</p>${credits}`;
    // Sets a constant, outputArea, for div with id, output
    const outputArea = $("#output");
    // Sets the HTML of outputArea to constant, newText
    outputArea.html(newText);
    // Removes class, hide, from output div
    outputArea.removeClass("hide")
    // Removes class, hide, from tail div
    $("#tail").removeClass("hide")
});

// When mouse clicks the input field again, it hides the output and tail, allowing for reentry.
$("#input").focus(function () {
    $("#output").addClass("hide")
    $("#tail").addClass("hide")
});