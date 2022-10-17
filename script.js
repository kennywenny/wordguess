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

const randomWord = 'bookkeeper'
//candidateWords[Math.floor(Math.random() * candidateWords.length)]
let guessedWord = '-'.repeat(randomWord.length)
guessedWordElement.textContent = guessedWord

let countdown = 5

const timer = setInterval(() => {
  countdown--
  if (countdown <= 0) {
    loseGame()
  }
  console.log(countdown)
}, 1000)

document.addEventListener('keydown', event => {
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
    currentIndex = indexOfLetter+1
    foundLetter = true
  }
})

function validateGuessedWord() {
  if (guessedWord === randomWord) {
    console.log('DONE') // TODO
  }
}

function loseGame() {
  console.log('You are a loser')
  clearInterval(timer)
}