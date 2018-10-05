// // Essentially, the app randomly picks a letter, 
// and the user has to guess which letter the app chose //

// Must create a variable for user input, computer choice, 
//possible letters, wins, losses, guesses left, guesses so far//

//Create variables
var wins = 0;
var losses = 0;
var guessesSoFar = [];
var guessesLeft = 10;

//When the user presses a key, it will run the following function://
    document.onkeyup = function (event) {

//Determines which key was pressed.Capture the key pressed by user, store in userGuess variable.
    var userGuess = event.key;

//This will store and display the user's choice of letters. It will push it into guessesSoFar.
    guessesSoFar.push (userGuess);

//Create an array with possible letters to choose from//
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Choosing a random letter from the options array. This is the compiuter's guess. 
    var computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];

//If user guesses correctly, wins go up 1 point//
    if(userGuess === computerChoice){
        wins++;
    }
    
    else {
        guessesLeft--;
    }

    if(guessesLeft = 0){
        losses++
    }

//Console output to confirm if correct//
    console.log(computerChoice);
  

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
document.getElementById('guessesSoFar').innerHTML = "Your guesses so far: " + guessesSoFar;

    }

//This is when the computer makes a choice of letter and keeps it until it resets//

