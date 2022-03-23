// 1. Write a code which  can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const getGrade = (num) => {
  if (num >= 90 && num <= 100) {
    return 'A'
  } else if (num >= 70 && num <= 89) {
    return 'B'
  } else if (num >= 60 && num <= 69) {
    return 'C'
  } else if (num >= 50 && num <= 59) {
    return 'D'
  } else if (num >= 0 && num <= 49) {
    return 'F'
  } else {
    return 'wrong input'
  }
}

console.log('Task 1: \n', getGrade(10))
console.log('Task 1: \n', getGrade(75))

// 2.Check if the season is Autumn, Winter, Spring or Summer.
// If the user input is:

// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const getSeason = (input) => {
  const month = input.toLowerCase().charAt(0).toUpperCase() + input.toLowerCase().slice(1)
  if (month === 'September' || month === 'October' || month === 'November') {
    return `${month} month of Autumn`
  } else if (month === 'December' || month === 'January' || month === 'February') {
    return `${month} month of Winter`
  } else if (month === 'March' || month === 'April' || month === 'May') {
    return `${month} month of Spring`
  } else if (month === 'June' || month === 'July' || month === 'August') {
    return `${month} month of Summer`
  } else {
    return 'Wrong Input'
  }
}

console.log('Task 2: \n', getSeason('June'))
console.log('Task 2: \n', getSeason('may'))

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
//   What is the day today? Saturday
//   Saturday is a weekend.

//   What is the day today? saturDaY
//   Saturday is a weekend.

//   What is the day today? Friday
//   Friday is a working day.

//   What is the day today? FrIDAy
//   Friday is a working day.

const checkDay = (input) => {
  const day = input.toLowerCase().charAt(0).toUpperCase() + input.toLowerCase().slice(1)
  const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  const weekDays = ['Saturday', 'Sunday']

  if (workingDays.includes(day)) {
    return `${day} is a working day.`
  } else if (weekDays.includes(day)) {
    return `${day} is a weekend.`
  } else {
    return 'Wrong Input'
  }
}

console.log('Task 3: \n', checkDay('saturDaY'))
console.log('Task 3: \n', checkDay('MondaY'))

// 4. Write a program which tells the number of days in a month.
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 days.

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

const getNumberOfDaysIn = (input) => {
  const month = input.toLowerCase().charAt(0).toUpperCase() + input.toLowerCase().slice(1)
  const year = new Date().getFullYear()
  const monthNumber = new Date(`${month}, ${year}`).getMonth()
  const numberOfDays = new Date(year, monthNumber + 1, 0).getDate()
  return numberOfDays
}

console.log('Task 4: \n', `number of days in a month ${getNumberOfDaysIn('FebruAry')}`)
