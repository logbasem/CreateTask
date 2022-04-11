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

//Fantasty Path states and responses
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
var fantasyAttackAgain = "You attack Jimbor again, quick as lightning, and do significant damage. 'GAHHH!' The monster says, taking a wild swing at you.";
var fantasyWait = "You wait before going in for another attack. The monster soon gathers its bearings again, and you lose your shot at catching it when it's \
weak. Still, you see a glimmer of something like respect in the monster's eyes. In solidarity, it allows you a moment to prepare yourself, too, before it \
attacks.";
var fantasyBlockJimbor = "You manage to block Jimbor's attack, but not without taking some damage.";
var fantasyDodgeJimbor = "You dodge again, but don't move quite quick enough, and the hit catches you in the side, forcing you to take a moment before \
you leap back into action.";
var fantasyNodAppreciatively = "You nod appreciatively at the monster. The monster nods back, and you launch back into battle."
var fantasyAttackSameSpot = "You attack again immediately, going for the same spot. This time, you succeed, doing signicant damage to the monster. It lets \
out a mighty cry, clutching at the spot with one hand as it swings with the other at your weakness- your oh-so vulnerable neck. You are able to avoid \
being killed, but the swing catches you in the shoulder, drawing blood, and you wince with pain."
var fantasyJimborImplore = "The battle rages on for a long time, with you and the monster both giving it your all. You are fairly evenly matched, the \
monster matching your every strike, and you matching its. You dodge and parry and swing and roll and jump more times than you can count, and the battle \
goes on and on, a neverending dance of claws and fists. At one point, you and the monster step back for a moment, both of you exhausted. As you stand up \
and prepare to return to the battle, however, the monster does not. Instead, it sets its club on the ground, and stands there for a moment, looking at you. \
You feel confused. What is it doing? You stop, too, and the monster says to you, 'Listen, merciful adventurer. We need not be enemies. You and I are more \
alike than you might think. We both have skin, have bones, have beating hearts and strangely pulsating skulls. Please, brave adventurer- have mercy. You \
have fought well, as have I, and I wish to fight no longer. Let us both part from this as allies, rather than foes. Would you make peace with me, friend?'";

var fantasyBefriendJimbor = "You stop and look at the monster, amazed at the eloquence of its words. You realize that it is right. You are not so different \
from it. Why should you fight? 'What is your name?' You ask. The monster smiles wide, its sharp teeth on full display, but you do not feel threatened. \
The monster tells you that its name is Jimbor, and you tell it your name in return. As you speak to Jimbor, you learn about its friends, its family, its \
monster home. You tell Jimbor about…";
var fantasyTakeKey = " You put the key in your pocket, and then you look around the room. You see no unsearched areas, so, you return back to the dunegon's \
entrance.";
var fantasyKillJimbor = "'Begone, foul beast!' You shout. You kill the monster without remorse, and then you loot the body for treasure, finding nothing. \
Then, you search the room, and you find a gold key."
var fantasyMentalNote = " You remember your earlier mental note to look for keys. This must be the key you were looking for!";
var fantasyEverything = "You tell Jimbor about your travels, your hopes, your dreams, your favorite color, your deepest fear. You tell Jimbor about the \
family you left behind, about the scar on your elbow from your very first battle. You tell Jimbor you've never had a friend like it before. Jimbor listens, \
and it offers its support to you. You speak for hours, and as you do, you realize that maybe, the real treasure was friendship, all along.";
var fantasyFellowAdventurer = "You take out your journal and show Jimbor all the entries you have written about the fellow adventurer who you have loved \
for years. You tell Jimbor all your favorite things about this adventurer, you tell Jimbor about the day you first realized you loved this adventurer. Jimbor \
listens to you for a long time before it speaks. 'You know, I am a married monster,' Jimbor begins, 'It sounds as if you truly love this adventurer, and if \
that is the case, my dear friend, I say you should go for it. Leave this dungeon right now, and go and tell this adventurer how you feel.' You realize that \
Jimbor is right. You have waited for so long, and you need to act! You leave the dungeon immediately in search of love, thanking Jimbor for its help. When \
you wed your fellow adventurer, a few months later, you invite Jimbor and its family to your wedding.";
var fantasyAskTreasure = "You tell Jimbor about your reason for coming to this dungeon: to find the treasure rumored to be here. Jimbor tilts its head, \
'Treasure?' It says. It turns around picking something up from behind it. 'Would this help?' Jimbor says, holding out a gold key.";
var fantasyYesKey = " 'Yes! Yes, Jimbor- thank you!' You say. 'Thank you so much for your help, friend.' You tell Jimbor.";

var fantasyAttemptUnlock = "You take out the key from your pocket, gazing excitedly at the chest in front of you. This is it: the moment of truth. This \
is the reason why you came to this dungeon. You slide the key into the lock and- It gets stuck. The lock has been warped, and it's too small for the key \
you have. The key doesn't fit. All this work, and the key doesn't fit. What now?";
var fantasyTreasure = "You look through your items, and find nothing of much use, and certainly nothing to break the lock with. You can't use your \
weapon, either, because that's not its intended purpose in the story. But wait! You remember the rock you have carried with you all this time- \
Your dearest friend, your lifelong companion. You take the rock out from your pocket. 'Will you help me, friend?' You ask the rock. The rock says \
nothing, but you feel that the answer is yes. You swing the rock in your hands and use it to break a hole in the lock large enough for the key to \
be able to fit again. You turn the key in the lock with a satisfying click, and the chest unlocks. Inside, you find exactly what you came here for, \
your heart's desire, your white whale: treasure. The chest is full to bursting with coins, jewlery, gemstones, and all sorts of expensive items, each \
piece worth enough on its own to make you rich. Put together, you can't even begin to imagine how much it's all worth. You've worked so hard for this \
moment, and it's hard to believe that it's finally here. You think back to all the moments that you brought you here. Every monster fought, every time \
you found yourself ready to give up. It was all worth it, for this moment, right now. You think about what you'll do with this money, you think about your \
family back home. You want to go and visit them. You feel a feeling deep inside, and soon you recognize it as satisfaction. Complete satisfaction of a quest \
completed successfully. You did it. You found your treasure.";
var fantasyNoRock = "You look through your items, and find nothing of much use, and certainly nothing to break the lock with. You can't use your \
weapon, either, because that's not its intended purpose in the story. You cry out in frustration. All of this- all of this work- for nothing. Nothing! \
How could this be?! You try to break the lock with your fist, but only succeed in giving yourself a splinter on the wood of the chest. Then, you cry. If \
only you'd found something to break the lock with. Then, you wouldn't be in this situation.";
var fantasyGiveUp = "You stare at the lock for a few seconds, then the key in your hand. You take a moment to look around the room you're in. You take a \
deep breath. 'You know what!' You say to no one in particular. 'I'm done.' You say. 'I'm done with all of this. I'm so done. I hate this stupid dungeon \
and this stupid key and this stupid-' You kick the chest in front of you, '-Treasure!' You drop the key to the ground, then wave dramatically to the room \
around you. 'Good riddance, dungeon!' You say. You go home."
var fantasyCurseGods = "You fall to your knees, throwing the key to the ground as you cast your head upwards. 'CURSE YOU OH CRUEL GODS ABOVE!!' You exclaim \
at the top of your lungs. Your voice echoes through the dungeon. 'IS MY LIFE SOME SORT OF JOKE TO YOU? DO YOU ENJOY THIS? MAKING ME MISERABLE?' You scream. \
'CURSE YOU ALL!' Then, you stand up, fuming, and storm out of the dungeon once and for all, done with this game. The moment you step outside, you are struck by lightning.";

//Mystery Path states and responses
var mysteryStart = "You walk down a stone-bricked road under a gloomy evening sky, feeling crowded in by the buildings on each side. Another day in this cold-hearted city. Just your luck, it begins to rain. You...";

//Sci-Fi Path states and responses
var sciFiStart = "You are drifting through a dimension between what is real and what is unreal. You choose...";

//Endings
var endings = ["Rejection of the Call", "Right? Wrong", "Jurassic Park", "Sorry For Party Rocking", "A Monster You Just Can't Shake", 
"An Itch You Just Can't Scratch", "A Coward's Death", "Aw, Nuts!", "Don't Stop The Party!", "Welcome to the Club", "why", "The Real Treasure", 
"Love Wins", "The REAL Real Treasure (Treasure)", "So No Rock?", "Never Gonna-", "CURSES!!!"];

//state initialized to the first question in the game
var state = adventureReady;

//fantasy global variables
var weapon = "";
var rock = false;
var key = false;
var mentalNote = false;
var straightPathSearched = false;
var monsterCampKilled = false;

//calls function to start the game with first question and options
gameStart();

//function to reset global variables
function resetVariables() {
    weapon = "";
    rock = false;
    key = false;
    mentalNote = false;
    straightPathSearched = false;
    monsterCampKilled = false;
}

//function to create buttons in button grid based on an array of options
//Input: optionArray, an array containing between 1 and 3 strings that are used for button texts
//Output: new button(s) displayed on the screen with the given number of buttons, with each button having the text of each respective string in array
function setButtons(optionArray) {
    //iteration
    for (let i = 0; i < optionArray.length; i++) {
        createButton(optionArray[i], buttonClicked, i)
    }
}

//function to prompt a response to the user and then move on to the next question
//Input: responseString, a string containing the text for the response, and buttonArray, an array containing the options for the next question
//Output: Response with responseString text and "Continue" button, and then next question with buttonArray options
function responseAndOptions(responseString, buttonArray) {
    textElement.innerText = responseString;
    removeButtons();
    createButton("Continue", responseClicked, buttonArray);
}

//function to prompt a response to the user and then produce game ending
//Input: responseString, a string containing the text for the response, and endingName, the name of this game ending
//Output: Response with responseString text and "OK" button, and then ending screen with ending name
function responseAndEnd(responseString, endingName) {
    textElement.innerText = (responseString + " END");
    removeButtons();
    createButton("OK", gameEnd, endingName);
}

//function for when the continue button is pushed on a response
//Input: buttonArray, an array containing a given number of strings that represent options
//Output: Next set of question and options for the user
function responseClicked(buttonArray) {
    nextOption(state, buttonArray);
}

//function to start the game with first state and buttons
function gameStart() {
    textElement.innerText = state;
    removeButtons();
    setButtons(["Yes", "No"]);
}

//Figure out bold text for ending name
//function to end the game
//Input: endingName, a string containing the nanme of this ending
//Output: Displayed ending name and the number of the ending within the ending list, then initiates option to play again
function gameEnd(endingName) {
    state = "END";
    nextOption("You have achieved the ending: " + endingName + " (Ending " + (endings.indexOf(endingName)+1) + " out of " +
    endings.length + "). Play again?", ["Yes", "No"]);
}

//function to display next option
//Input: optionTitle, a string containing the question for this option, optionButtons, an array containing the choices/options for this option
//Output: Next option displayed with question from optionTitle and buttons from optionButtons
function nextOption(optionTitle, optionButtons) {
    textElement.innerText = optionTitle;
    removeButtons();
    setButtons(optionButtons);
}

//function to create a new button
//Input: buttonText, text on the button, clickFunction, function to initiate when button is clicked, and clickParameter, parameter for clickFunction
//Output: A new button in the button grid with a function for when it is clicked
function createButton(buttonText, clickFunction, clickParameter) {
    var button = document.createElement("button");
    button.innerText = buttonText;
    button.classList.add("btn");
    button.addEventListener("click", () => clickFunction(clickParameter));
    optionButtonsElement.appendChild(button);
}

//function to remove all current buttons
function removeButtons() {
    //iteration
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
}

//function that maps each state to its story path
//Input: The number of the button clicked by the user (based on its position in the button array)
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
    } else if (state == fantasyDodgeForward) {
        fantasyDodgeForwardOptions(buttonNum);
    } else if (state == fantasyDodgeBackward) {
        fantasyDodgeBackwardOptions(buttonNum);
    } else if (state == fantasyBothAssess) {
        fantasyBothAssessOptions(buttonNum);
    } else if (state == fantasyJimborImplore) {
        fantasyJimborImploreOptions(buttonNum);
    } else if (state == fantasyBefriendJimbor) {
        fantasyBefriendJimborOptions(buttonNum);
    } else if (state == fantasyAttemptUnlock) {
        fantasyAttemptUnlockOptions(buttonNum);
    }
    else {
        playAgainOptions(buttonNum);
    }
}

//PATHS (a lot of selection)
function playAgainOptions(buttonNum) {
    if (buttonNum == 0) {
        state = adventureReady;
        resetVariables();
        gameStart();
    } else {
        textElement.innerText = "Thank you for playing!";
        removeButtons();
    }
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

//FANTASY PATH
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
        if (straightPathSearched) {
            state = fantasyEnterDungeon;
            responseAndOptions("This path has already been completely searched.", ["Left", "Right", "Straight Ahead"]);
        } else if (monsterCampKilled) {
            state = fantasyEnterKeyRoom;
            responseAndOptions("You walk into the room that was previously the monsters' encampment. Now, it is devoid of life, the remains of your \
            destruction scattered around the room. You walk past it all and enter the next room.", ["Attempt to dodge club", ("Attack with your " + weapon)]);
        } else {
            state = fantasyForwardPath;
            nextOption(state, ["Attack the monsters before they can attack you", "Greet the monsters", "Stand still. Maybe they're like veliciraptors- if you don't move, they can't see you"]);
        }
    }
}

function fantasyLeftPathOptions(buttonNum) {
    if (buttonNum == 0) {
        if (key) {
            state = fantasyAttemptUnlock;
            nextOption(fantasyAttemptUnlock, ["Look for something to hit the lock with", "Give up", "Curse the gods"]);
        } else {
            state = fantasyOpenChest;
            nextOption(state, ["Search the room for a key", "Go back to the start"]);
        }
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
        monsterCampKilled = true;
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

function fantasyDodgeForwardOptions(buttonNum) {
    state = fantasyJimborImplore;
    if (buttonNum == 0) {
        responseAndOptions(fantasyAttackAgain, ["Befriend", "Kill"]);
    } else {
        responseAndOptions(fantasyWait, ["Befriend", "Kill"]);
    }
}

function fantasyDodgeBackwardOptions(buttonNum) {
    state = fantasyJimborImplore;
    if (buttonNum == 0) {
        responseAndOptions(fantasyBlockJimbor, ["Befriend", "Kill"]);
    } else {
        responseAndOptions(fantasyAttackSameSpot, ["Befriend", "Kill"]);
    }
}

function fantasyBothAssessOptions(buttonNum) {
    state = fantasyJimborImplore;
    if (buttonNum == 0) {
        responseAndOptions(fantasyNodAppreciatively, ["Befriend", "Kill"]);
    } else {
        responseAndOptions(fantasyAttackSameSpot, ["Befriend", "Kill"]);
    }
}

function fantasyJimborImploreOptions(buttonNum) {
    if (buttonNum == 0) {
        state = fantasyBefriendJimbor;
        nextOption(state, ["Everything", "The fellow adventurer who you’ve loved for years but have never had the courage to tell", 
            "Your search for treasure"]);
    } else {
        state = fantasyEnterDungeon;
        straightPathSearched = true;
        key = true;
        if (mentalNote) {
            responseAndOptions((fantasyKillJimbor + fantasyMentalNote + fantasyTakeKey), ["Left", "Right", "Straight Ahead"]);
        } else {
            responseAndOptions(fantasyKillJimbor + fantasyTakeKey, ["Left", "Right", "Straight Ahead"]);
        }
    }
}

function fantasyBefriendJimborOptions(buttonNum) {
    if (buttonNum == 0) {
        responseAndEnd(fantasyEverything, "The Real Treasure");
    } else if (buttonNum == 1) {
        responseAndEnd(fantasyFellowAdventurer, "Love Wins");
    } else {
        state = fantasyEnterDungeon;
        straightPathSearched = true;
        key = true;
        if (mentalNote) {
            responseAndOptions((fantasyAskTreasure + fantasyMentalNote + fantasyYesKey + fantasyTakeKey), ["Left", "Right", "Straight Ahead"]);
        } else {
            responseAndOptions(fantasyAskTreasure + fantasyTakeKey + fantasyYesKey, ["Left", "Right", "Straight Ahead"]);
        }
    }
}

function fantasyAttemptUnlockOptions(buttonNum) {
    if (buttonNum == 0) {
        if (rock) {
            responseAndEnd(fantasyTreasure, "The REAL Real Treasure (Treasure)");
        } else {
            responseAndEnd(fantasyNoRock, "So No Rock?");
        }
    } else if (buttonNum == 1) {
        responseAndEnd(fantasyGiveUp, "Never Gonna-");
    } else {
        responseAndEnd(fantasyCurseGods, "CURSES!!!");
    }
}
