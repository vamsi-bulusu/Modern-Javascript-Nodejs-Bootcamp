// A closure is a combination of function with the lexical scope in which its defined

const myFunction = () =>{
    const message = "This is my message"
    printMessage = () =>{
        console.log(message)
    }
    return printMessage
}

const msg = myFunction()
msg()

//Create private variables using closures

const createCounter = () => {
    let count = 0
    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}


const counter = createCounter()

console.log(counter.get())

counter.increment()

console.log(counter.get())

