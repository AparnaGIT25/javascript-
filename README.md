##project 1
```javascript
console.log("aparna")
const buttons=document.querySelectorAll('.button');
//console.log(buttons)
const body=document.querySelector('body')
buttons.forEach(function(item){
  //console.log(item)
  item.addEventListener('click',function(eve){
    console.log(eve)
    console.log(eve.target)
    if(eve.target.id==="grey"){
      body.style.backgroundColor="grey"
    }
    if(eve.target.id==="white"){
      body.style.backgroundColor="white"
    }
    if(eve.target.id==="blue"){
      body.style.backgroundColor="blue"
    }
    if(eve.target.id==="yellow"){
      body.style.backgroundColor="yellow"
    }
  })

})
```
#project 2 Solution
```javascript
const form = document.querySelector('form');
//  const height=parseInt(document.querySelector('#height').value);
//do not use this coz we want the values only when we click and if we write this there will an empty value as well as the page is loaded

form.addEventListener('submit', function (eve) {
  eve.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  //we get the value of the id height, but this value will be in string and we need to parse that in int.
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show thw BMI in results=>
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
```
project3 solution
```javascript
let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (eve) {
    eve.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number between 1 and 100.');
  } else {
    prevGuess.push(guess);
    displayGuess(guess);

    if (numGuesses === 11) {
      displayMessage(`Game over! The correct number was ${randomNum}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('You guessed it right!');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Number is too low');
  } else {
    displayMessage('Number is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
}

// Use event delegation to restart the game
startOver.addEventListener('click', function (eve) {
  if (eve.target.id === 'newGame') {
    resetGame();
  }
});

function resetGame() {
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuesses = 1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${11 - numGuesses}`;
  userInput.removeAttribute('disabled');
  p.remove();
  playGame = true;
}

