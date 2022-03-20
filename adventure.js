/* CREATE TASK REQUIREMENTS:
    -INPUT
    -OUTPUT
    -PROCEDURES
    -LIST OR COLLECTION METHOD
    -PROCEDURE THAT USES SEQUENCING, SELECTION, AND ITERATION
*/
//https://youtu.be/R1S_NhKkvGA

var textElement = document.getElementById("text");
var optionButtonsElement = document.getElementById("option-buttons");

textElement.innerText = "This is a test!";

function removeButtons() {
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}

//const textNodes = 
