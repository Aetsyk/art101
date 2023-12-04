/*
    lab.js - This JavaScript/jQuery script uses AJAX to get data from an external API

    Requirements: jQuery must be loaded for this script to work.

    Author: Akira Shemansky
    Date: 12/3/2023
*/

// click listener for the activate button
$("#activate").click(function() {
    $("#show").addClass("hidden");
    $("#output").html("<p><i>Loading...</i></p>");

    // AJAX call
    $.ajax({
        "url": "https://jservice.io/api/random",
        "type": "GET",
        "dataType": "json",
        "success": function(data) {
            $("#output").html("");
            if (data[0].value) { // determines if the question is a final Jeopardy question or not
                $("#output").append("<p>Category: " + data[0].category.title + "</p>");
                $("#output").append("<p><b>For " + data[0].value + ":</b> " + data[0].question + "</p>");
            } else {
                $("#output").append("<p><b>Final Jeopardy:</b> " + data[0].question + "</p>");
            }
            $("#output").append('<p id="answer" class="hidden"><b>Answer:</b> ' + data[0].answer + '</p>');
            $("#show").removeClass("hidden");
        },
        "error": function(jqXHR, textStatus, errorThrown) {
            $("#output").append("<p>fuck</p>");
            console.log("Error:", textStatus, errorThrown);
        }
    })
});

// click listener for the show answer button; shows the answer for the question
$("#show").click(function() {
    $("#answer").removeClass("hidden");
    $("#show").addClass("hidden");
});