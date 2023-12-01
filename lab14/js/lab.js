/*
   lab.js - This JavaScript/jQuery script simulates rolling dice, with a debugger keyword for pausing the code

   Requirements: jQuery must be loaded for this script to work.

   Author: Akira Shemansky
   Date: 11/30/2023
*/

// function for rolling a die
function rollDie(sides) {
    const roll = Math.floor(Math.random() * sides) + 1;
    debugger; // will pause the code if the console is open

    // the equation above has a very small chance to roll one above the side count
    // this if-else statement checks for that
    if (roll > sides) {
        return roll-1;
    } else {
        return roll;
    }
}

// function for rolling multiple dice
function rollDice(sides, num) {
    var rolls = [];
    for (var i = 0; i < num; i++) {
        rolls.push(rollDie(sides));
    }

    return rolls;
}

// click listener for roll button; rolls a single die and posts the result
$("#roll").click(function() {
    const sideCount = $("#sideCount").val();
    $("#debug-output").html("<p>You rolled: " + rollDie(sideCount) + "</p>");
})

// click listener for "roll multiple" button; rolls multiple dice and posts the result
$("#roll-multiple").click(function() {
    const sideCount = $("#sideCount").val();
    const diceNum = $("#multidice").val();
    $("#debug-output").html("<p>You rolled: " + rollDice(sideCount, diceNum) + "</p>");
})