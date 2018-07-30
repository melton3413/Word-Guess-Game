// Choose a theme for your game! You can choose any subject for your theme, though, so be creative!
// Use key events to listen for the letters that your players will type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

// Pseudo-Code for Word Guess Game w/ Josh TA

// 1. Store key in a VAR/Function
// 2. Is key a letter?
// 3. Is key listed in randomWord?
// 4. Loop over dash to replace dash w/ correct letter
// 5. If # 3 is False then update WrongGuess array with that key
// 6. Is the wrong key in the wrongGuess array?
// 7. If yes -> nothing
// 8. If no -> add wrong key to the WrongGuess array & decrease the guessesLeft

// Initial Pseudo Code
// Selecting Random Word
// Display selected word to screen
// Reveal selected letters
// Display guesses remaining
// Display letters already guessed
// After wins/loss auto-repeat


var heroArray = ["Black-Widow", "Captain-America", "Hawkeye", "Hulk", "Iron-Man", "Thor"];
var wins = 0;
var loss = 0;
var dash = [];
var guessCorrect = [];
var guessWrong = [];
var guessLetters = [];
var guessRemaining = 15;
var letterArray = [];
var wordDisp = "";
var wordRandom = "";

function startGame() {
    // Select random word from heroList array
    wordRandom = heroArray[Math.floor(Math.random() * heroArray.length)];
    // Convert CAPS to LC; Splitting the word into array of characters
    letterArray = wordRandom.toLowerCase().split("");
    console.log(letterArray);
    // Insert a dash if word is hyphenated
    var i;
    // Display wordRandom as dash
    for (i = 0; i < letterArray.length; i++) { 
        if (letterArray[i] == "-") {
            dash.push("-");
        }
        else {
            dash.push("_");
        }
    }
    
    // Compare wordRandom, lettersGuessed
    // wordDisplay = stringComparison();
    // function wins() {   
    // }

    document.getElementById('dispWord').innerHTML = wordDisp;
    document.getElementById('wins').innerHTML = wins;
 
    //console.log(wins);   
}
function dashControl() {
    var i;
    for (i = 0; i < letterArray.length; i++) { 
        if (letterArray[i] == "-") {
            dash.push("-");
        }
        else {
            dash.push("_");
        }
    }
}
// TODO: Fix issue with shift key input
function validateInput(keyPress) {
    var letters = /^[a-z]*$/i;
    if (!keyPress.match(letters)) {
        alert('Please input letters only');
        return false;
    }else {
        return true;
    }
}
document.onkeyup = function(e) {
    var keyPress = e.key.toLowerCase();
    if (validateInput(keyPress) == true) {
        guessLetters.push(keyPress);
    for (i = 0; i < letterArray.length; i++) { 
        if (letterArray[i] == keyPress)  {
            console.log("this works!");
            dash[i] = keyPress
            guessCorrect.push(letterArray[i]);
            console.log("correct guess!");
        }
    }
    document.getElementById('lettersGuessed').innerHTML = guessLetters;
    }
    console.log(keyPress);
    console.log(wordRandom);
    console.log(guessLetters);
}
startGame();
