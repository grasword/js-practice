// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses  inner variables.
//    It has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance inner functions.
//    Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = function () {
  let firstName = 'John'
  let lastName = 'Doe'
  let incomes = [
    { income: 2000, description: 'salary' },
    { income: 400, description: 'courses' }
  ]
  let expenses = [
    { expense: 150, description: 'taxi' },
    { expense: 400, description: 'bar' }
  ]
  const totalIncome = function () {
    return incomes.reduce((a, b) => a + b.income, 0)
  }
  const totalExpense = function () {
    return expenses.reduce((a, b) => a + b.expense, 0)
  }
  const accountInfo = function () {
    return `${firstName} ${lastName}\n
    Total incomes = ${totalIncome()}\n
    Total expenses = ${totalExpense()}\n
    Account balance = ${accountBalance()}`
  }
  const addIncome = function (income, description) {
    incomes.push({ income, description })
  }
  const addExpense = function (expense, description) {
    expenses.push({ expense, description })
  }
  const accountBalance = function () {
    return totalIncome() - totalExpense()
  }
  return {
    totalIncome,
    totalExpense,
    accountInfo,
    addIncome,
    addExpense,
    accountBalance
  }
}

const person = personAccount()

console.log('Total Income', person.totalIncome())
console.log('Total Expense', person.totalExpense())
person.addIncome(450, 'gift')
person.addExpense(700, 'massage')
console.log('Account Balance', person.accountBalance())
console.log('Account Info', person.accountInfo())
