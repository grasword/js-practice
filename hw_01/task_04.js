const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// 1. First remove all the punctuations and change the string to array and count the number of words in the array

const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const countWords = (text) => {
  const regexp = /[^\w\s]|_/g
  const formattedText = text.replace(regexp, '')
  const textArr = formattedText.split(' ')
  const length = textArr.length
  console.log(`Length of the sentence is ${length}`)
  return length
}

countWords(text)

// 2. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
//    If it does not exist add to the countries list and print the array.
const ETHIOPIA = 'Ethiopia'

const findCountry = (country) => {
  if (countries.includes(country)) {
    console.log(country.toUpperCase())
  } else {
    countries.push(country)
    console.log(countries)
  }
}

findCountry(ETHIOPIA)
findCountry('Ukraine')

// 3. In the webTechs array check if Sass exists in the array and if it exists print
//   'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const SASS = 'Sass'

const checkTool = (tool) => {
  if (webTechs.includes(tool)) {
    console.log(`${tool} is a CSS preprocess`)
  } else {
    webTechs.push(tool)
    console.log(webTechs)
  }
}

checkTool(SASS)

// 4. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

// 5. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
const sortedArrAges = ages.sort((a, b) => a - b)

const maxAge = sortedArrAges.pop()
const minAge = sortedArrAges.shift()

console.log(`Min and Max age are ${minAge} and ${maxAge}`)

// Find the median age(one middle item or two middle items divided by two)
const findMedian = (arr) => {
  const medianIndex = Math.floor(arr.length / 2)
  if (arr.length % 2 == 0) {
    const median = (arr[medianIndex] + arr[medianIndex + 1]) / 2

    console.log(`Median is ${median}`)
    return median
  } else {
    const median = arr[medianIndex]

    console.log(`Median is ${median}`)
    return median
  }
}

findMedian(sortedArrAges)

// Find the average age(all items divided by number of items)
const findAverage = (arr) => {
  const sum = arr.reduce((a, b) => a + b)
  const average = sum / arr.length

  console.log(`Average age is ${average}`)
  return average
}

findAverage(sortedArrAges)

// Find the range of the ages(max minus min)
const findRange = (min, max) => {
  const range = max - min

  console.log(`Range is ${range}`)
  return range
}

findRange(minAge, maxAge)

// Compare the value of (min - average) and (max - average), use Math.abs() method
const compare = (a, b) => {
  return Math.abs(a - b).toFixed(1)
}

const average = findAverage(sortedArrAges)

console.log(`Difference between min and average is ${compare(minAge, average)}`)
console.log(`Difference between min and average is ${compare(maxAge, average)}`)
