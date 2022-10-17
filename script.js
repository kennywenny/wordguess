const candidateWords = [
  'words',
  'manifest',
  'saxophone',
  'smelly',
  'intelligent',
  'who',
  'rhythm'
]

const guessedWordElement = document.querySelector('#guessed_word')
const feedbackElement = document.querySelector('#feedback')

const randomWord = 'bookkeeper'
//candidateWords[Math.floor(Math.random() * candidateWords.length)]
let guessedWord = '-'.repeat(randomWord.length)
guessedWordElement.textContent = guessedWord

document.addEventListener('keydown', event => {
  const keyPressed = event.key
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
      return
    }
    guessedWord = guessedWord.substring(0, indexOfLetter) + randomWord[indexOfLetter] + guessedWord.substring(indexOfLetter + 1)
    console.log(guessedWord)
    currentIndex = indexOfLetter+1
    foundLetter = true
  }
})