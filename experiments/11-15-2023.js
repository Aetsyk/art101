// 11-15-2023.js
// An experiment involving basic HTML manipulation
// Author: Akira Shemansky
// Date: 11/15/2023

$("#my-button").click(function() {
    var name = window.prompt("Name please: ");
    $("#title").html("Hello " + name);
});