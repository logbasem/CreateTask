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
removeButtons();
setButtons(["Test", "Test2", "Test3"]);

function setButtons(optionArray) {
    for (let i = 0; i < optionArray.length; i++) {
        var button = document.createElement("button");
        button.innerText = optionArray[i];
        button.classList.add("btn");
        optionButtonsElement.appendChild(button);
    }
}


function removeButtons() {
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}

//const textNodes = 
