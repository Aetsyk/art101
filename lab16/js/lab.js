/*
    lab.js - This JavaScript/jQuery script uses AJAX to get JSON objects from xkcd.com

    Requirements: jQuery must be loaded for this script to work.

    Author: Akira Shemansky
    Date: 12/7/2023
*/

// Declares variable for storing comic data & variable for the number of the latest comic
var comicObj;
var max = 1;

function getData(n) {
    var api_url;
    if (n > 0 && n <= max) { // construct link to the comic with the provided number
        api_url = "https://xkcd.com/" + n + "/info.0.json";
    } else { // if the number is invalid, return the url for the latest comic
        api_url = "https://xkcd.com/info.0.json";
    }

    // retrieves data using the core $.ajax() method
    $.ajax({
        url: api_url,
        type: "GET",
        dataType : "json",
        // Stores retieved data in the variable and updates the site
        success: function(data) {
            $("#output").html("");
            comicObj = data;
            $("#output").append("<h3>" + comicObj.title + "</h3>");
            $("#output").append("<img src=\"" + comicObj.img + "\" alt=\"" + comicObj.alt + "\">");

            if (comicObj.num > max) { // sets max variable to the number of the latest comic
                max = comicObj.num;
                $("#comic-num").attr("max", max);
            }
            $("#comic-num").val(comicObj.num);
        },
        // Throws error message if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

getData(0);

// click listeners for each button
$("#prev").click(function() {
    const newNum = comicObj.num - 1;
    getData(newNum);
})

$("#next").click(function() {
    const newNum = comicObj.num + 1;
    getData(newNum);
})

$("#goto").click(function() {
    const newNum = $("#comic-num").val();
    getData(newNum);
})