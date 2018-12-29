# Psychic-Game 

<<<<<<< HEAD

<!-- ##Instructions:
###How does this game work?
=======
## Instructions:
### How does this game work?
>>>>>>> fe66f73c9c3517010f891abac7bec897c9f6c05a
    1. The computer randomly chooses a letter from the alphabet.
    2. The user chooses a letter from the alphabet, trying to match the computer's choice. 
    3. Computer is alerted that a key has been pressed by the user: document.onkeyup = function () {}
    4. IF:
        user guess = computer choice:
            add +1 point to wins variable
            reset "guesses left" to 9
            clear "your guesses so far"
        user guess != computer choice:
            subtract -1 point from "guesses left"
            keep guesses on screen until all 9 are used up
        WHEN:
            all 10 guesses are used up: 
                add +1 to losses column
                reset "guesses left" to 10
                clear "your guesses so far"

### Variables needed:
    1. computerChoice - storing the computer's guessed variable
    2. userGuess - storing the user's letter guess
    3. wins - user guesses the letter correctly
    4. losses - user runs out of guesses
<<<<<<< HEAD
    5. guessesSoFar - current guesses for using during this round -->

    Watch the demo.
You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
Guess what letter I'm thinking of
Wins: (# of times the user has guessed the letter correctly)
Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
Guesses Left: (# of guesses left. This will update)
Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).



=======
    5. guessesSoFar - current guesses for using during this round
>>>>>>> fe66f73c9c3517010f891abac7bec897c9f6c05a
