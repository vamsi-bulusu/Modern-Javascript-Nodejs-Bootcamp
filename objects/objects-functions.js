let personOne = {
    name: 'vamsi',
    age: '21',
    location: 'Hyderabad'
}

let personTwo = {
    name: 'vamsi',
    age: '21',
    location: 'Hyderabad'
}


let record = function(person){
    return {
        Bio: `${person.name} is ${person.age} and lives in ${person.location}`
    }
}


let printRecord = function(record){
    console.log(`Type -> ${record}, object_summary: ${record.Bio}`)
}

printRecord(record(personOne))
printRecord(record(personTwo))


