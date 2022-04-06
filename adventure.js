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

//Fantasty Path
var fantasyStart = "Aha! Another day for an adventure! You are completely prepared for the adventure ahead! You reach into your pocket and pull out...";
var fantasyEnterDungeon = "You walk down a flight of crumbling stairs, the path ahead lit by flickering torches. This dungeon is rumored to contain numerous \
foul beasts and dangers, but is also rumored to harbor treasure. That is the reason you have come here. Eventually, you encounter a fork in the path. One \
direction leads left, one right, and one straight ahead. Which do you choose?";
var fantasyLeftPath = "You walk down the left path, and as you do, the path grows narrower and narrower, to the point at which you are forced to shuffle \
sideways to continue walking. After some amount of uncomfortable shuffling, you reach a room. The room appears to be empty, save for a single wooden \
chest in the center. Could this be the treasure you search for, already? What do you do?";
var fantasyRightPath = "You walk down the right path with utter confidence, humming a tune to yourself as you go. You continue walking. You continue \
walking. You continue walking. You continue walking. ...This path is awfully long, isn't it? Suddenly, you hear a clicking sound, and you look down \
to see a hidden pressure plate beneath your feet. Before the path explodes beneath you, you have just enough time to think 'AAAHHFKJSISUHASIUFHCISD!!!' \
before you are blown into a million adventurer pieces. You Die.";
var fantasyForwardPath = "You continue on straight ahead, ignoring the paths to either side of you. You have adventuring to do! As you walk, you realize \
that the hallway is getting brighter around you. You pick up the pace a little, anxious to see what the source of light is. Then, you see it. You arrive \
in a huge room in the dungeon, lit by a bright bonfire in the center. Around it are an array of strange monsters, dancing and laughing around \
the flames. They have long fuzzy tails, cream-colored fur crusted with dirt, and sharp teeth visible when they open their mouths. \
You can't tell whether they remind you more of dogs or cats. As you enter the room, they all fall silent, turning to look at you with sharp eyes. You...";

var fantasyOpenChest = "You attempt to open the chest. It's locked. ...That makes sense. You...";
var fantasyIgnoreChest = "You eye the chest suspiciously. You do not think the treasure will be achieved this easily. Most likely, the chest is trap.";
var fantasyFindDoor = "With your attention turned away from the chest, you realized that you missed a doorway in one of the walls, painted to blend in. You...";
var fantasyAttackMonsters = "You attack the closest monster, catching it by surprise and quickly killing it. The other monsters \
immediately leap into action, making noises between snarls and hisses as they throw on their armor and leap towards you. A monster leaps onto your back, \
digging its sharp claws into your skin, leaving a trail of seering pain in its wake. You...";
var fantasyGreetMonsters = "'Uh... hey there, friends!' You call to the monsters. They tilt their heads at you in confusion. You get the feeling that \
they do not understand you. You raise up your hands as a sign that you mean no harm. 'I mean no harm!' You say, intelligently. The monsters continue to do nothing but stare. You..."
var fantasyVeliciraptor = "You stand perfectly still, not saying a word. The monsters stare at you for several seconds. It kind of seems like they can still \
see you, however you are determined to stick to the plan. Then, the largest of the monsters lets out a garbled word, and the nearest monster leaps at you, teeth-first. How did \
they see through your foolproof plan?!!! You have no time to defend yourself before you are swiftly killed. You Die.";

var fantasyDoorOpened = "You try the handle of the hidden door. To your surprise, it's unlocked. You open the door, and find a small room with nothing but \
a single average-looking rock on the floor. What do you do?";
var fantasyInspectRock = "You pick up the rock and turn it over in your hands. From what you can tell, it's a disappointingly average-looking rock. It \
has no shine to it and is the same gray color as the walls of the dungeon. Do you keep the rock?";
var fantasyKickRock = "You kick the rock, annoyed at it for not being treasure. However, the rock is sharper and heavier than it looks, and you stub your \
toe trying to kick it. You glare at the rock, your now mortal enemy. The rock stares back. What do you do?";
var fantasyIgnoreRock = "You decide to ignore the rock and go back to the dungeon's entrance, finding this path to be rather useless.";
var fantasyAttackRock = "You move to attack the rock with all your might, reeling back. You aim to destroy this foe once and for all. However, as your \
mighty momentum brings you forward, you trip on a crack in the cobblestone floor beneath you, and you lose your balance, falling backwards. Your head \
hits the dungeon floor, and your vision goes dark. In your last moments, the rock is the last thing you see, sitting unharmed right in front of you. \
You swear you can hear it laughing at you. You Die.";
var fantasyCurseRock = "'Curse you, rock, my greatest foe! You think you are better than I simply because you have no mortal form, and yet all you do \
is sit on the floor, friendless, adventureless, useless. You have no purpose in this world, and your malice does not affect me. I am impervious to you. \
Though you have defeated me this time, in the long run, it is I who has defeated you. For the rest of your days, I hope you remember that, foul rock.' \
You say to the rock. You feel that you have hurt the rock's feelings. Good. It deserved it. With your work here done, you return to the dungeon's entrance.";

var fantasyShakeMonster = "You attempt to shake off the monster clinging to your back, to no avail. It digs its claws in deeper, causing you to fall to your \
knees in pain. Seeing the oportunity, the other monsters quickly fall upon you. You Die.";
var fantasyDazeMonster = "You fall back onto the ground in an attempt to daze the monster. Immediately, you feel the monster's grip relent on your back, \
and you hop to your feet. There are already more monsters approaching, surrounding you. You...";


//Mystery Path
var mysteryStart = "You walk down a stone-bricked road under a gloomy evening sky, feeling crowded in by the buildings on each side. Another day in this cold-hearted city. Just your luck, it begins to rain. You...";

//Sci-Fi Path
var sciFiStart = "You are drifting through a dimension between what is real and what is unreal. You choose...";

//Endings
var endings = ["Rejection of the Call", "Right? Wrong", "Jurassic Park", "Sorry For Party Rocking"];

var state = adventureReady;
var weapon = "";
var rock = false;
var mentalNote = false;

gameStart();

function setButtons(optionArray) {
    for (let i = 0; i < optionArray.length; i++) {
        createButton(optionArray[i], buttonClicked, i)
    }
}

function responseAndOptions(responseString, buttonArray) {
    textElement.innerText = responseString;
    removeButtons();
    createButton("Continue", responseClicked, buttonArray);
}

function responseAndEnd(responseString, endingName) {
    textElement.innerText = (responseString + " END");
    removeButtons();
    createButton("OK", gameEnd, endingName);
}

function buttonClicked(buttonNum) {
    if (state == adventureReady) {
        adventureReadyOptions(buttonNum);
    } else if (state == howAreYou) {
        howAreYouOptions(buttonNum);
    } else if (state == fantasyStart) {
        fantasyStartOptions(buttonNum);
    } else if (state == fantasyEnterDungeon) {
        fantasyEnterDungeonOptions(buttonNum);
    } else if (state == fantasyLeftPath) {
        fantasyLeftPathOptions(buttonNum);
    } else if (state == fantasyForwardPath) {
        fantasyForwardPathOptions(buttonNum);
    } else if (state == fantasyOpenChest) {
        fantasyOpenChestOptions(buttonNum);
    } else if (state == fantasyFindDoor) {
        fantasyFindDoorOptions(buttonNum);
    } else if (state == fantasyDoorOpened) {
        fantasyDoorOpenedOptions(buttonNum);
    } else if (state == fantasyInspectRock) {
        fantasyInspectRockOptions(buttonNum);
    } else if (state == fantasyKickRock) {
        fantasyKickRockOptions(buttonNum);
    }
    else {
        playAgainOptions(buttonNum);
    }
}

function responseClicked(buttonArray) {
    nextOption(state, buttonArray);
}

function adventureReadyOptions(buttonNum) {
    if (buttonNum == 0) {
        state = howAreYou;
        responseAndOptions("Huzzah! Let the adventure begin!", ["Wonderful!", "Terrible.", "Somewhere in-between."]);
    } else {
        responseAndEnd("You go home.", "Rejection of the Call");
    }
}

function howAreYouOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyStart;
        nextOption(state, ["Your sword!", "Your wand!", "Nothing!"]);
    } else if (buttonNum == 1) {
        state = mysteryStart;
        nextOption(state, ["Open your umbrella", "Turn up your collar", "Ignore it"]);
    } else {
        state = sciFiStart;
        nextOption(state, ["What is real", "What is unreal"]); //what is love? baby don't hurt me
    }
}

function fantasyStartOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyEnterDungeon;
        weapon = "sword";
        responseAndOptions("An adventurer never leaves home without their sword! You forge ahead.", ["Left", "Right", "Straight Ahead"]);
    } else if (buttonNum == 1) {
        state = fantasyEnterDungeon;
        weapon = "wand";
        responseAndOptions("A wizard never leaves home without their wand! You forge ahead.", ["Left", "Right", "Straight Ahead"]);
    } else {
        state = fantasyEnterDungeon;
        weapon = "bare hands";
        responseAndOptions("...You are slightly less prepared than you thought. Nevertheless, you forge ahead.", ["Left", "Right", "Straight Ahead"]);
    }
}

function fantasyEnterDungeonOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyLeftPath;
        nextOption(state, ["Open chest", "Ignore chest"]);
    } else if (buttonNum == 1) {
        responseAndEnd(fantasyRightPath, "Right? Wrong");
    } else {
        state = fantasyForwardPath;
        nextOption(state, ["Attack the monsters before they can attack you", "Greet the monsters", "Stand still. Maybe they're like veliciraptors- if you don't move, they can't see you"]);
    }
}

function fantasyLeftPathOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyOpenChest;
        nextOption(state, ["Search the room for a key", "Go back to the start"]);
    } else {
        state = fantasyFindDoor;
        responseAndOptions(fantasyIgnoreChest, ["Open door", "Go back to the start"])
    }
}

function fantasyForwardPathOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyAttackMonsters;
        nextOption(state, ["Attempt to shake the monster off", "Fall flat on your back in an attempt to daze the monster into letting go", ("Attack the monster with your " + weapon)]);
    } else if (buttonNum == 1) {
        state = fantasyGreetMonsters;
        nextOption(state, ["Attempt to awkwardly shuffle past the monsters", "Gesture to the bonfire as a way of indicating that you'd like to join the festivities", "Ask about treasure"]);
    } else {
        responseAndEnd(fantasyVeliciraptor, "Jurassic Park");
    }
}

function fantasyOpenChestOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyFindDoor;
        mentalNote = true;
        responseAndOptions("You are unable to find the key in the room, but you make a mental note to keep an eye out for keys in the future.", ["Open door", "Go back to start"]);
    } else {
        state = fantasyEnterDungeon;
        nextOption(state, ["Left", "Right", "Straight Ahead"]);
    }
}

function fantasyFindDoorOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyDoorOpened;
        nextOption(state, ["Inspect rock", "Kick rock", "Ignore rock"]);
    } else {
        state = fantasyEnterDungeon;
        nextOption(state, ["Left", "Right", "Straight Ahead"]);
    }
}

function fantasyDoorOpenedOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyInspectRock;
        nextOption(state, ["Yes", "No"]);
    } else if (buttonNum == 1) {
        state = fantasyKickRock;
        nextOption(state, [("Attack the rock with your " + weapon), "Curse the rock for its uselessness"]);
    } else {
        state = fantasyEnterDungeon;
        responseAndOptions(fantasyIgnoreRock, ["Left", "Right", "Straight Ahead"]);
    }
}

function fantasyInspectRockOptions(buttonNum) {
    if (buttonNum == 0) {
        rock = true;
        state = fantasyEnterDungeon;
        responseAndOptions("You decide to keep the rock, and slip it into your pocket. As soon as you do, you feel a sense of accomplishment. This rock \
        will be your companion forevermore. You decide to go back to the dungeon's entrance.", ["Left", "Right", "Straight Ahead"]);
    } else {
        state = fantasyEnterDungeon;
        responseAndOptions("You put the rock down. You don't think you're ready to provide for both a rock and yourself. You decide to go \
        back to the dungeon's entrance.", ["Left", "Right", "Straight Ahead"]);
    }
}

function fantasyKickRockOptions(buttonNum) {
    if (buttonNum == 0) {
        responseAndEnd(fantasyAttackRock, "Sorry For Party Rocking");
    } else {
        state = fantasyEnterDungeon;
        responseAndOptions(fantasyCurseRock, ["Left", "Right", "Straight Ahead"]);
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

//Figure out bold text for ending name
function gameEnd(endingName) {
    state = "END";
    nextOption("You have achieved the ending: " + endingName + " (Ending " + (endings.indexOf(endingName)+1) + " out of " +
    endings.length + "). Play again?", ["Yes", "No"]);
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

function createButton(buttonText, clickFunction, clickParameter) {
    var button = document.createElement("button");
    button.innerText = buttonText;
    button.classList.add("btn");
    button.addEventListener("click", () => clickFunction(clickParameter));
    optionButtonsElement.appendChild(button);
}

function removeButtons() {
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}

