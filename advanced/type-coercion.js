/*
Type coercion :
=============
Type coercion means that when the operands of an operator are different types, 
one of them will be converted to an "equivalent" value of the other operand's type.
*/


const expresion = 5 + '5' // js internally transforms integer variable to string type

if(5 == '5'){
    console.log('== operator doesnt care about type of the operands it converts types based on type coercion principle')
}

if(5 !== '5'){
    console.log('!== does strict type checking and compares operand type')
}

console.log(expresion)