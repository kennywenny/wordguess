const candidateWords = [
  'words',
  'manifest',
  'saxophone',
  'smelly',
  'intelligent',
  'who',
  'rhythm'
]
const validGuesses = 'abcdefghijklmnopqrstuvwxyz'

const guessedWordElement = document.querySelector('#guessed_word')
const feedbackElement = document.querySelector('#feedback')
const winsElement = document.querySelector('#wins')
const lossesElement = document.querySelector('#losses')
const gameResultElement = document.querySelector('#game_result')
const startButtonElement = document.querySelector('#start')

const winsKey = 'wins'
const lossesKey = 'losses'
let wins = localStorage.getItem(winsKey) || 0
let losses = localStorage.getItem(lossesKey) || 0
renderWinLosses()

let randomWord
let guessedWord
let countdown
let timer
let gameOn = false

startButtonElement.addEventListener('click', () => {
  gameOn = true
  randomWord = 'bookkeeper'
  //candidateWords[Math.floor(Math.random() * candidateWords.length)] // TODO: Reinstate me
  guessedWord = '-'.repeat(randomWord.length)
  guessedWordElement.textContent = guessedWord
  countdown = 5
  timer = setInterval(() => {
    countdown--
    if (countdown <= 0) {
      loseGame()
    }
    console.log(countdown)
  }, 1000)
})


document.addEventListener('keydown', event => {
  if (!gameOn) {
    return
  }
  const keyPressed = event.key
  if (!validGuesses.includes(keyPressed)) {
    return
  }
  feedbackElement.textContent = `You have pressed ${keyPressed}.`
  let currentIndex = 0
  let foundLetter = false
  while (true) {
    const indexOfLetter = randomWord.indexOf(keyPressed, currentIndex)
    console.log(indexOfLetter)
    if (indexOfLetter === -1) {
      if (!foundLetter) {
        feedbackElement.textContent = feedbackElement.textContent + ' That was wrong, numbnuts.'
      }
      guessedWordElement.textContent = guessedWord
      validateGuessedWord()
      return
    }
    guessedWord = guessedWord.substring(0, indexOfLetter) + randomWord[indexOfLetter] + guessedWord.substring(indexOfLetter + 1)
    console.log(guessedWord)
    currentIndex = indexOfLetter + 1
    foundLetter = true
  }
})

function validateGuessedWord() {
  if (guessedWord === randomWord) {
    winGame()
  }
}

function winGame() {
  gameOn = false
  clearInterval(timer)
  wins++
  localStorage.setItem(winsKey, wins)
  gameResultElement.textContent = 'YOU WON'
  renderWinLosses()
}

function loseGame() {
  gameOn = false
  clearInterval(timer)
  losses++
  localStorage.setItem(lossesKey, losses)
  gameResultElement.textContent = 'YOU LOST'
  renderWinLosses()
}

function renderWinLosses() {
  winsElement.textContent = wins
  lossesElement.textContent = losses
}