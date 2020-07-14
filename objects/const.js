const name = 'vamsi krishna'
const person = {
    age : 21
}
//Reassigning a constant is not possible
//name = 'vamsi'
//person = {}

//We can modify properties of a constant object but can't change the object reference
person.age = 22

console.log(name)
console.log(person)

