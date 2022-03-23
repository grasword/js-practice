// Create a human readable time format using the Date time object
const now = new Date()

const month = now.getMonth() + 1
const date = now.getDate()
const year = now.getFullYear()
const hour = now.getHours()
const minutes = now.getMinutes()

console.log(
  'Create a human readable time format using the Date time object \n YYYY-MM-DD HH:mm \n DD-MM-YYYY HH:mm \n DD/MM/YYYY HH:mm'
)

// 1. YYYY-MM-DD HH:mm
const solution1 = `${year}-${month}-${date} ${hour}:${minutes}`
console.log('Task 1: \n', solution1)

// 2. DD-MM-YYYY HH:mm
const solution2 = `${date}-${month}-${year} ${hour}:${minutes}`
console.log('Task 2: \n', solution2)

// 3. DD/MM/YYYY HH:mm
const solution3 = `${date}/${month}/${year} ${hour}:${minutes}`
console.log('Task 3: \n', solution3)
