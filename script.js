const candidateWords = [
  'words',
  'manifest',
  'saxophone',
  'smelly',
  'intelligent',
  'who',
  'rhythm'
]

const randomWord = candidateWords[Math.floor(Math.random() * candidateWords.length)]
let guessedWord = '-'.repeat(randomWord.length)

document.addEventListener('keydown', event => {
  console.log(event)
})