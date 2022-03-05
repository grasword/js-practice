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
dog.saySomething()
console.log(dog.getName)
console.log(dog.getAge)
console.log(dog.getColor)

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
console.log(cat.getWeight)

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
        this.deck.push(new Card(s, card, cards[card], card == 1 || card > 10))
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
    if (cardOne > cardTwo) {
      return cardOne
    } else if (cardOne < cardTwo) {
      return cardTwo
    } else {
      return null
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

      if (Card.compare(card1, card2) === card1) {
        playerOne.setWin = 1
        message = `Winner is ${playerOne.name}`
      } else if (Card.compare(card1, card2) === null) {
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

    if (playerOne.getWins > playerTwo.getWins) {
      console.log(`${playerOne.name} wins ${playerOne.getWins} to ${playerTwo.getWins}`)
    } else if (playerOne.wins < playerTwo.wins) {
      console.log(`${playerTwo.name} wins ${playerTwo.getWins} to ${playerOne.getWins}`)
    } else {
      console.log(`It's a draw! ${playerOne.getWins} to ${playerTwo.getWins}`)
    }
  }
}

const playerOne = new Player('Oleh')
const playerTwo = new Player('Euhen')

Player.play(playerOne, playerTwo)
