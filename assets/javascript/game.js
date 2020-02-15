// GLOBAL VARIABLES

// Here are our Skyrim-themed word options for the game:
var wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];

// Here we set global variables for the things we're tracking:
var guessesLeft = 15;
var wins = 0;
var userInput = document.getElementById("user-input");
var guessesArray = [];



// Begin calling functions for the game:
var currentWord = getWord();
console.log(currentWord + " -- Global current word test");

// Create user array--this array will be filled with underscores, but will gradually fill with userInput key
var currentWordArray = displayWordSpaces(currentWord);

// Create comparative array from current word so we can compare to user-built array
var comparativeArray = Array.from(currentWord);





document.onkeyup = function(event) {
  userInput = event.key;

  // Test user input
  console.log(userInput);


  if (guessesLeft > 0) {
    for (var i = 0; i < comparativeArray.length; i++) {
      if (userInput === comparativeArray[i]) {
        currentWordArray[i] = userInput;
      }
    }

    if (guessesArray.includes(userInput)) {
      alert("You've already guessed that!");

    } else {
      guessesArray.push(userInput);
      currentWordArray.join("");
      if (currentWordArray.join("") !== currentWord) {
        guessesLeft--;
        document.getElementById('guesses-left').textContent = guessesLeft;
        document.getElementById('current-word').textContent = currentWordArray.join("");
        document.getElementById("user-input").textContent = guessesArray.join(" ");
      } else {
        wins++;
        document.getElementById('guesses-left').textContent = guessesLeft;
        document.getElementById('current-word').textContent = currentWordArray.join("");
        document.getElementById("user-input").textContent = guessesArray.join(" ");
        document.getElementById("wins").textContent = wins;

        // Source/solution from Maxwell Marovich and Christopher Shane Brown via Slack
        // This timeout allows the final letter in the currentWordArray to print to the HTML before the next word
        setTimeout(function() {
          var confirmNextWord = confirm("You won this round! Ready for next word?");
          if (confirmNextWord) {
            resetGame();
          }
        }, 1000);
      }
    }
  } else if (guessesLeft === 0) {
    alert("You're out of guesses for this word. Keep playing?");
    resetGame();
  }


};


// ********************************************
// This will generate a random word for the game, but we want to go in order to avoid repeats
// ********************************************

// This is where we'll select a word for the current game session:
function getWord() {

  // Define empty array for words already used

  var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];


  console.log(randomWord);

  return randomWord;
}

// Once we have our word, we'll run this function to convert it to blank spaces
function displayWordSpaces(x) {

  //Assign the function argument to the variable we'll use
  var displayWord = x;

  //Test that a word is being selected & counted properly
  console.log(displayWord + "-- testing word selection");
  console.log(displayWord.length + "-- testing word length");

  //Define new array to store word spaces
  var spaceArray = [];

  //Loop through the string to add blank spaces to the space array
  for (var i = 0; i < displayWord.length; i++) {
    spaceArray.push(" _ ");
  }

  // This will write the space array to the html document in the proper place.
  // The .join("") method will eliminate commas within the array so that only spaces are printed.
  document.getElementById("current-word").innerHTML = spaceArray.join("");

  // We'll show an image hint once the word is chosen
  if (displayWord === "dragonborn") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  } else if (displayWord === "spriggan") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/spriggan.png" class="hint-image" alt="">';
  } else if (displayWord === "sweetrolls") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/sweetrolls.png" class="hint-image" alt="">';
  } else if (displayWord === "knee") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/knee.png" class="hint-image" alt="">';
  } else if (displayWord === "dragon") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragon.png" class="hint-image" alt="">';
  } else if (displayWord === "daedra") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/daedra.png" class="hint-image" alt="">';
  } else if (displayWord === "vampire") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/vampire.png" class="hint-image" alt="">';
  } else if (displayWord === "dog") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/dog.png" class="hint-image" alt="">';
  } else if (displayWord === "map") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/map.png" class="hint-image" alt="">';
  } else if (displayWord === "mage") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/mage.png" class="hint-image" alt="">';
  } else if (displayWord === "talos") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/talos.png" class="hint-image" alt="">';
  } else if (displayWord === "lydia") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/lydia.png" class="hint-image" alt="">';
  }

  return spaceArray;

}

function resetGame() {
  // wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];
  guessesLeft = 15;
  document.getElementById('guesses-left').textContent = (guessesLeft);
  guessesArray = [];
  document.getElementById('user-input').textContent = ("Your guesses will appear here.");
  currentWordArray = [];
  currentWord = getWord();

  // Begin calling functions for the game:
  // First: Reassign value to user array
  currentWordArray = displayWordSpaces(currentWord);

  // Second: Reassign value to comparative array
  comparativeArray = Array.from(currentWord);

}
