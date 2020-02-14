if (guessesLeft > 0 && currentWordArray.join("") !== currentWord) {
  for (var i = 0; i < comparativeArray.length; i++) {
    if (userInput === comparativeArray[i] && guessesArray.includes(userInput) === false) {
      currentWordArray[i] = userInput;
      printContent();
    } else if (guessesArray.includes(userInput)) {
      alert("You've already guessed that!");
    }
  }
} else if (guessesLeft > 0 && currentWordArray.join("") === currentWord) {
  alert("You won!");
  wins++;
  document.getElementById("wins").textContent = wins;
} else if (guessesLeft === 0 && currentWordArray.join("") !== currentWord) {
  alert("You lost! Try again.")
}
