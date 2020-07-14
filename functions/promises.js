// setTimeout(() => {
//     console.log("Message from setTimeOut")
// }, 2000)


// console.log("Before set-timeout")


const getDataCallBack = (num, callback) => {
    setTimeout(() => {
        if(typeof num === 'number'){
            callback(undefined, num*2)
        }
        else{
            callback('Number must be provided')
        }
    }, 2000)
}

// Callback hell
getDataCallBack(2, (error, data) => {
    if(error){
        console.log(error)
    } else{
        getDataCallBack(data, (error, data) => {
            if(error){
                console.log(error)
            }else {
                console.log(data)
            }
        })
    }
})


//Create Promise to process async operations
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    }, 2000)
})

//Resolving resolved or rejected actions
getDataPromise('12').then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(data)
}).catch( (err) => {
    console.log(err)
})

