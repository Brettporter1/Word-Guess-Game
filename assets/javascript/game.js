

var wordChoices = ["carabiner", "rope", "belay", "harness", "whipper", "granite", "himalaya", "jumar", "summit", "crimp"];
var selectedWord = "";
var wordLetters = [];
var blankSpaces = [];
var letterGuessed = "";
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var numOfGuesses = 10;
var letterInWord = false;


// load the game function
function runGame() {
    // set start values
    numOfGuesses = 10;
    wrongGuesses = [];
    blankSpaces = [];
    // select random word
    var selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    // split word into individual letters
    wordLetters = selectedWord.split("");

    // create spaces for each letter.
    for (var i = 0; i < wordLetters.length; i++) {
        blankSpaces.push("_");
    }
    console.log(wordLetters);
    console.log(blankSpaces);
    // write spaces to the DOM
    document.getElementById("theWord").innerHTML = blankSpaces.join(" ");
    document.getElementById("winCount").innerHTML = wins;
    document.getElementById("lossCount").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = numOfGuesses;
}
// play game functions

// find the guessed letter in word
function findInWord(letter) {
    var letterInWord = false;
    for (var i = 0; i < wordLetters.length; i++) {
        if (wordLetters[i] === letter) {
            letterInWord = true;
            console.log(letter);
        }
    }
    // if letter found replace the spaces with guessed letter
    if (letterInWord) {
        for (var i = 0; i < wordLetters.length; i++) {
            if (wordLetters[i] === letter) {
                console.log([i]);
                blankSpaces[i] = letter;
                document.getElementById("theWord").innerHTML = blankSpaces.join(' ');
            }
        }
    }
    // if not found 
    else {
        wrongGuesses.push(letter);
        numOfGuesses--;
        document.getElementById("guessesLeft").innerHTML = numOfGuesses;
        console.log(wrongGuesses);
    }

    
    
    
    document.getElementById("wrongLetters").innerHTML = wrongGuesses.join(" ").toUpperCase();
}

function winOrLose(){
    if(wordLetters.toString() === blankSpaces.toString()){
        wins++;
        alert('Success!')
        document.getElementById("winCount").innerHTML = wins;
        runGame();
    }
    else if (numOfGuesses === 0){
        losses++;
        alert('Mistakes are Costly!');
        document.getElementById("lossCount").innerHTML = losses;
        runGame();
    }
}




// call functions
runGame();

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    findInWord(letterGuessed);
    winOrLose();
}