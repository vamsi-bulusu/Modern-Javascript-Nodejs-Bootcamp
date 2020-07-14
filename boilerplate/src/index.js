//REST PARAMETER --> packs multiple arguments into a list
//SpreadParameter --> unpacks list of arguments
const calculateAverage = (grade, ...numbers) => {
    let average = 0
    numbers.forEach((number) => average += number)
    average /= numbers.length
    return average
}

const house = {
    bedrooms : 2,
    bathrooms : 1.5,
    yearBuilt : 2017
}

const newHouse = {
    ...house
}

console.log(newHouse)


console.log(calculateAverage('vamsi',1, 2, 3))


