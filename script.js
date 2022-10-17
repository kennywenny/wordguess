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
const randomWord = candidateWords[Math.floor(Math.random() * candidateWords.length)]
let guessedWord = '-'.repeat(randomWord.length)
guessedWordElement.textContent = guessedWord

document.addEventListener('keydown', event => {
  console.log(event)
})