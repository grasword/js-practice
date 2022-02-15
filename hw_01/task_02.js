// Create a human readable time format using the Date time object
const now = new Date()

const month = now.getMonth() + 1
const date = now.getDate()
const year = now.getFullYear()
const hour = now.getHours()
const minutes = now.getMinutes()

// 1. YYYY-MM-DD HH:mm
const solution1 = `${year}-${month}-${date} ${hour}:${minutes}`
console.log(solution1)

// 2. DD-MM-YYYY HH:mm
const solution2 = `${date}-${month}-${year} ${hour}:${minutes}`
console.log(solution2)

// 3. DD/MM/YYYY HH:mm
const solution3 = `${date}/${month}/${year} ${hour}:${minutes}`
console.log(solution3)
