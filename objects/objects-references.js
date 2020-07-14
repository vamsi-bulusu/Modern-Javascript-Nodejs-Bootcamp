let myAccount = {
    name: 'Vamsi Krishna',
    expenses: 0,
    income: 0
}



let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}
// Pass By Reference
addExpense(myAccount, 100)

// Pointer variable pointing to my account object
let otherAccount = myAccount

console.log(otherAccount)

addExpense(otherAccount, 1000)

console.log(myAccount)