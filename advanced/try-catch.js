

const square = (num) => {
    if(typeof num === 'number') return num*num
    else throw Error('Argument must be a number')
}

// works well due to type conversion
//console.log(square(true)) 


// how to handle errors thrown by strict type checking -> try-catch
try{
    console.log(square(true))
}catch (e){
    console.log('catch block is running')
}


