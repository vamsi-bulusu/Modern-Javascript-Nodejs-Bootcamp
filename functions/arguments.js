// Multiple arguments

let sum = function(a, b, c){
    return a + b + c
}

console.log(sum(1, 2, 3))


//Default arguments

let tipCalculator = function(totalBill, tipPercent = 0.2){
    return totalBill * tipPercent
}

console.log(tipCalculator(100))
console.log(tipCalculator(200))