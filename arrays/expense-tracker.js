const account = {
    name : 'Vamsi Krishna',
    expenses : [],
    income : [],
    addIncome: function (description, amount){
        this.income.push({description : description, amount : amount})
    },
    addExpense: function (description, amount){
        this.expenses.push({description : description, amount : amount })
    },
    getAccountSummary: function (){
        let totalExpenditure = 0, totalIncome = 0
        this.expenses.forEach(function(item){
            totalExpenditure += item.amount
        })
        this.income.forEach(function(item){
            totalIncome += item.amount
        })
        return `${this.name} has a balance of $${totalIncome-totalExpenditure}. $${totalIncome} in income. $${totalExpenditure} in expenses.`
    } 
}


// Expenses -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Vamsi Krishna has $X in expenses


account.addExpense('Rent', 100)
account.addExpense('Travelling', 50)
account.addExpense('Food', 200)
account.addIncome('Salary', 500)
console.log(account.getAccountSummary())

