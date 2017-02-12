var wins = 0;
var guesses = 12;
var options = ["MARIO", "YOSHI", "LUIGI", "TOAD", "PEACH", "KOOPA", "GOOMBA", "LAKITU", "BOWSER", "TANOOKI", "DAISY", "PRINCESS", "MUSHROOM", "FIRE FLOWER","ICE FLOWER", "BULLET BILL", "SUPER STAR", "BLUE SHELL", "COIN"];
/*var word = "";*/
function reset() {
  /*var*/ word = options[Math.floor(Math.random() * options.length)]; 
          display = [];
          for (var i = 0; i < word.length; i++) {
            if (word.charAt(i) === " ") {
            display.push(" ");
            } else {
            display.push("_");
            }
          }
          var display2 = display.join("");
          document.querySelector('.word-display').innerHTML = display2;
          //console.log(display);
          //console.log(display2);
          guesses = 12;
          guessedLetters = [];
          var guessedLetters2 = guessedLetters.join(" ");
          document.querySelector('.guesses-no').innerHTML = guesses;
          document.querySelector('.display-letters').innerHTML = guessedLetters2;
          //console.log(word);
}


window.onload = function() { //need to run this after DOM is built otherwise display2 is null
  reset();
}

function playSound1() {
  var correct = document.getElementById('coin');
  if (correct.paused) {
        correct.play();
    }else{ // allows coin to replay from beginning if time between guesses is shorter than length of smb_coin.wav
        correct.pause();
        correct.currentTime = 0;
        setTimeout(function () { //Need to add this timeout function to prevent Promise Error     
        correct.play();
        }, 50);
        
    }
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

        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {    
       

      // Determines which key was pressed
        var userGuess = event.key;
        userGuess = userGuess.toUpperCase();
        //console.log(userGuess);

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
            document.querySelector('.guesses-no').innerHTML = guesses;

        }
        //console.log(guessedLetters);
        var display2 = display.join("");
        document.querySelector('.word-display').innerHTML = display2;
        //console.log(display);
        //console.log(display2);
        //console.log(guesses);
        var guessedLetters2 = guessedLetters.join(" ");
        //console.log(guessedLetters2);
        document.querySelector('.display-letters').innerHTML = guessedLetters2;
        if (display.join('') === word) {
          myAudio.pause();
          playWinningSound();
          //show winning image here
            if (word === "MARIO") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/180px-Mario_Paper.jpg">' + '<p>Mario</p>';
            } else if (word === "YOSHI") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/yoshi.jpg">' + '<p>Yoshi</p>';
            } else if (word === "LUIGI") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Luigi0.png">' + '<p>Luigi</p>';
            } else if (word === "TOAD") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Red_Blue_Toad.png">' + '<p>Toad</p>';
            } else if (word === "PEACH") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Peach.png">' + '<p>Peach</p>';
            } else if (word === "KOOPA") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Koopa.jpg">' + '<p>Koopa</p>';
            } else if (word === "GOOMBA") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Goomba.jpg">' + '<p>Goomba</p>';
            } else if (word === "LAKITU") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/lakitu.jpg">' + '<p>Lakitu</p>';
            } else if (word === "BOWSER") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Bowser_-_New_Super_Mario_Bros_2.png">' + '<p>Bowser</p>';
            } else if (word === "TANOOKI") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/180px-TanookiMario_SMB3.jpg">' + '<p>Tanooki</p>';
            } else if (word === "DAISY") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Daisy.jpg">' + '<p>Daisy</p>';
            } else if (word === "PRINCESS") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/princess.jpg">' + '<p>Princess</p>';
            } else if (word === "MUSHROOM") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/200px-MushroomMarioKart8.png">' + '<p>Mushroom</p>';
            } else if (word === "FIRE FLOWER") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/200px-FireFlowerMK8.png">' + '<p>Fire Flower</p>';
            } else if (word === "ICE FLOWER") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/ice-flower.png">' + '<p>Ice Flower</p>';
            } else if (word === "BULLET BILL") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/nsmb-bullet-bill.jpg">' + '<p>Bullet Bill</p>';
            } else if (word === "SUPER STAR") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/1953218.jpg">' + '<p>Super Star</p>';
            } else if (word === "BLUE SHELL") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Blue_Shell.png">' + '<p>Blue Shell</p>';
            } else if (word === "COIN") {
              document.querySelector('.image-area').innerHTML = '<img src="assets/images/Retro-Coin-icon.png">' + '<p>Coin</p>';
            } 
          wins++;
          document.querySelector('.win-no').innerHTML = wins;
          setTimeout(function() {
          myAudio.currentTime = 0;
          myAudio.play();
          /*document.body.onkeyup = null;*/
          reset();
          }, 5500); //start new game at end of winning sound
          //console.log(wins);
        } else if (guesses === 0 && display.join('') !== word) { //prevent game over appearing if word correctly guessed on last guess
          //console.log("Game Over");
          myAudio.pause();
          playLosingSound();
          document.querySelector('.image-area').innerHTML = '<img src="assets/images/Bowser_emblem.jpg">' + '<p>Game Over</p>'; 
          setTimeout(function() {
          myAudio.currentTime = 0;
          myAudio.play();
          reset();
          }, 3000); //start new game at end of losing sound
          
          
        } 
        } else {
          alert("Type a letter between a and z")
          }
        }
        
      

        