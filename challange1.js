//1. Given an array of strings, return 
//only the strings that have exactly 4 characters.

/*

overall purpose + pseudocode:

(define) an [array] of "strings"
iterate over the .length of the [array]
differentaie (if statenent) (for only those "strings" that are === 4 charecters{
console.log
}

*/

var array = ["fire", "water", "air", "earth", "love"]

function moreThanFour(elements) {
    for (i = 0; i< elements.length; i++) {
        if (elements.at(i).length === 4) {
            console.log(elements.at(i))
        }
    }
}

moreThanFour(array)