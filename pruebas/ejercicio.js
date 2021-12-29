const word = "el rayo es el mejor";
const wordMayus = word.toUpperCase().replace(/ /g, "");
const array = wordMayus.split("");

//let index = 0;
let finalText = "";

console.log(array);

array.forEach(function callback(element, index) {

    if (index !== array.length - 1) {
        finalText += element + "-";

    } else {
        finalText += element;
    }

})

console.log(finalText);