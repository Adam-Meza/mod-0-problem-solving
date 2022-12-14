//1. Start with an array of strings. Print only the words that include the letter combination "ing".


/*

overall purpose + pseudocode:

(define) an [array] of "strings"
iterate over the .length of the [array]
differentaie (if statenent) (for only those "strings" that .include ("ing"){
console.log
}

*/

var verbs = ["sing", "greet", "fling", "spring", "learn", "write"];

function checkIng(array) {
    for (i=0; i < array.length; i++) {
    if (array.at(i).includes("ing")) {
        console.log(array.at(i))
        }
    }
}

checkIng(verbs)
