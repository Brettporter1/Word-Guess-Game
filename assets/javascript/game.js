

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
    wins = 0;
    losses = 0
    numOfGuesses = 10;
    wrongGuesses = [];
    // select random word
    var selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    // split word into individual letters
    wordLetters = selectedWord.split("");

    // create spaces for each letter.
    for (var i = 0; i < wordLetters.length;i++){
        blankSpaces.push("_");
    }
    console.log(wordLetters);
    console.log(blankSpaces);
    // write spaces to the DOM
    document.getElementById("theWord").innerHTML = blankSpaces.join(" ");
    document.getElementById('winCount').innerHTML = wins;
    document.getElementById('lossCount').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = numOfGuesses;
    document.getElementById('wrongLetters').innerHTML = wrongGuesses.join(" ");
}
// play game functions

// find the guessed letter in word
function findInWord(letter){
    var letterInWord = false;
    for (var i = 0; i < wordLetters.length;i++){
        if(wordLetters[i] === letter){
            letterInWord = true;
        }
     }
     // if letter found replace the spaces with guessed letter
     if(letterInWord){
         for(var i = 0; i < wordLetters.length;i++){
            if(wordLetters[i] === letter){
             blankSpaces[i] = letter;
            }
         }
     }
     // if not found 
     else{
         wrongGuesses.push(letter);
         numOfGuesses--
     }
    }







// call functions
runGame();

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
    console.log(letterGuessed);
    findInWord(letterGuessed);
}
