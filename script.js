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

const randomWord = 'fixed'
//candidateWords[Math.floor(Math.random() * candidateWords.length)]
let guessedWord = '-'.repeat(randomWord.length)
guessedWordElement.textContent = guessedWord

document.addEventListener('keydown', event => {
  const keyPressed = event.key
  feedbackElement.textContent = `You have pressed ${keyPressed}.`
  const indexOfLetter = randomWord.indexOf(keyPressed)
  if (indexOfLetter === -1) {
    feedbackElement.textContent = feedbackElement.textContent + ' That was wrong, numbnuts.'
  }
  console.log(indexOfLetter)
})