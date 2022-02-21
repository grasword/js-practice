const countries = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar'
  }
]

const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
]

// 1. Iterate through the users array and get all the keys of the object using destructuring
const keys = (users) => {
  return users.map(
    ({ name, scores, skills, age }) =>
      `The user name is ${name}, ${age} years old, with a score of ${scores}, proficient in ${skills}`
  )
}

keys(users)

// 2. Find the persons who have less than two skills
const getPerson = (users, number) => {
  // const persons = []
  // for (const { name, skills } of users) {
  //   if (skills.length < number) {
  //     persons.push(name, skills.length)
  //   }
  // }
  // return persons[0]

  return users.filter(({ skills }) => skills.length < number).map(({ name }) => name)
}
console.log(`Persons who have less than two skills: ${getPerson(users, 2)} `)

// 3. Destructure the countries object print name, capital, population and languages of all countries
const getCountries = (countries) => {
  return countries.map(
    ({ name, capital, population, languages }) =>
      `Country name: ${name} \n Capital: ${capital} \n Population: ${population} \n Languages: ${languages}`
  )
}

console.log(getCountries(countries))

// 4. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = (students) => {
  return students.map((v) => {
    return { name: v[0], skills: v[1], scores: v[2] }
  })
}

console.log(convertArrayToObject(students))

// 5. Copy the student object to newStudent without mutating the original object. In the new object add the following:
const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js']
  }
}
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const moderateStudent = (student) => {
  const newStudent = {
    ...student,
    skills: {
      ...student.skills,
      frontEnd: [...student.skills.frontEnd, { skill: 'BootStrap', level: 8 }],
      backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
      dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
      dataScience: [...student.skills.dataScience, 'SQL']
    }
  }
  return newStudent
}
console.log(moderateStudent(student))
