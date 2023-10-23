// index.js - Bulls and Cows
// Author: Kevin Hong
// Date: Oct. 20, 2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Print out instructions
// User_one enters secret number (4 digits integer)
// User_two enters guessing number (loop until all digits are checked)
  // Check each digit:
    // If: it is one of the secret number digits and it’s on the same position:
      // Add 1 to A
    // Else if: it is one of the secret number digits but at different position:
      // Add 1 to B
    // Else: Check next digit
  // Print out A,B tally:
    // If: digits are guessed correctly
      // You win the game!
    // Else: prompt for another guess
