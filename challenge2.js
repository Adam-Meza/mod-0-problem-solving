// Start with an array of strings with a mix of uppercase and lowercase letters. 
// Print every word in all lowercase letters.

var blueBrothers = ["jAke", "ElwOod", "AretHAS husBAnd", "THe OnE Who waS a WAiter", "ray CharleS", "TwigGy"];

function lowerCase(x) {

    for (i=0 ; i<x.length ; i++) {
        console.log(x.at(i).toLowerCase())
    }
}

lowerCase(blueBrothers)