1. // Given an array of strings, return only the words that begin with the letter "t".

var veggies = ["tomatos", "orange", "turnip", "potatoes", "carrots"]

function startsWithT(x) {
    for (i = 0; i < x.length; i++) {
        if (x.at(i).startsWith("t")) {
            console.log(x.at(i))
        }
    }
}

startsWithT(veggies)