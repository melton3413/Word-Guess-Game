// Choose a theme for your game! You can choose any subject for your theme, though, so be creative!
// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).
// If the word is hawkeye, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: h a w k _ _ e.
// TODO Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// TODO After the user wins/loses the game should automatically choose another word and make the user play it.

// Pseudo-Code for Word Guess Game
// 0. Select a random word from Array
// 1. Display word underscore to screen
// 2. Store keys in a VAR/Function
// 3. Is key a letter?
// 4. Is key listed in chosen word?
// 5. If 4 is TRUE update dispArray in lower case
// 6. Loop over underscore to replace w/ correct letter
// 7. If # 4 is False then update WrongGuess array with that key
// 8. Check if wrong key in the wrongGuess array
// 9. If yes -> nothing
// 10. If no -> add wrong key to the WrongGuess array & decrease the guessesLeft
// 11. Display letters guessed in ALL CAPS
// 12. Display guesses remaining 
// 13. Display wins - match all keys with letter in chosen word
// 14. After wins/loss auto-repeat

var heroArray = ["Black-Widow", "Captain-America", "Hawkeye", "Hulk", "Iron-Man", "Thor"];
var wins = 0;
var loss = 0;
// Hyphenation display
var dashArray;
// Letters in chosen word
var letterArray;
// Pushed to screen
var dispArray;
var guessCorrect;
var guessLetters;
var guessRemaining;
var wordRandom;

function init() {
    // reset varibles
    dashArray = [];
    letterArray = [];
    dispArray = [];
    guessCorrect = [];
    guessLetters = [];
    guessRemaining = 15;

    // reset display elements
    document.getElementById('lettersGuessed').innerHTML = "";
    document.getElementById("guessesLeft").innerHTML = guessRemaining;
    console.log("init");
}

function startGame() {
    init();
    // Select random word from heroList array
    wordRandom = heroArray[Math.floor(Math.random() * heroArray.length)];
    // Convert CAPS to LC; splitting the word into array of characters
    letterArray = wordRandom.toLowerCase().split("");
    console.log(letterArray);
    dashArray = dashControl(letterArray);
    document.getElementById('dispWord').innerHTML = dashArray.join(" ");
}

// Insert a dash if word is hyphenated
function dashControl(letters) {
    let i;
    let dashArray = [];
    for (i = 0; i < letters.length; i++) { 
        if (letters[i] == "-") {
            dashArray.push("-");
        }
        else {
            dashArray.push("_");
        }
    }
    return dashArray;
}



// listen for key press
document.onkeyup = function(e) {
    let keyPress = e.key.toLowerCase();
    if (validateInput(keyPress) == true) {
        letterGuess(keyPress);
    }
};

// TODO: Fix issue with shift key input
function validateInput(keyPress) {
    if (keyPress.toLowerCase() == "shift"){
        return false;
    }

    var letters = /^[a-z]{1}$/i;
    if (!keyPress.match(letters)) {
        alert('Please input letters only');
        return false;
    } else if (guessLetters.includes(keyPress) ){
        alert('Letter already chosen');
        return false;
    } else {
        return true;
    }
}

function letterGuess(keyPress) {
    guessLetters.push(keyPress);
    if (letterArray.includes(keyPress)){
        for (i = 0; i < letterArray.length; i++) {
            if (letterArray[i] == keyPress)  {
                // Check if keyPress exists in word
                dashArray[i] = keyPress;
                guessCorrect.push(letterArray[i]);
                console.log("correct guess!");
            }
        }
    } else {
        guessRemaining --;
    }
    // Update elements
    document.getElementById("guessesLeft").innerHTML = guessRemaining;
    document.getElementById('dispWord').innerHTML = dashArray.join(" ");
    document.getElementById('lettersGuessed').innerHTML = guessLetters.join(", ").toUpperCase();
    winLoss();
}

// Figured out wins issue = used .toString
function winLoss() {
    //If letters guessed = chosen word letters
    if (letterArray.toString() == dashArray.toString()) {
        wins ++;
        alert("You Win!");
        startGame();
    }
    else if (guessRemaining <= 0) {
        loss++;
        alert("Thanos erases half the universe...");
        startGame();
    }
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = loss;

}

startGame();
