/*
lab.js - This JavaScript/jQuery script uses for loops to print out certain phrases depending on its factors.
Author: Kevin Hong
Date: 26 November, 2023
*/

// Button CSS

// Change the button's appearance when the mouse enters it
$("button").mouseenter(function () {
    $(this).addClass("buttonHover");
});

// Reverts it back once mouse exits
$("button").mouseleave(function () {
    $(this).removeClass("buttonHover");
});

// Change the button's appearance when the mouse button is clicked downed on it
$("button").mousedown(function () {
    $(this).addClass("buttonClick");

    // Bind mouseup to the document to handle cases where the mouse is released outside the button
    // From ChatGPT
    $(document).mouseup(function () {
        $("button").removeClass("buttonClick");
        // Unbind the mouseup event after it's been triggered once
        $(document).off("mouseup");
    });
});

// Functions

// Borrowed this code from Professor Modes' page. I modified it so that it utilizes jQuery instead of document.getElementById
// Receives input values and strings and sorts them together into objects
function sortFactors() {
    // Initalize an object, factorObj
    var factorObj = {};
    // Iterates through while i is less than or equal to 4 
    for (var i = 0; i <= 4; i++) {
        // Initializes variables
        var numId = "num" + i;
        var textId = "text" + i;
        // Gets IDs that match the variables created above
        var numValue = $("#"+numId).val();
        var textValue = $("#"+textId).val();
        if (numValue && textValue) {
            factorObj[numValue] = textValue;
        }
    }
    return factorObj;
}

// Loops over every number until the max input value and outputs input strings depending on the factor provided
// Mostly used Professor Modes' code here
function fizzBuzz(maxVal, factorObj) {
    for (var val = 0; val <= maxVal; val++) {
        var output = "";
        for (var factor in factorObj) {
            if (val % factor == 0) {
                output += factorObj[factor];
            }
        }
        // Credits to Nicole Van Fleet Kingery for this code that replaces the original output with a new output each time maximum value is changed.
        if (val === 0) {
            $("#output").html(val + ". " + output + "!<br>");
        } else if (output.length > 0) {
            $("#output").append(val + ". " + output + "!<br>");
        } else {
            $("#output").append(val + ".<br>");
        }
    }
}

// Error Reporter
// From Professor Modes
function reportError(str) {
    $("#output").html("<div id='error'>" + str + "</div>")
}

// Event Listeners

// Borrowed error reports from Professor Modes
$("#submit").click(function() {
    var max = $("#max").val();
    if (! max) {
        return reportError("Please provide a maximum value.");
    } else {
        console.log("This is your maximum value:", max);
    }
    var factors = sortFactors();
    if (Object.keys(factors).length === 0) {
        return reportError("Please provide a factor and text.");
    } else {
        console.log("factorObj:", factors);
    }
    fizzBuzz(max, factors);
    $("#output").addClass("col");
});