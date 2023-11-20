/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Akira Shemansky
   Date: 11/19/2023
*/


//The following four functions have been reused and slightly modified from Lab 7

// This function sorts the letters in a string
function letterSort(s) {
    const r = s.toLowerCase();
    return r.split("").sort().join("");
}

// This function shuffles an array
function shuffleArray(a) {
    var na = [];
    a.forEach(element => {
        var chance = Math.random() * 2;
        if (chance >= 1) {
            na.unshift([element]);
        } else {
            na.push(element);
        }
    });
    return na;
}

// This function properly capitalizes a name
function capitalizeName(name) {
    var la = name.split("");
    for (let index = 0; index < la.length; index++) {
        if (la[index] == " " && index < la.length-1) {
            la[index+1] = la[index+1].toUpperCase();
        }
    }
    la[0] = la[0].toUpperCase();
    return la.join("");
}

// This function makes an anagram from a string
function makeAnagram(s) {
    // Shuffle the sorted letters a few times
    var na = shuffleArray(s.split(""));
    na = shuffleArray(na);
    na = shuffleArray(na).join("");

    // Capitalize letters
    newAnagram = capitalizeName(na);
    
    return newAnagram;
}

// click listener for submit button
$("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // sort the letters in the name
    const userNameSorted = letterSort(userName);
    // make an anagram from the sorted letters
    const userNameModified = makeAnagram(userNameSorted);
    // append a new div to our output div, adding the title to the end if provided
    if ($("#user-title").val() != undefined) {
        const userTitle = $("#user-title").val()
        $("#output").append('<div class="text"><p>' + userNameModified + ' ' + userTitle + '</p></div>');
    } else {
        $("#output").append('<div class="text"><p>' + userNameModified + '</p></div>');
    }
});

// click listener for clear button
$("#clear").click(function(){
    // clear the output section
    $("#output").html('');
});

// click listener for add divider button
$("#add-divider").click(function(){
    // clear the output section
    $("#output").append('<div class="divider"></div>');
});

// click listener for sort only button
$("#sort-only").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // sort the letters in the name
    const userNameSorted = letterSort(userName);
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});