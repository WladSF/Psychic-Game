// // Essentially, the app randomly picks a letter, 
// and the user has to guess which letter the app chose //

// Must create a variable for user input, computer choice, 
//possible letters, wins, losses, guesses left, guesses so far//

//Create variables
var wins = 0;
var losses = 0;
var guessesSoFar = 0;
var guessesLeft = 10;

//When the user presses a key, it will run the following function://
    document.onkeypress = function (event) {

//Capture the key pressed by user, store in userGuess variable.
    var userGuess = event.key;

//Possible letters to choose from//
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//Choosing a random letter out of the possible letters//
    var computerChoice = alphabet[Math.floor(Math.random () * alphabet.length)];

//Console output to confirm if correct//
    console.log(computerChoice);
}



