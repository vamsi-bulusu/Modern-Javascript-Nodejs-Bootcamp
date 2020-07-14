let num = 103.942


//toFixed method -> formats a number to n digits
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


//Math.random generates a random number between 0-1
console.log(Math.random())



let makeGuess = function(guess){
    let min = 10
    let max = 20
    let generatedNum = Math.floor(Math.random() * (max-min + 1)) + min
    return generatedNum === guess
}

console.log(makeGuess(16))
