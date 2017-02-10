var guesses = 12;
var options = ["MARIO", "YOSHI", "LUIGI", "TOAD", "PEACH", "KOOPA", "GOOMBA", "LAKITU", "BOWSER", "TANOOKI", "DAISY", "PRINCESS", "MUSHROOM", "FIRE FLOWER","ICE FLOWER", "BULLET BILL", "SUPER STAR", "BLUE SHELL", "COIN"];
var word = options[Math.floor(Math.random() * options.length)];
var display = [];
for (var i = 0; i < word.length; i++) {
  if (word.charAt(i) === " ") {
    display.push(" ");
  } else {
  display.push("_");
  }
}
var display2 = display.join(" ");
console.log(display);
console.log(display2);
var guessedLetters = [];
var wins = 0;

function playSound1() {
  document.getElementById('coin').play();
}

function playWinningSound() {
  document.getElementById('win').play();
}

function playLosingSound() {
  document.getElementById('lose').play();
}

var myAudio = new Audio('../Hangman-Game/assets/sounds/SuperMarioBros.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

// This function is run whenever the user presses a key.
      document.onkeyup = function(event) {
         
     

      // Determines which key was pressed
        var userGuess = event.key;
        userGuess = userGuess.toUpperCase();
        console.log(userGuess);

        for(var j = 0; j < word.length; j++) {
          if (userGuess === word.charAt(j)) {
            display[j] = userGuess;
            var count = 0; //ensure that sound for a repeated correct guess is not played again
            for (var y = 0; y < guessedLetters.length; y++) {
              if (userGuess === guessedLetters[y]) {
                count++
              }
            }
            if (count === 0) {
            playSound1();
            }
          }          
        }
        
        var counter = 0;
        for (var guess = 0; guess < guessedLetters.length; guess++) {
          if (userGuess === guessedLetters[guess]) {
            counter++
          } //adding guessed letter into an array and checking the array to make sure the guess isn't repeated in the array
        }
        if (counter === 0) {
            guessedLetters.push(userGuess);
            guesses--; //only guessed letters that have not been previously guessed cause a decrease in remaining guesses
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
          myAudio.pause();
          playLosingSound();
          //show losing image here
          setTimeout(function() {
          myAudio.currentTime = 0;
          myAudio.play();
          }, 3000);
          
          word = options[Math.floor(Math.random() * options.length)];
          display = [];
          for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === " ") {
            display.push(" ");
            } else {
            display.push("_");
            }
          }
          var display2 = display.join(" ");
          console.log(display);
          console.log(display2);
          guesses = 12;
          guessedLetters = [];
        } else if (display.join('') === word) {
          myAudio.pause();
          playWinningSound();
          //show winning image here
          wins++;
          setTimeout(function() {
          myAudio.currentTime = 0;
          myAudio.play();
          }, 6000);
          console.log(wins);
          //show image of character
          word = options[Math.floor(Math.random() * options.length)];
          display = [];
          for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === " ") {
            display.push(" ");
            } else {
            display.push("_");
            }
          }
          var display2 = display.join(" ");
          console.log(display);
          console.log(display2);
          guesses = 12;
          guessedLetters = [];


        }
        
      }

        