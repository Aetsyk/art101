// index.js - Lab 7: Functions
// Author: Akira Shemansky
// Date: 11/2/2023

// Get the user's name
var userName = window.prompt("What is your name?");

// This function sorts the letters in a string
function letterSort(s) {
    r = s.toLowerCase();
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

// This function makes an anagram from the user's name
function makeAnagram(s) {
    var a = letterSort(s).split("");

    // Shuffle the sorted letters a few times
    var na = shuffleArray(a);
    na = shuffleArray(na);
    na = shuffleArray(na).join("");

    // Capitalize letters
    newAnagram = capitalizeName(na);
    
    return newAnagram;
}

// Output the sorted name and the anagram
document.writeln("Here's your sorted name: " + letterSort(userName) + "<br><br>");
document.writeln("And here's a brand new name just for you:");
document.writeln("<div class='name'>" + makeAnagram(userName) + "</div>");