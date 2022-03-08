// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
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

const barsik = new Animal('Barsik', 9, 'red', 4)
console.log('Task 1: \n', barsik)

// 2. Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  saySomething() {
    console.log(`Hello, I'm a Doggo, my name is ${this.getName}`)
  }
}
const dog = new Dog('Kubik', 10, 'black', 4)

console.log('Task 2: \n')
dog.saySomething()
console.log('Dogs name: ', dog.getName)
console.log('Dogs age: ', dog.getAge)
console.log('Dogs color: ', dog.getColor)

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
console.log('Task 3: cats weight -', cat.getWeight)

// 4. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has
//  totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName
    this.lastName = lastName
    this.incomes = incomes
    this.expenses = expenses
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

console.log('Task 4: \n')
console.log('Total Income', person.totalIncome())
console.log('Total Expense', person.totalExpense())
person.addIncome(450, 'gift')
person.addExpense(700, 'massage')
console.log('Account Balance', person.accountBalance())
console.log('Account Info', person.accountInfo())

// 5. You'll need to implement 3 classes: a Deck , a Card and a Player classes.
// Deck Class Description:
// Class members:

// properties:
// cards : contains an array of remaining cards in the deck (initially it is 52).
// count : number of remaining cards in the deck, should be readonly.

// methods:
// shuffle() : rearranges cards in the deck randomly.
// draw(n) : removes the last n cards from the deck and returns them.

// Implementation Details: Initially each deck is filled with 52 cards (13 from each of 4 suits).
class Deck {
  constructor() {
    this.deck = []
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs']
    const cards = {
      1: 'Ace',
      2: 'Two',
      3: 'Three',
      4: 'Four',
      5: 'Five',
      6: 'Six',
      7: 'Seven',
      8: 'Eight',
      9: 'Nine',
      10: 'Ten',
      11: 'Jack',
      12: 'Queen',
      13: 'King'
    }
    suits.forEach((s) => {
      for (const card in cards) {
        this.deck.push(new Card(s, card, cards[card], this.isFaceCard(card)))
      }
    })
    this.shuffle()
  }

  shuffle() {
    this.deck.forEach((el, i) => {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      const tempEl = this.deck[randomIndex]
      this.deck.splice(randomIndex, 1, el)
      this.deck.splice(i, 1, tempEl)
    })
    return this
  }

  draw() {
    return this.deck.pop()
  }
  get count() {
    return this.deck.length
  }
  isFaceCard(card) {
    return card == 1 || card > 10
  }
}

// Card Class Description:
// Class members:

// properties:
// suit : the suit of the card (i.e. ['Hearts', 'Diamonds', 'Clubs', ‘Spades']).
// rank: an integer from 1 to 13. ("Ace" is 1, "King" is 13, i.e. {1: 'Ace', 11: 'Jack', 12: 'Queen', 13: 'King'}).
// isFaceCard : a readonly property that defines whether a card is a face card (i.e. rank is either 1 or > 10).

// methods:
// toString(): human-readable string representation of the card (e.g. "Ace of Spades", "10 of Clubs", "Queen of Hearts" etc.)
// Compare(cardOne, cardTwo): Cards must be Comparable to other cards by ranks only (no special handling for Ace).
class Card {
  constructor(suit, rank, name, isFaceCard) {
    this.suit = suit
    this.rank = rank
    this.name = name
    this.isFaceCard = isFaceCard
  }
  toString() {
    return `${this.name} of ${this.suit}`
  }
  static compare(cardOne, cardTwo) {
    if (cardOne === cardTwo) {
      return null
    } else {
      return cardOne > cardTwo
    }
  }
}

// Player Class Description
// Class members:

// properties:

// name : player name;
// wins: number of wins, readonly;
// deck : a deck of cards;

// methods:
// Play(playerOne, playerTwo): starts the game;

// Implementation Details:

// Players both take a card from their deck.
// Whoever has a card with higher value wins the round and gets one point (if the cards are of the same value, neither of them gets a point).
// After the two cards are discarded (removed from the deck), they flip the next card from the deck.
// The game lasts until they are run out of cards.
// When game ends, figure out who is a winner (compare their scores) and return a summing up message with the final score: {Winner} wins {X} to {Y} (i.e. "John wins 10 to 7").

// Please think carefully, what should be exposed to the world and what should be kept private (encapsulate sensitive data and unnecessary implementation
// details). Consider making use of static methods!
class Player {
  constructor(name) {
    this.name = name
    this.deck = new Deck()
    this.wins = 0
  }
  get getWins() {
    return this.wins
  }

  set setWin(number) {
    this.wins += number
  }

  static play(playerOne, playerTwo) {
    while (playerTwo.deck.count > 0) {
      let message = ''
      const card1 = playerOne.deck.draw()
      const card2 = playerTwo.deck.draw()
      const compareCards = Card.compare(card1.rank, card2.rank)

      if (compareCards) {
        playerOne.setWin = 1
        message = `Winner is ${playerOne.name}`
      } else if (compareCards === null) {
        message = `It's a draw.`
      } else {
        playerTwo.setWin = 1
        message = `Winner is ${playerTwo.name}`
      }

      console.log(
        `${playerOne.name} draws a '${card1.toString()}' \n${
          playerTwo.name
        } draws a '${card2.toString()}' \n  ${message}`
      )
    }

    const playerOneWins = playerOne.getWins
    const playerTwoWins = playerTwo.getWins
    if (playerOneWins > playerTwoWins) {
      console.log(`${playerOne.name} wins ${playerOneWins} to ${playerTwoWins}`)
    } else if (playerOneWins < playerTwoWins) {
      console.log(`${playerTwo.name} wins ${playerTwoWins} to ${playerOneWins}`)
    } else {
      console.log(`It's a draw! ${playerOneWins} to ${playerTwoWins}`)
    }
  }
}

const playerOne = new Player('Oleh')
const playerTwo = new Player('Euhen')

console.log('Task 5: \n')
Player.play(playerOne, playerTwo)

// 6. You'll need to implement inheritance in JS: a base class Employee that takes a single data object, two derived from it classes:
//  Manager and BlueCollarWorker, and two more classes that inherit from Manager: HRManager and SalesManager.

// Employee Class Description:
// Class members:

// properties:

// id ;
// firstName ;
// lastName ;
// birthday ;
// salary ;
// position ;
// department ;
// age : readonly property dynamically calculated based on birthday;
// fullName: readonly;
// EMPLOYEES : static readonly property where each user gets registered on initialization (contains list of all instances, except intentionally deleted once).

// methods:

// quit() - remove the employee from EMPLOYEES;
// retire() - log a message: "It was such a pleasure to work with you!" and remove from EMPLOYEES;
// getFired() - log a message: "Not a big deal!" and remove from EMPLOYEES;
// changeDepartment(newDepartment) ;
// changePosition(newPosition) ;
// changeSalary(newSalary) ;
// getPromoted(benefits) - takes an object that can contain salary, position and department in any combination.
// If the property is defined, then appropriate method is called. Log: "Yoohooo!"
// getDemoted(punishment) - apply the same logic as to getPromoted. Log: "Damn!"
class Employee {
  static EMPLOYEES = []

  constructor(firstName, lastName, birthday, salary, position, department) {
    this.id = this.generateId()
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = birthday
    this.salary = salary
    this.position = position
    this.department = department
    this.setEmployees = this
  }

  get age() {
    const birthDate = new Date(this.birthday)
    const today = new Date()
    const month = today.getMonth() - birthDate.getMonth()
    let age = today.getFullYear() - birthDate.getFullYear()
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
  static get getEmployees() {
    return this.EMPLOYEES
  }
  set setEmployees(employee) {
    Employee.EMPLOYEES.push(employee)
  }

  // Methods
  quit() {
    const index = Employee.EMPLOYEES.findIndex((v) => v.id === this.id)
    Employee.EMPLOYEES.splice(index, 1)
  }
  retire() {
    this.quit()
    console.log(`It was such a pleasure to work with you ${this.fullName}!`)
  }
  getFired() {
    this.quit()
    console.log('Not a big deal!')
  }
  generateId() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  changeDepartment(newDepartment) {
    this.department = newDepartment
  }
  changePosition(newPosition) {
    this.position = newPosition
  }
  changeSalary(newSalary) {
    this.salary = newSalary
  }
  getPromoted(benefits) {
    this.changeProps(benefits)
    console.log('Yoohooo!')
  }
  getDemoted(punishment) {
    this.changeProps(punishment)
    console.log('Damn!')
  }
  changeProps(props) {
    for (const prop in props) {
      if (prop === 'salary') this.changeSalary(props[prop])
      if (prop === 'position') this.changePosition(props[prop])
      if (prop === 'department') this.changeDepartment(props[prop])
    }
  }
}

// Manager Class Description:
// Implementation Details: Inherits from Employee. Its constructor does not require position property, it should always be initialized as ‘manager’.
// Class members:

// properties:
// managedEmployees : readonly, selects all instances that belong to his/her department that are not managers.
class Manager extends Employee {
  constructor(firstName, lastName, birthday, salary, department) {
    super(firstName, lastName, birthday, salary, department)
    this.department = department
    this.position = 'manager'
  }
  get managedEmployees() {
    return Employee.EMPLOYEES.filter((e) => e.department === this.department && e.position !== this.position)
  }
}

// BlueCollarWorker Class Description:
// Implementation Details: Inherits from Employee, no special logic applied here.
class BlueCollarWorker extends Employee {}

// HRManager Class Description:
// Implementation Details: Inherits from Manager. Its constructor does not require department property, it should always be initialized as ‘hr’.
class HRManager extends Manager {
  constructor(firstName, lastName, birthday, salary) {
    super(firstName, lastName, birthday, salary)
    this.department = 'hr'
  }
}

// SalesManager Class Implementation:
// Implementation Details: Inherits from Manager. Its constructor does not require department property, it should always be initialized as ‘sales’.
class SalesManager extends Manager {
  constructor(firstName, lastName, birthday, salary) {
    super(firstName, lastName, birthday, salary)
    this.department = 'sales'
  }
}

console.log('Task 6: \n')
const employeeOleg = new Employee('Oleh', 'Zhmaiev', '1989, 10, 25', 1000, 'Junior QA Engineer', 'production')
const employeeSerj = new Employee('Serhii', 'Lavrinenko', '1988, 12, 28', 3000, 'Senior Frontend Developer', 'service')
const employeeEuhen = new Employee('Euhen', 'Sokolov', '1995, 8, 13', 1500, 'Middle Backend Developer', 'production')

const blueCollarWorkerVlad = new BlueCollarWorker('Vlad', 'Gavrilov', '1997, 11, 21', 2000, 'CoffeMan', 'service')
console.log('Blue collar worker Vlad: ', blueCollarWorkerVlad)

const hrManagerIgor = new HRManager('Igor', 'Samsonov', '1985, 5, 10', 1300)
console.log('HR Manager Igor: ', hrManagerIgor)

const salesManagerTamara = new SalesManager('Tamara', 'Martinova', '1976, 1, 13', 900)
console.log('Sales Manager Tamara: ', salesManagerTamara)

console.log('Full name is ', employeeOleg.fullName)
console.log('Age is ', employeeOleg.age)
employeeOleg.retire()
employeeSerj.getPromoted({ salary: 3500, position: 'TeamLead Frontend Developer', department: 'production' })
console.log('Employees after Oleg retire and Serj promotion \n', Employee.EMPLOYEES)

const managerOksana = new Manager('Oksana', 'Ivanova', '1988, 5, 18', 1700, 'production')
console.log('Manager Oksana \n', managerOksana)
console.log('Managed Employees by Oksana: \n', managerOksana.managedEmployees)
