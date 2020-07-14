let studentScore = 15
let possibleScore = true

let calGrade = function(percent){
    if(percent > 90) return 'A'
    else if(percent > 80) return 'B'
    else if(percent > 70) return 'C'
    else if(percent > 60) return 'D'
    else return 'F'
}
let grade = function(studentScore, possibleScore){
    if(typeof studentScore !== 'number' || typeof possibleScore !== 'number'){
        throw Error('Arguments must be numbers')
    }
    let percent = (studentScore/possibleScore) * 100
    let result = `You got a ${calGrade(percent)} (${percent}%)!`
    return result
}

try{
    console.log(grade(studentScore, possibleScore))
} catch (e){
    console.log(e.message)
}

