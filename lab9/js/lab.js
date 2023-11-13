// index.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page.
// Author: Kevin Hong
// Date: 6 November, 2023

// Create buttons for each section: Challenges, Problems, & Results
$(".major-section").append("<br><button id='morph-sections'>Beautify</button>");

// Change the buttons' appearances when the mouse enters it
$(".major-section button").mouseenter(function () {
    $(this).addClass("special2");
});

// Reverts it back once mouse exits
$(".major-section button").mouseleave(function () {
    $(this).removeClass("special2");
});

// Changes the section's appearance in which a button is in
$(".major-section button").click(function() {
    ($(this).parent()).toggleClass("special");
})

