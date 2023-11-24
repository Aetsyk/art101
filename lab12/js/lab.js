/*
   lab.js - This JavaScript/jQuery script sorts a string into one of the four Hogwarts houses

   Requirements: jQuery must be loaded for this script to work.

   Author: Akira Shemansky
   Date: 11/23/2023
*/

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
// the hash function above (lines 10-24) was taken from the example on the Lab 12 assignment page:
// https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript/8831937#8831937

// returns one of the four Hogwarts houses depending on the hash of the input string
function sortingHat(s) {
    const strHash = Math.abs(hashCode(s));
    const houseArray = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
    const houseDescArray = [
        "<b>Gryffindor</b><br>Values: bravery, chivalry<br>Animal: lion<br>Colors: scarlet and gold",
        "<b>Ravenclaw</b><br>Values: intelligence, curiosity, wit<br>Animal: eagle<br>Colors: blue and bronze",
        "<b>Slytherin</b><br>Values: ambition, leadership, resourcefulness<br>Animal: snake<br>Colors: green and silver",
        "<b>Hufflepuff</b><br>Values: hard work, dedication, patience, loyalty<br>Animal: badger<br>Colors: yellow and black"
    ]
    const houseNum = strHash % houseArray.length;

    return [houseArray[houseNum], houseDescArray[houseNum]];
}

// click event listener for "submit" button, running the sortingHat function and displaying the result on the page
$("#button").click(function() {
    const name = $("#input").val();
    if (name === "") {
        return; // exits out of function if no name is provided
    }
    const house = sortingHat(name);
    $("#output").append('<div class="sort"><p>The Sorting Hat has sorted you, ' + name + ', into ' + house[0] + '.</p></div>');

    $("#desc").show();
    $("#desc").html('<p>' + house[1] + '</p>');
});

$("#clear").click(function() {
    $("#output").html('');
    $("#desc").html('');
    $("#desc").hide();
});