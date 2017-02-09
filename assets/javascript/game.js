var guesses = 12;
var options = ["MARIO", "YOSHI", "LUIGI", "TOAD", "PEACH", "KOOPA", "GOOMBA", "LAKITU", "BOWSER", "TANOOKI", "DAISY", "PRINCESS", "MUSHROOM", "FLOWER"];
var word = options[Math.floor(Math.random() * options.length)];
var display = [];
for (var i = 0; i < word.length; i++) {
  display.push("_");
}
var display2 = display.join(" ");
console.log(display);
console.log(display2);
var guessedLetters = [];

function playSound1() {
  document.getElementById('coin').play();
}

function playWinningSound() {
  document.getElementById('win').play();
}

function playLosingSound() {
  document.getElementById('lose').play();
}

// This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
         
     

      // Determines which key was pressed
        var userGuess = event.key;
        userGuess = userGuess.toUpperCase();
        console.log(userGuess);

        for(var j = 0; j < word.length; j++) {
          if (userGuess === word.charAt(j)) {
            display[j] = userGuess;
            playSound1();

          } else {
            //ensure that sound for a repeated correct guess is not played again
          }
        }
        guesses--
        var counter = 0;
        for (var guess = 0; guess < guessedLetters.length; guess++) {
          if (userGuess === guessedLetters[guess]) {
            counter++
          } //adding guessed letter into an array and checking the array to make sure the guess isn't repeated in the array
        }
        if (counter === 0) {
            guessedLetters.push(userGuess);
        }
        console.log(guessedLetters);
        var display2 = display.join(" ");
        console.log(display);
        console.log(display2);
        console.log(guesses);
        var guessedLetters2 = guessedLetters.join(" ");
        console.log(guessedLetters2);
        if (guesses === 0) {
          console.log("Game Over");
          playLosingSound();
          //show losing image here
          word = options[Math.floor(Math.random() * options.length)];
          display = [];
          for (var i = 0; i < word.length; i++) {
            display.push("_");
          }
          var display2 = display.join(" ");
          console.log(display);
          console.log(display2);
          guesses = 12;
          guessedLetters = [];
        } else if (display.join('') === word) {
          playWinningSound();
          //show image of character
          word = options[Math.floor(Math.random() * options.length)];
          display = [];
          for (var i = 0; i < word.length; i++) {
            display.push("_");
          }
          var display2 = display.join(" ");
          console.log(display);
          console.log(display2);
          guesses = 12;
          guessedLetters = [];


        }
        
      }

        