/*
   lab.js - This JavaScript/jQuery script generates a list of numbers with factors of specified numbers being given certain words

   Requirements: jQuery must be loaded for this script to work.

   Author: Akira Shemansky
   Date: 11/26/2023
*/

// click listener for the run button
$("#run").click(function() {
    const limit = $("#limit").val();

    const factor1 = $("#factor1").val();
    const factor2 = $("#factor2").val();
    const factor3 = $("#factor3").val();
    const factor4 = $("#factor4").val();

    const factor1word = $("#factor1word").val();
    const factor2word = $("#factor2word").val();
    const factor3word = $("#factor3word").val();
    const factor4word = $("#factor4word").val();

    $("#output").html(""); // clears any previous output
    $("#output").css("max-height", limit*3.6 + "px") // sets max height of the output box so the output wraps into columns

    for (i=0; i<limit; i++) {
        var str = "";
        var ii = i + 1;
        
        if ((factor1 && factor1word) && (ii % factor1 === 0)) { // first part of condition tests if the necessary input has been given
            str += factor1word;
        }
        
        if ((factor2 && factor2word) && (ii % factor2 === 0)) {
            str += factor2word;
        }
        
        if ((factor3 && factor3word) && (ii % factor3 === 0)) {
            str += factor3word;
        }

        if ((factor4 && factor4word) && (ii % factor4 === 0)) {
            str += factor4word;
        }
        
        if (str) {
            $("#output").append("<p>" + ii + " - " + str + "</p>");
        } else {
            $("#output").append("<p>" + ii + "</p>");
        }
    }
});