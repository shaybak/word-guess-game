// Here are our Skyrim-themed word options for the game:
var wordOptions = ["dragonborn", "spriggan", "sweetroll", "knee", "dragon", "daedra", "vampire", "dog", "map"];


// This is where we'll select a word for the current game session:
function getWord() {
  var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  console.log(randomWord);
  return randomWord;
}

// We'll show an image hint once the word is chosen
// function showHint(hint) {
//   if (hint === "dragonborn") {
//     document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
//   } else if (hint === "spriggan") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/spriggan.png" class="hint-image" alt="">';
//   } else if (hint === "sweetroll") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/sweetroll.png" class="hint-image" alt="">';
//   } else if (hint === "knee") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/knee.png" class="hint-image" alt="">';
//   } else if (hint === "dragon") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragon.png" class="hint-image" alt="">';
//   } else if (hint === "daedra") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
//   } else if (hint === "vampire") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
//   } else if (hint === "dog") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
//   } else if (hint === "map") {
//       document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
//   }
// }


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

  if (displayWord === "dragonborn") {
    document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  } else if (displayWord === "spriggan") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/spriggan.png" class="hint-image" alt="">';
  } else if (displayWord === "sweetroll") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/sweetroll.png" class="hint-image" alt="">';
  } else if (displayWord === "knee") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/knee.png" class="hint-image" alt="">';
  } else if (displayWord === "dragon") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragon.png" class="hint-image" alt="">';
  } else if (displayWord === "daedra") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  } else if (displayWord === "vampire") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  } else if (displayWord === "dog") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  } else if (displayWord === "map") {
      document.getElementById("hint-image").innerHTML = '<img src="assets/images/dragonborn.png" class="hint-image" alt="">';
  }

  // This will write the space array to the html document in the proper place.
  // The .join("") method will eliminate commas within the array so that only spaces are printed.
  document.getElementById("current-word").innerHTML = spaceArray.join("");
}

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
var currentWord = getWord();
displayWordSpaces(currentWord);
