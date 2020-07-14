const add = function(){
   console.log(arguments)
}

console.log(add(1, 2, 3))


const person = {
    name: 'vamsi',
    greet: function(){
        console.log(`Hello ${this.name}`)
    },
    func: () => console.log(`Hello ${this.name}`)
}

//regular functions are bound to object scope
person.greet()

//arrow functions are bound to local scope
person.func()

