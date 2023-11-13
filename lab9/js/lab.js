/*
    jab.js - Modifies elements on the lab page using Javascript/jQuery

    Required: jQuery (script will not function without this)

    Author: Akira Shemansky
    Date: 11/12/2023
*/

// add buttons at the bottom of each section
$(".special-section").append("<button>Make Special</button>");

// add a click listener to every button on the page
$(".special-section button").click(function(){
    // toggle the special class on 
    $($(this).parent()).toggleClass("special");
});