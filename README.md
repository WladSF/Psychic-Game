# Psychic-Game 

Instructions:
How does this game work?
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

Variables needed:
    1. computerChoice - storing the computer's guessed variable
    2. userGuess - storing the user's letter guess
    3. wins - user guesses the letter correctly
    4. losses - user runs out of guesses
    5. guessesSoFar - current guesses for using during this round