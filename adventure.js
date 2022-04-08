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
You can't tell whether they remind you more of dogs or cats. As you enter the room, they all fall silent, turning to look at you with sharp eyes. On \
the other side of the room, there is a doorway leading to another room. You...";

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
var fantasyAttackBackMonster = "You attempt to attack the monster on your back, but it is difficult to attack it when it is clinging to you. It's just \
out of reach of your swings, and the more you swing, the more tired you get. The monster digs its claws in deeper, causing you to fall to your knees in \
pain. Seeing the oportunity, the other monsters quickly fall upon you. You Die.";
var fantasyKeepFighting = "You do not give up. The monsters attack, leaping at you in pairs of two, or even all at once, but your resolve is clear. You \
dodge, attack, jump, roll. You are a whirl of action in the onslaught of attacks. Then, before you know it, you are standing in a room alone with a bonfire \
crackling in the center, all the monsters slain. What do you do?";
var fantasyRunAway = "You knew dungeons were supposed to be dangerous, but THIS dangerous?! You aren't cut out for this!! You turn away from the monsters \
and run away as fast as you can, not looking back. However, you have just killed one of the monster's kind. The monsters are not going to let you escape \
so easily. They are right on your tail, and you can hear them gaining on you. You dart down a corridor, unsure at where you even are anymore, anxious \
to get away as quickly as possible. Strangely, though, you suddenly don't feel the ground beneath you anymore. You look down like a coyote in a cartoon, \
and realize that there is a pit of spikes below you. Then, and only then, you fall into the spiketrap. You Die.";
var fantasyLootCamp = "You search the camp for any loot. You find some food around the fire, which you eat gratefully. In addition, you find some medical \
supplies to heal your wound, along with 12 gold! Satisfied, you...";
var fantasyOfferTrade = "You gesture to the camp to show that you would like to join the festivities. Seeming to understand, one of the monsters steps \
forward, picking up a loaf of bread. The monster gestures to itself and the bread, and then to you. You realize that it is wanting to trade with you. \
You search through your possessions for something to give the monsters in return. You choose...";
var fantasyOfferWalnuts = "You smile sheepishly and hold out a couple of walnuts that you found on the way to the dungeon. The monster glares at you for \
a second or two, before hitting the walnuts out of your hands. The monster then, incredibly insulted, leaps at you, and you have no time to defend youself \
before you are swiftly killed. You Die.";

var fantasyEnterKeyRoom = "You enter the next room, and you are immediately greeted by a huge monster with scales, fur, and three large, strangely \
pulsating skulls. The moment it sees you, it lets out a cry of surprise and attacks, swinging at you with a huge club. What do you do?";
var fantasyDodgeClub = "You jump out of the way of the club just in time, barely managing to avoid being clobbered. You...";
var fantasyAttackClub = "You attempt to attack the monster, but the HUGE CLUB HURTLING TOWARDS YOU puts a stop to this attempt fairly quickly. The club \
hits you with a crushing momentum, throwing you to the side of the room, where your head connects with a wall. You Die.";
var fantasyAttackJimbor = "You attack the monster, using its failed swing as an opportunity to get a good hit in. The monster reels back a little at \
the attack, and you have clearly done some amount of damage. However, the monster is quick to react, and it swings its club again at you in retaliation \
from your left side. You dodge...";
var fantasyAssessJimbor = "You stop mid-fight to assess the monster for weakness. You are surprised to see the monster also stop, as it begins to also \
assess you for weaknesses. The monster seems more intelligent than you first thought. You see several weaknesses, though, including its left neck, its \
right neck, and a spot where scales and fur meet just above its hip. You choose to attack the...";
var fantasyDodgeLeft = "Why. Why. Why would you do that. Why would you- The club was coming from the left, why would you dodge to the left?! That's not \
how dodging works! Whatever. Whatever. You Die, obviously.";
var fantasyDodgeForward = "You jump forwards, managing to avoid the club, and also bringing you closer to the monster, allowing you to land another hit \
on it. 'OW!' The monster says. It sounds like it speaks the same language as you. The monster retreats a few steps back, and you have the advantage. You...";
var fantasyDodgeBackward = "You jump backwards, feeling the wind of the club's swing on your face as you avoid being hit. You are too far away to attack \
from where you are, so the monster attacks again, this time using its other claw-like hand to try and swipe at you. You..."
var fantasyBothAssess = "At the same time you go for the monster's weakness, it goes for yours, and you wind up both twisting out of the way to avoid \
another. You look at the monster for a moment, before you...";

//Mystery Path
var mysteryStart = "You walk down a stone-bricked road under a gloomy evening sky, feeling crowded in by the buildings on each side. Another day in this cold-hearted city. Just your luck, it begins to rain. You...";

//Sci-Fi Path
var sciFiStart = "You are drifting through a dimension between what is real and what is unreal. You choose...";

//Endings
var endings = ["Rejection of the Call", "Right? Wrong", "Jurassic Park", "Sorry For Party Rocking", "A Monster You Just Can't Shake", 
"An Itch You Just Can't Scratch", "A Coward's Death", "Aw, Nuts!", "Don't Stop The Party!", "Welcome to the Club", "why"];

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
    } else if (state == fantasyAttackMonsters) {
        fantasyAttackMonstersOptions(buttonNum);
    } else if (state == fantasyDazeMonster) {
        fantasyDazeMonsterOptions(buttonNum);
    } else if (state == fantasyKeepFighting) {
        fantasyKeepFightingOptions(buttonNum);
    } else if (state == fantasyLootCamp) {
        fantasyLootCampOptions(buttonNum);
    } else if (state == fantasyGreetMonsters) {
        fantasyGreetMonstersOptions(buttonNum);
    } else if (state == fantasyOfferTrade) {
        fantasyOfferTradeOptions(buttonNum);
    } else if (state == fantasyEnterKeyRoom) {
        fantasyEnterKeyRoomOptions(buttonNum);
    } else if (state == fantasyDodgeClub) {
        fantasyDodgeClubOptions(buttonNum);
    } else if (state == fantasyAttackJimbor) {
        fantasyAttackJimborOptions(buttonNum);
    } else if (state == fantasyAssessJimbor) {
        fantasyAssessJimborOptions(buttonNum);
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
        weapon = "magic";
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

function fantasyAttackMonstersOptions(buttonNum) {
    if (buttonNum == 0) {
        responseAndEnd(fantasyShakeMonster, "A Monster You Just Can't Shake");
    } else if (buttonNum == 1) {
        state = fantasyDazeMonster;
        nextOption(state, ["Keep fighting", "RUN AWAY!!!!!!"]);
    } else {
        responseAndEnd(fantasyAttackBackMonster, "An Itch You Just Can't Scratch");
    }
}

function fantasyDazeMonsterOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyKeepFighting;
        nextOption(state, ["Search the camp for loot", "Continue to the next room"]);
    } else {
        responseAndEnd(fantasyRunAway, "A Coward's Death");
    }
}

function fantasyKeepFightingOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyLootCamp;
        nextOption(state, ["Go back to the dungeon's entrance", "Continue to the next room"]);
    } else {
        state = fantasyEnterKeyRoom;
        nextOption(state, ["Attempt to dodge club", ("Attack with your " + weapon)]);
    }
}

function fantasyLootCampOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyEnterDungeon;
        nextOption(state, ["Left", "Right", "Straight Ahead"]);
    } else {
        state = fantasyEnterKeyRoom;
        nextOption(state, ["Attempt to dodge club", ("Attack with your " + weapon)]);
    }
}

function fantasyGreetMonstersOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyEnterKeyRoom;
        responseAndOptions("'Uh... alright then..' You say, and you begin to cautiously step around the encampment. The monsters do not stop staring \
        at you. You can feel yourself sweating. 'Uh... Don't mind me, guys.' You say. 'Just gonna... make my way over to this door.' You continue \
        forward, one shaky step at a time, none of the monsters making any move to stop you, until, to your surprise, you make it to the other \
        side of the room. 'Oh!' You say, glancing first at the doorway in front of you, then the monsters behind you. 'Thanks for not, uh- killing \
        me!' You call out to the monsters. Then, your courage runs out, and you duck into the next room.", ["Attempt to dodge club", ("Attack with your " + weapon)]);
    } else if (buttonNum == 1) {
        state = fantasyOfferTrade;
        nextOption(state, ["A couple walnuts", "A ball of yellow string", "A note to yourself you wrote that says 'Remember to bring more useful tradeable items when you go adventuring'"]);
    } else {
        state = fantasyGreetMonsters;
        responseAndOptions("You really don't seem to get this whole 'they can't understand you' thing. The monsters continue to stare at you blankly when you ask them about treasure.", 
        ["Attempt to awkwardly shuffle past the monsters", "Gesture to the bonfire as a way of indicating that you'd like to join the festivities", "Ask about treasure"]);
    }
}

function fantasyOfferTradeOptions(buttonNum) {
    if (buttonNum == 0) {
        responseAndEnd(fantasyOfferWalnuts, "Aw, Nuts!");
    } else if (buttonNum == 1) {
        state = fantasyEnterKeyRoom;
        responseAndOptions("You smile sheepishly and hold out a ball of yellow string that you sometimes use to patch holes in your adventurer's outfit. \
        The monster takes it from you carefully, inspecting the string with its claws, before its pupils grow large, and it begins to make a sound \
        almost like a meow as it fiddles with the string in its hands. The other monsters step forward, curious, and they all become enraptured by \
        the string. Too enraptured. They begin to shove one another to get to the string, then they begin to scratch, making growling and hissing \
        noises as they dissolve into an all-out fight, the monsters viciously attacking one another for the yellow string. You wince, taking a step \
        back. You did not mean to do that. As quietly as you can, you shuffle away to the next room.", ["Attempt to dodge club", ("Attack with your " + weapon)]);
    } else {
        state = fantasyEnterKeyRoom;
        responseAndEnd("You smile sheepishly and hold out the note, for some reason thinking this is a good idea. You really should have brought \
        more useful tradeable items. The monster takes the note from your hands carefully, inspecting it for a few seconds, before it makes a motion \
        resembling a shrug, and tosses the note into the fire as kindling. Then, it hands you the loaf of bread, and the mosnters welcome you into the \
        festivities. You party into the night with the monsters, completely forgetting about your adventure, and having an all-around great time.",
        "Don't Stop The Party!");
    }
}

function fantasyEnterKeyRoomOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyDodgeClub;
        nextOption(state, [("Attack with your " + weapon), "Assess monster for weakspots"]);
    } else {
        responseAndEnd(fantasyAttackClub, "Welcome to the Club");
    }
}

function fantasyDodgeClubOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyAttackJimbor;
        nextOption(state, ["Left", "Forward", "Backward"]);
    } else {
        state = fantasyAssessJimbor;
        nextOption(state, ["Left neck", "Right neck", "Hip"]);
    }
}

function fantasyAttackJimborOptions(buttonNum) {
    if (buttonNum == 0) {
        responseAndEnd(fantasyDodgeLeft, "why");
    } else if (buttonNum == 1) {
        state = fantasyDodgeForward;
        nextOption(state, ["Attack again!", "Wait"]);
    } else {
        state = fantasyDodgeBackward;
        nextOption(state, [("Attempt to block hand with your " + weapon), "Dodge swing"]);
    }
}

function fantasyAssessJimborOptions(buttonNum) {
    state = fantasyBothAssess;
    nextOption(state, ["Nod appreciatively", "Attack again at the same spot"]);
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

