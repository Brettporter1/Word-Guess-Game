var wordChoices = ["carabiner", "rope", "belay", "harness", "whipper", "granite", "himalaya", "jumar", "summit", "crimp"];
var selectedWord = "";
var wordLetters = [];
var blankSpaces = [];
var letterGuessed = "";
var wrongGuesses = [];
var wins = 0;
var losses = 0;
var numOfGuesses = 10;





function runGame() {
    // select random word
    var selectedWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

    // split word into individual letters
    wordLetters = selectedWord.split("");

    // create spaces for each letter.
    for (var i = 0; i < wordLetters.length;i++){
        blankSpaces.push("_");
    }
    // write spaces to the DOM
    blankSpaces = blankSpaces.join(" ");
    $(".theWord").text(blankSpaces);
    $('.winCount').text('wins ' + wins);
    $('.lossCount').text('losses ' + losses);
    $('.guessesLeft').text('guesses ' + numOfGuesses);

    console.log(blankSpaces);
    console.log(selectedWord);

}

runGame();

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();        
    console.log(letterGuessed);

}
