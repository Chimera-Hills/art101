// index.js - Experiments
// Author: Kevin Hong
// Date: 15 November, 2023

console.log("JavaScript is working!");

$("#my-button").click(function () {
    console.log("Button was clicked!");
    var name = prompt("Name please:");
    console.log("Name returned: " + name);
    $("#title").html("Hello, " + name + "!");
});