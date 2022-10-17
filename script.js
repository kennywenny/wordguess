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
const guessedWord = '-'.repeat(randomWord.length)
console.log(randomWord)
console.log(guessedWord)