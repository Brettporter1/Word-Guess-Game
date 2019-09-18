var wordChoices = ["carabiner", "rope", "belay", "harness", "whipper", ""];
var selectedWord = "";
var wordLetters = [];
var numOfSpaces = [];
var blankSpaces = [];
var wrongGuess = [];
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

    $("#theWord").text(blankSpaces).join(" ");

    console.log(selectedWord);
    console.log(wordLetters);
    console.log(blankSpaces);
}

runGame();