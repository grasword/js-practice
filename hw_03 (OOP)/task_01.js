// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    ;(this.name = name), (this.age = age), (this.color = color), (this.legs = legs)
  }

  get getName() {
    return this.name
  }

  get getAge() {
    return this.age
  }
  get getColor() {
    return this.color
  }
  eat() {
    console.log(`${this.name} eats`)
  }
}

const animal = new Animal('Barsik', 9, 'red', 4)

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  saySomething() {
    console.log(`Hello, I'm a Doggo, my name is ${this.getName}`)
  }
}
const dog = new Dog('Kubik', 10, 'black', 4)
dog.getName()
dog.getAge()
dog.getColor()

// 3. Override the method you create in Animal class
class Cat extends Animal {
  constructor(name, age, color, legs, weight) {
    super(name, age, color, legs, weight)
    this.weight = weight
  }
  get getWeight() {
    return this.weight
  }

  saySomething() {
    console.log(`Hello, I'm a Cat, my name is ${this.getName}`)
  }
}
const cat = new Cat('Dushes', 1, 'orange', 4, 'fat')
cat.getWeight()

// 4. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has
//  totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    ;(this.firstName = firstName), (this.lastName = lastName), (this.incomes = incomes), (this.expenses = expenses)
  }
  totalIncome() {
    return this.incomes.reduce((a, b) => a + b.income, 0)
  }
  totalExpense() {
    return this.expenses.reduce((a, b) => a + b.expense, 0)
  }
  accountInfo() {
    return `${this.firstName} ${this.lastName}\n
    Total incomes = ${this.totalIncome()}\n
    Total expenses = ${this.totalExpense()}\n
    Account balance = ${this.accountBalance()}`
  }
  addIncome(income, description) {
    this.incomes.push({ income, description })
  }
  addExpense(expense, description) {
    this.expenses.push({ expense, description })
  }
  accountBalance() {
    return this.totalIncome() - this.totalExpense()
  }
}

const person = new PersonAccount(
  'Oleh',
  'Zhmaiev',
  [
    { income: 2000, description: 'salary' },
    { income: 400, description: 'courses' }
  ],
  [
    { expense: 150, description: 'taxi' },
    { expense: 400, description: 'bar' }
  ]
)

console.log('Total Income', person.totalIncome())
console.log('Total Expense', person.totalExpense())
person.addIncome(450, 'gift')
person.addExpense(700, 'massage')
console.log('Account Balance', person.accountBalance())
console.log('Account Info', person.accountInfo())

// 5. You'll need to implement 3 classes: a Deck , a Card and a Player classes.
