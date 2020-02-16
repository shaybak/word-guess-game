// GLOBAL VARIABLES

// Here are our Skyrim-themed word options for the game:
var wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];

// Here we set global variables for the things we're tracking:
var guessesLeft = 15;
var wins = 0;
// var userInput = document.getElementById("user-input");
var guessesArray = [];
var wordUsed = "";

currentWord = "";

// Create user array--this array will be filled with underscores, but will gradually fill with userInput key
var currentWordArray = [];

// Create comparative array from current word so we can compare to user-built array
var comparativeArray = [];



//
// ***********************************************************
// NOTES FOR TA GRADER:
//
// - Primary thoughts: My game [FINALLY] works! But I know it's a bit of a mess...

// - I realize that some of my alerts overlap on final win or lose scenarios; not sure how to fix this.

// - I had a lot of issues trying to get the random word to not repeat, but was able to loop through the wordOptions array and remove
// used words. This worked until the wordOptions array was empty, but it seemed to break everything
// after that. I managed to fix most of the game-breaking issues, but the
// issue above re: fullReset() was my imperfect solution to these issues, and some of the loops/conditionals with
// wordOptions.length have been scattered throughout different functions somewhat messily. I'm not sure where the ideal
// spot for this loop/conditional is (or if it does need to be in multiple places??), but that's why you'll see some odd repeats.




function playGame() {
  initiateGame();
  grabVariables();
  gamePlayInterface();
}


function initiateGame() {

  // Begin calling functions for the game:
  currentWord = getWord();
  // console.log(currentWord + " -- Global current word test");

  var randomWord = currentWord;

  for (var i = 0; i < wordOptions.length; i++) {
    if (randomWord === wordOptions[i]) {
      wordOptions.splice(i, 1);
      console.log(wordOptions);
    }
  }
}

function grabVariables() {
  // Create user array--this array will be filled with underscores, but will gradually fill with userInput key
  currentWordArray = displayWordSpaces(currentWord);

  // Create comparative array from current word so we can compare to user-built array
  comparativeArray = Array.from(currentWord);

}


function gamePlayInterface() {
  document.onkeyup = function(event) {
    userInput = event.key;

    // Test user input
    // console.log(userInput);

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
        } else if (wins < 12) {
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
          }, 500);
        } else if (wins === 12) {
          document.getElementById('guesses-left').textContent = guessesLeft;
          document.getElementById('current-word').textContent = currentWordArray.join("");
          document.getElementById("user-input").textContent = guessesArray.join(" ");
          document.getElementById("wins").textContent = wins;

          // Source/solution from Maxwell Marovich and Christopher Shane Brown via Slack
          // This timeout allows the final letter in the currentWordArray to print to the HTML before the next word
          setTimeout(function() {
            var confirmNewRound = confirm("You have completed this challenge with courage and skill, Dovahkiin. Would you like to embark on this challenge again?");
            wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];
            wins = 0;
            if (confirmNewRound) {
              fullReset();
            }
          }, 500);
        }
      }
    } else if (guessesLeft === 0) {
      alert("You're out of guesses for this word. Keep playing?");
      resetGame();
    }
  };
}


// This is where we'll select a word for the current game session:
function getWord() {

  // Define empty array for words already used

  if (wordOptions.length >= 1) {
    var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    return randomWord;
  } else if (wordOptions.length === 0 && wins === 12) {
    alert("You have completed this challenge with courage and skill, Dovahkiin. Would you like to embark on this challenge again?");
    fullReset();
  } else if (wordOptions.length === 0 && wins < 12) {
    alert("You have failed your challenge.");
    fullReset();

  }
  // console.log(randomWord);


}

// Once we have our word, we'll run this function to convert it to blank spaces
function displayWordSpaces(x) {

  //Assign the function argument to the variable we'll use
  var displayWord = x;

  //Test that a word is being selected & counted properly
  // console.log(displayWord + "-- testing word selection");
  // console.log(displayWord.length + "-- testing word length");

  //Define new array to store word spaces
  var spaceArray = [];

  if (x === undefined) {
    fullReset();
  } else {

    //Loop through the string to add blank spaces to the space array
    for (var i = 0; i < displayWord.length; i++) {
      spaceArray.push(" _ ");
    }
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

  // We return the array here so it can be used in other places
  return spaceArray;

}

// This function is used to reset all variables between rounds, where there are twelve rounds to a game.
// We do not reset wins or the wordOptions array in this function.
function resetGame() {
  guessesLeft = 15;
  document.getElementById('guesses-left').textContent = (guessesLeft);
  guessesArray = [];
  document.getElementById('user-input').textContent = ("Your guesses will appear here.");
  currentWordArray = [];
  currentWord = "";
  currentWord = getWord();

  var randomWord = currentWord;

// This if/else statement first checks to see if the wordOptions array is empty (i.e.,
// the randomWord is undefined)
  if (randomWord === undefined) {
    // If it's undefined, that means it's time to do a FULL reset of all variables.
    // This should also prevent errors in later functions by redirecting to the full reset.
    fullReset();


  } else {
    // Otherwise, we'll loop through the wordOptions array, find the current randomWord,
    // and then splice it out of the array so we don't pick it again
    for (var i = 0; i < wordOptions.length; i++) {
      if (randomWord === wordOptions[i]) {
        wordOptions.splice(i, 1);
        console.log(wordOptions);

        // If randomWord is not in wordOptions, we check win/lose scenarios and reset the complete game:
      } else if (wordOptions.length === 0 && wins === 12) {
        alert("You have completed this challenge with courage and skill, Dovahkiin. Would you like to embark on this challenge again?");
        wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];
        wins = 0;
        fullReset();
      } else if (wordOptions.length === 0 && wins < 12) {
        alert("You have failed your challenge.");
        wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];
        wins = 0;
        fullReset();
      }
    }
  }

  // If we are still in play for this round, we begin to assign variables again:
  currentWordArray = displayWordSpaces(currentWord);

  // Second: Reassign value to comparative array
  comparativeArray = Array.from(currentWord);

}

function fullReset() {
  wordOptions = ["dragonborn", "spriggan", "sweetrolls", "knee", "dragon", "daedra", "vampire", "dog", "map", "mage", "talos", "lydia"];
  wins = 0;
  document.getElementById('wins').textContent = wins;
  guessesLeft = 15;
  document.getElementById('guesses-left').textContent = (guessesLeft);
  guessesArray = [];
  document.getElementById('user-input').textContent = ("Your guesses will appear here.");
  currentWordArray = [];
  currentWord = "";
  currentWord = getWord();

  var randomWord = currentWord;

  currentWordArray = displayWordSpaces(currentWord);

  // Second: Reassign value to comparative array
  comparativeArray = Array.from(currentWord);

}

playGame();
