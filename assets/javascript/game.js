
// Here are our Skyrim-themed word options for the game:
var wordOptions = ["dragonborn", "spriggan", "sweetroll", "knee", "dragon", "daedra", "vampire", "dog", "map"];

// This is where we'll select a word for the current game session:
function getWord() {
  var randomWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  console.log(randomWord);
  return randomWord;
}

// Once we have our word, we'll run this function to convert it to blank spaces
function displayWordSpaces(x) {

  //Assign the function argument to the variable we'll use
  var displayWord = x;

  //Test that a word is being selected & counted properly
  console.log(displayWord);
  console.log(displayWord.length);

  //Define new array to store word spaces
  var spaceArray = [];

  //Loop through the string to add blank spaces to the space array
  for (var i = 0; i < displayWord.length; i++) {
    spaceArray.push(" _ ");
    console.log(spaceArray);
  }

  // This will write the space array to the html document in the proper place.
  // The .join("") method will eliminate commas within the array so that only spaces are printed.
  document.getElementById("current-word").innerHTML = spaceArray.join("");
}

//Run functions
var currentWord = getWord();
displayWordSpaces(currentWord);
