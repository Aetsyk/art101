// 11-15-2023.js
// An experiment involving basic HTML manipulation
// Author: Akira Shemansky
// Date: 11/15/2023 - 11/17/2023

$("#my-button").click(function() {
    // replaced: prompt("You are: ")
    var name = $("#input").val();
    $("#title").html("Hello " + name);
});