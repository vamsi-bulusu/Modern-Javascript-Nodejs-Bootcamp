import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEle = document.querySelector('#puzzle')
const guessesEle = document.querySelector('#guesses')

let game

window.addEventListener('keypress', function (e){ 
    game.makeGuess(e.key)
    render()
})

const render = () => {
    puzzleEle.innerHTML = ''
    guessesEle.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzleEle.appendChild(span)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
