const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Find the person who has many skills in the users object

const mostSkilled = (users) => {
  let maxSkillsLength = 0
  let storedUser = {}
  const usersTuple = Object.entries(users)
  usersTuple.forEach((user) => {
    const skills = user[1].skills
    if (skills.length > maxSkillsLength) {
      maxSkillsLength = skills.length
      storedUser = user
    }
  })
  return `${storedUser[0]} has skills ${storedUser[1].skills.join(' ')}`
}

console.log(mostSkilled(users))

// First solution before refactoring
//
// const mostSkilled = (users) => {
//   let mostSkilled = {}
//   for (const user in users) {
//     if (users.hasOwnProperty(user)) {
//       const skills = users[user].skills
//       const skillsLength = skills.length
//       if (!mostSkilled.skillsLength || mostSkilled.skillsLength < skillsLength) {
//         mostSkilled = {
//           user,
//           skills,
//           skillsLength
//         }
//       }
//     }
//   }
//   return `${mostSkilled.user} has skills ${mostSkilled.skills.join(' ')}`
// }

// Second solution with reduce()
//
// const mostSkilledFP = (users) => {
//   let usersTuple = Object.entries(users)

//   let mostSkilled = usersTuple.reduce((p, c) => {
//     return p[1].skills.length > c[1].skills.length ? p : c
//   })
//   return `${mostSkilled[0]} has skills ${mostSkilled[1].skills.join(', ')}`
// }

// console.log(mostSkilledFP(users))

// 2. Count logged in users, count users having greater than equal to 50 points from the following object
// The number of logged in users - 2
// The number of users with greater than or equal to 50 points - 3
const countLoginUsers = (users) => {
  let count = 0
  const usersTuple = Object.entries(users)
  usersTuple.forEach((user) => {
    if (user[1].isLoggedIn) {
      count++
    }
  })
  return count
}

console.log(countLoginUsers(users)) // 2

const countUsers = (users, number) => {
  let count = 0
  const usersTuple = Object.entries(users)
  usersTuple.forEach((user) => {
    if (user[1].points >= number) {
      count++
    }
  })
  return count
}

console.log(countUsers(users, 50)) // 3

// 3. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
// User info - John Doe
// Total incomes - 3000
// Total expenses - 1050
// Account balamce - 1950

// type Fund = {
//   income: number,
//   description: string
// }

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes,
  expenses,
  totalIncome: function () {}
}

// Questions are based on the following two arrays: users and products
// Imagine you are getting the above users collection from a MongoDB database.

const usersDb = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false
  }
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

const newUser = {
  _id: 'gdvmg',
  username: 'Alex1',
  email: 'alex1@alex.com',
  password: '123222',
  createdAt: '09/03/2021 01:02 PM',
  isLoggedIn: false
}

const signUp = (newUser) => {
  let isRegistered = false
  usersDb.forEach((user) => {
    if (user._id === newUser._id) {
      isRegistered = !isRegistered
    }
  })
  isRegistered
    ? console.log(`The user is already registered ${JSON.stringify(newUser, null, ' ')}`)
    : usersDb.push(newUser)
}

signUp(newUser)

// b. Create a function called signIn which allows user to sign in to the application
const signIn = (email, password) => {
  usersDb.forEach((user) => {
    const arr = Object.values(user)
    const isValidEmail = arr.includes(email)
    const isValidPassword = arr.includes(password)
    if (isValidEmail && isValidPassword) {
      user.isLoggedIn = true
      console.log(`Welcome ${user.username}`)
      return
    }
  })
}

signIn('alex@alex.com', '123123')

// The products array has three elements and each of them has six properties.

// a. Create a function called rateProduct which rates the product
// helper function
const findProduct = (prodId) => {
  for (let prod of products) {
    if (prod._id === prodId) return prod
  }
}

const rateProduct = (prodId, rate, userId) => {
  const product = findProduct(prodId)
  if (product) {
    product.ratings.push({ userId, rate })
    console.log('Thanks for rating our product!')
  } else {
    console.log('Wrong product ID')
  }
}

rateProduct('hedfcg', 4, 'testId')
rateProduct('aegfal', 6, 'testId_2')

// b. Create a function called averageRating which calculate the average rating of a product
const averageRating = (prodId) => {
  const product = findProduct(prodId)
  if (product) {
    const rates = product.ratings.map((el) => el.rate)
    return rates.reduce((a, b) => a + b) / rates.length
  } else {
    console.log('Wrong product ID')
  }
}

console.log(averageRating('eedfcf'))

// 2. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (prodId, userId) => {
  const product = findProduct(prodId)
  if (product) {
    const likes = product.likes
    let isLiked = false

    likes.forEach((like, i) => {
      if (like === userId) {
        isLiked = !isLiked
        product.likes.splice(i, 1)
      }
    })

    if (!isLiked) product.likes.push(userId)
  } else {
    console.log('Wrong product ID')
  }
}

likeProduct('aegfal', 'testUserId')
