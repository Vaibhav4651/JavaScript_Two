# Projects related to DOM

## project link
[click here]()

# Solution code

## project1

```javascript
console.log("Vaibhav)


let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = [];
let numGusses = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a valid Number')
    }
    else if (guess < 1) {
        alert('Please Enter a valid Number more than 1')        
    }
    else if (guess > 100) {
        alert('Please Enter a valid Number less than 100')        
    }
    else {
        prevGuess.push(guess)
        if (numGusses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("Congratulation your Guess is right")
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage("Number is Too low")
    }
    else if (guess > randomNumber) {
        displayMessage("Number is Too High")
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} - `
    numGusses++
    remaining.innerHTML = `${11-numGusses}`
}

function displayMessage(message) {
    loworHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGusses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGusses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

