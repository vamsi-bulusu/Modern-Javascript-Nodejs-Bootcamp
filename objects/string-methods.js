let name = ' Vamsi Krishna '

//Length Property
console.log(name.length)


//Convert to upper case
console.log(name.toUpperCase())


//Convert to lower case
console.log(name.toLowerCase())


//Includes method --> searches pattern in a string
let password = 'vamsi123password'

console.log(password.includes('password'))


//Trim method
console.log(name.trim())

//check if it's a valid password
let isValidPassword = function(passcode){
    return passcode.length > 8 && !passcode.includes('password')
}


console.log(isValidPassword('asdfgh'))
console.log(isValidPassword('asdfgh4883c'))
console.log(isValidPassword('asdfghpassword'))



