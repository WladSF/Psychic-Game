//Creating global variables//
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 10;
var userGuess = "";

//Create an array with possible letters to choose from//
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Choosing a random letter from the options array. This is the computer's choice//
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

//When the user presses a key, it will run the following function://
document.onkeyup = function (event) {

    //Determines which key was pressed.Capture the key pressed by user, stores it in userGuess variable. Ensures is a character from the alphabet string.//
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var check = alphabet.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again!");
        return false;

    } else if (check === true) {
        guessesLeft--;
        guessesSoFar.push(userGuess);               //This will store and display the user's choice of letters. It will push it into guessesSoFar array.//

        if (userGuess === computerChoice) {         //If user guesses correctly, wins go up 1 point, and the game is reset.//
            alert("Congrats, you won!");
            wins++;
            gameReset();
        }

        if (guessesLeft === 0) {                    //If guessesLeft go down to zero, losses go up 1 point, and the game is reset.//
            alert("Game over, you lost!");
            losses++;
            boo.play();
            gameReset();
        }
    };

    //Selecting//
    document.getElementById('guessesSoFar').textContent = "Your guesses so far: " + guessesSoFar;
    document.getElementById('guessesLeft').textContent = "Guesses left: " + guessesLeft;
    document.getElementById('wins').textContent = "Wins: " + wins;
    document.getElementById('losses').textContent = "Losses: " + losses;

    writeStats();
};

//This is the function to tell the three variables below to reset.//
var gameReset = function () {
    guessesSoFar = [];
    guessesLeft = 10;
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
};

function writeStats() {
    console.log(guessesSoFar);
    console.log(guessesLeft);
    console.log(wins);
    console.log(losses);
    console.log(computerChoice);
    console.log(userGuess);
};

function hardReset() {
    location.reload();
};

