// Here are our Skyrim-themed word options for the game:
var wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];

// Here we set global variables for the things we're tracking:

var guessesLeft = 10;
var wins = 0;
var numOfGuesses = 0;

// function getGuess(event) {
  var userInput = document.getElementById("user-input");

  var guessesArray = [];

  // Next, we give JavaScript a function to execute when onkeyup event fires.
  // for (var i = 0; i <= 10; i++) {
  document.onkeyup = function(event) {
    userInput = event.key;
    guessesArray.push(userInput);
    document.getElementById("user-input").textContent = guessesArray.join(" ");
  };
 // }

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
    // console.log(spaceArray);
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

}

// function playGame() {
//   var currentWord = getWord();
//   displayWordSpaces(currentWord);
//   // eliminateDuplicates(currentWord);
//   // getUserKey();
// }
//
//
// // }
//
// function countTries() {





// ********************************************
// NEED TO FIX: I want to loop through the wordOptions array but this terminates after one loop
// the way it's currently written
// ********************************************
// function getWord() {
//   for (var i = 0; i < wordOptions.length; i++) {
//     var currentWord = wordOptions[i];
//     console.log(currentWord);
//     return currentWord;
//   }
// }
//
// function gameLoop();

// function eliminateDuplicates(x) {
//     var randomWord = x;
//     if (wordOptions.includes(randomWord)) {
//       wordOptions.pop(randomWord);
//     }
// }
//
// function getUserKey() {
//
//   // Assign variable to corresponding id
//   var userGuess = document.getElementById("user-input");
//
//   var listOfGuesses = [];
//
//   // Function
//   document.onkeyup = function(event) {
//     userGuess = event.key;
//   };
//
//   // Add userGuess to guesses array
//   listOfGuesses.push(userGuess);
//   document.getElementById("user-input").innerText = listOfGuesses.join("");
//
// }



// playGame();



// Once we have word length, the user will begin guessing
// function userGuesses() {
//
//   //Define new array to store user key events
//   var userGuesses = [];
//
//   for (var i = 0; i < 10; i++) {
//     userGuesses.push(" _ ");
//     console.log(userGuesses);
//
//     // This will write the space array to the html document in the proper place.
//     // The .join("") method will eliminate commas within the array so that only spaces are printed.
//     document.getElementById("user-input").innerHTML = userGuesses.join("");
//
//
// }


//Run functions
