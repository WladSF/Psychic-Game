// Essentially, the app randomly picks a letter,//
// and the user has to guess which letter the app chose //

// Must create a variable for user input, computer choice, 
//possible letters, wins, losses, guesses left, guesses so far.//

//Creating global variables//
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 10;

//When the user presses a key, it will run the following function://
document.onkeyup = function (event) {

    //Determines which key was pressed.Capture the key pressed by user, stores it in userGuess variable.//
    var userGuess = event.key;

    //This will store and display the user's choice of letters. It will push it into guessesSoFar array.//
    guessesSoFar.push(userGuess);

    //Create an array with possible letters to choose from.//
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    //Choosing a random letter from the options array. This is the computer's guess.//
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    //If user guesses correctly, wins go up 1 point, and the game is reset.//
    if (userGuess === computerChoice) {
        wins++;
        gameReset();
    }
    //If user chooses wrong letter, guessesLeft should go down 1 point.// 
    else {
        guessesLeft--;
    }

    //If guessesLeft go down to zero, losses go up 1 point, and the game is reset.//
    if (guessesLeft === 0) {
        losses++;
        gameReset();
    }
    //Selecting//
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guessesSoFar').innerHTML = "Your guesses so far: " + guessesSoFar;
}

//This is the fiunction to tell the two variables below to reset.//
var gameReset = function () {
    guessesSoFar = [];
    guessesLeft = 10;
}

