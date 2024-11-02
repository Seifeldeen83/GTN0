let randomNumber = parseInt(Math.random()*101 );
const submit = document.getElementById("subt");
const userInput =document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");
const p = document.createElement("p")
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });

    
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert("What part of 'Guess a (NUMBER) dont u understand' ");

    }else if (guess <1) {
        alert("Enter a number between 1 and 100");

    }else if (guess >100) {
        alert("Enter a number between 1 and 100");

    }else{
        previousGuesses .push(guess);
        if(numGuesses == 11){
            displayGuesses(guess);
            displayMessage(`Game Over! NUmber was ${randomNumber}` );
            endGame();
        }else {
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}





function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage(`You guessed correctly!`);
        endGame()
    }else if (guess < randomNumber) {
        displayMessage(`Its Higher than that`);
    }else if (guess > randomNumber) {
        displayMessage(`Its Lower than that`);
}
}

function displayGuesses(guess) {
    userInput.value = " ";
    guessSlot.innerHTML += `${guess}`;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`;
}


function displayMessage (message) {
 lowOrHi.innerHTML = `<h1>${message}</h1>`;

}

function endGame () {
    userInput.value = " ";
    userInput.setAttribute("disabled" , " ");

    p.classList.add("button");
    p.innerHTML = `<h1 id = "newGame">Start new Game</h1>`;
    startOver.appendChild(p);

    playGame = false;

    newGame()
}


function newGame() {
    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click" , function (){
        randomNumber= parseInt(Math.random()*101);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = " ";
        lowOrHi.innerHTML = " ";
        remaining.innerHTML = `${11 - numGuesses}`;
        userInput.removeAttribute("disable");
        startOver.removeChild(p);
        playGame = true;
    })
}