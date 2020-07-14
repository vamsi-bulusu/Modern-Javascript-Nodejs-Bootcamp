const todos = ['play cricket', 'watch tv', 'sleep on bed', 'play games', 'go for a walk']

//Delete third item
todos.splice(3, 1)

//Add a new item onto the end
todos.push('code all night')

//Remove first item
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function(item, index){
    console.log(`${index+1}. ${item}`)
})
console.log('--------------------------')
for (let index = 0; index < todos.length; index++) {
    const element = todos[index];
    console.log(`${index+1}. ${element}`)
}


//Convert array -> array of objects -> { text, completed}
const todo = [{
    text : 'Play Cricket',
    completed : true
},{
    text : 'Watch Tv',
    completed : false
},{
    text : 'Sleep on bed',
    completed : true
},{
    text : 'Play Games',
    completed : false
}]

//create a function to remove a todo by text value
const deleteToDo = function(todo, todoText){
    const index = todo.findIndex(function(item){
        return item.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index > -1) todo.splice(index)
}
deleteToDo(todo, 'Play Games')
console.log(todo)

const sortToDo = function(list){
    list.sort(function (a, b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed && a.completed){
            return 1
        }else{
            return 0
        }
    })
}

sortToDo(todo)
console.log('Sorting Series',todo)

const getThingsToDo = function(todo){
    return todo.filter(function (item){
        return !item.completed
    })
}
console.log('Things left :', getThingsToDo(todo))


