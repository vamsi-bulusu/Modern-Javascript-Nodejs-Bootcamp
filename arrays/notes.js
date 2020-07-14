const note = ['note 1', 'note 2', 'note 3']

//push and pop (manipulate array from ending) 
console.log(`Removed item : ${note.pop()}`)
note.push('note 4')

//shift and unshift (manipulate array from starting)
console.log(note.shift())
note.unshift('My first new note')

//Splice --> remove element from middle(args -> (index, num_elements, new_element(optional)))
note.splice(1, 0, 'new note 2')

//Looping through the list
note.forEach(function(item, index){
    console.log(`${index}. ${item}`)
})

console.log(note.length)
console.log(note)


for (let index = 0; index < note.length; index++) {
    const element = note[index];
    console.log(element)
}

let listOfSeries = [{
    name : 'Narcos',
    cast : 'Pablo Escobar'
},{
    name : 'Two and half Men',
    cast : 'Charlie Harper'
},
{
    name : 'Queen of South',
    cast : 'Teresa Mendoza'
}
]

//Searching an object in a list
const index = listOfSeries.findIndex(function (item, index){
    return item.cast === 'Charlie Harper'
})
console.log(index)

console.log(listOfSeries)

const sortList = function(list){
    list.sort(function (a, b){
        if(a.name.toLowerCase() < b.name.toLowerCase()){
            return -1
        }else if(b.name.toLowerCase() < a.name.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}
sortList(listOfSeries)
console.log('Sorted List of series:', listOfSeries)

//Filtering through a list of nodes


const findList = function(series, query){
    return series.filter(function(item){
        const isNameMatch = item.name.toLowerCase().includes(query)
        const isCastMatch = item.cast.toLowerCase().includes(query)
        return isNameMatch || isCastMatch
    })
}

console.log(findList(listOfSeries, 'ar'))