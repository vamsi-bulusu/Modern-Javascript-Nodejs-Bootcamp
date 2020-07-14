//Global scope(celsiusConverter)
  // Local Scope(fahrenheit, celsius)
    // Local Scope(isFreezing)


let celsiusConverter = function(fahrenheit){
    let celsius = (fahrenheit - 32) * (5/9)

    if(celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

console.log(celsiusConverter(32))
console.log(celsiusConverter(0))