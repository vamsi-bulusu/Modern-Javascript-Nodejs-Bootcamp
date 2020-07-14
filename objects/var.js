//Var is similar to that of let but has few flaws
// with var we can redefine variable with same name which is redundant

var firstName = 'vamsi krishna'

firstName = 'vamsi'

console.log(firstName)

// Var is function scoped and not block scoped

if(true){
    var lastName = "Guera"
}
console.log(lastName)


//Example for function scope

const setName = function(){
    var name = 'vamsi'
}
setName()
//console.log(name)


// var declaration gets hoisted at the top

money = 10
console.log(money)
var money