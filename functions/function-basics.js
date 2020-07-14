// Function -> arguments, code, return type


// It is a reusable block of code


// Using template strings
let greet = function(name){
    console.log(`Hello how are you doing ${name}`)
}

greet('vamsi') // callable variable


let square = function(num){
    let result = num * num
    return result
}


console.log(square(3))

// Write a function to convert fahrenheit to celsius

let celsiusConverter = function(fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9)
    return celsius
}

console.log(celsiusConverter(32))
console.log(celsiusConverter(0))


