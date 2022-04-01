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

//Questions
var adventureReady = "Are you ready for an adventure?";
var howAreYou = "How are you?";

//Wizard Path
var wizardStart = "Aha! Another day for an adventure! You are completely prepared for the adventure ahead! You reach into your pocket and pull out...";

//Mystery Path
var mysteryStart = "You walk down a stone-bricked road under a gloomy evening sky, feeling crowded in by the buildings on each side. Another day. Just your luck, it begins to rain. You...";

//Sci-Fi Path
var sciFiStart = "You are drifting through a dimension between what is real and what is unreal. You choose...";

var state = adventureReady;

gameStart();

function setButtons(optionArray) {
    for (let i = 0; i < optionArray.length; i++) {
        var button = document.createElement("button");
        button.innerText = optionArray[i];
        button.classList.add("btn");
        button.addEventListener("click", () => buttonClicked(i));
        optionButtonsElement.appendChild(button);
    }
}

function buttonClicked(buttonNum) {
    if (state == adventureReady) {
        adventureReadyOptions(buttonNum);
    } else if (state == howAreYou) {
        howAreYouOptions(buttonNum);
    } else {
        playAgainOptions(buttonNum);
    }
}

function adventureReadyOptions(buttonNum) {
    if (buttonNum == 0) {
        alert("Huzzah! Let the adventure begin!");
        state = howAreYou;
        nextOption(state, ["Wonderful!", "Terrible.", "Somewhere in-between."]);
    } else {
        alert("You go home. END");
        gameEnd("Rejection of the Call"); //figure out how to make a different color or bold or something
    }
}

function howAreYouOptions(buttonNum) {
    if (buttonNum == 0) {
        state = wizardStart;
        nextOption(state, ["Your sword!", "Your wand!", "Nothing!"]);
    } else if (buttonNum == 1) {
        state = mysteryStart;
        nextOption(state, ["Open your umbrella", "Turn up your collar", "Ignore it"]);
    } else {
        state = sciFiStart;
        nextOption(state, ["What is real", "What is unreal"]); //what is love? baby don't hurt me
    }
}

function playAgainOptions(buttonNum) {
    if (buttonNum == 0) {
        state = adventureReady;
        gameStart();
    } else {
        textElement.innerText = "Thank you for playing!";
        removeButtons();
    }
}

function gameEnd(endingName) {
    state = "END";
    nextOption("You have achieved the ending: " + endingName + ". Play again?", ["Yes", "No"]);
}

function gameStart() {
    textElement.innerText = state;
    removeButtons();
    setButtons(["Yes", "No"]);
}

function nextOption(optionTitle, optionButtons) {
    textElement.innerText = optionTitle;
    removeButtons();
    setButtons(optionButtons);
}

function removeButtons() {
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}
