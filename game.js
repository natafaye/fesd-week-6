
/*** UNSCRAMBLE GAME ****/

// Get the random word
const targetWord = pickRandomWord()
// Shuffle (not really)
const shuffledWord = reverse(targetWord)
// Make user guess
makeUserGuess()
// End the game
alert("You did it!")


function reverse(string){
    return string.split("").reverse().join("");
}

function pickRandomWord() {
    const randomWords = ["PICKLE", "CANTELOPE", "RAINBOW", "GAME", "CODE"]
    // TODO: Make actually random
    return randomWords[2]
}

function makeUserGuess() {
    // As long as they haven't picked the right word, keep asking until they do
    let userGuess = prompt("What word is this? " + shuffledWord)
    // 'is' in human speak is '===' in computer speak
    while(targetWord !== userGuess) { // their guess is not the target word
        userGuess = prompt("What word is this? " + shuffledWord)
    }
}