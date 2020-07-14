class Hangman{
    constructor(word, numGuess){
        this.word = word.toLowerCase().split('')
        this.numGuess = numGuess
        this.guessedLetters = []
        this.status = 'Playing'
    }
    getStatus(){
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if(this.numGuess === 0) this.status = 'Failed'
        else if(finished) this.status = 'Finished'
        else this.status = 'Playing'
    }
    get statusMessage(){  
        if(this.status === 'Playing') return `Guesses Left: ${this.numGuess}`
        else if(this.status === 'Failed') return `Nice try! The word was "${this.word.join('')}"`
        else return `Great Work! You guessed it right!`
    }
    get puzzle(){
        let puzzle = ''
        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' ') puzzle += letter
            else puzzle += '*'      
        })
        return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUniqueGuess = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        
        if(this.status !== 'Playing') return
    
        if(isUniqueGuess) this.guessedLetters = [...this.guessedLetters, guess]
        if(isUniqueGuess && isBadGuess) this.numGuess--
        this.getStatus()
    }
}

export { Hangman as default }
