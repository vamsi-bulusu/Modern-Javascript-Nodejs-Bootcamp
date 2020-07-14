//arrow functions take the form (args) => expression

const square = function(num){
    return num * num
}

const squareArrowFunc = (num) => num*num

console.log(squareArrowFunc(5))
console.log(square(5))


const people = [{
    name: 'vamsi',
    age: 21
},{
    name: 'surya',
    age: 25
},{
    name: 'sekhar',
    age: 54
}]



const peopleUnderThirty = people.filter((person) => person.age < 30)

console.log(peopleUnderThirty)