// 1. Use substr to slice out the phrase because because because from the following sentence:
//    'You cannot end a sentence with because because because is a conjunction'
const strTask1 = 'You cannot end a sentence with because because because is a conjunction'
const formattedStr = strTask1.substring(0, 31) + strTask1.substring(54)
console.log('Task 1: \n', formattedStr)

// 2. 'Love is the best thing in this world. Some found their love and some are still looking
//    for their love.' Count the number of word love in this sentence.
const strTask2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
const word = 'love'

const countInstances = (str, word) => {
  return str.toLowerCase().split(word).length - 1
}

console.log('Task 2: \n', countInstances(strTask2, word))

// or with using regexp
const patternT2 = /love/gi
console.log('Task 2 (with regexp): \n', strTask2.match(patternT2).length)

// 3. Use match() to count the number of all because in the following sentence:'You cannot end
//    a sentence with because because because is a conjunction'
const strTask3 = 'You cannot end a sentence with because because because is a conjunction'
const patternT3 = /because/gi

console.log('Task 3: \n', strTask3.match(patternT3).length)

// 4. Calculate the total annual income of the person by extracting the numbers from the following
//  text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const strTask4 =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const patternT4 = /\d+/gi
const income = strTask4.match(patternT4)
const salary = parseInt(income[0])
const incomeFromCourses = parseInt(income[2])
const annualBonus = parseInt(income[1])

const annualIncome = salary * 12 + incomeFromCourses * 12 + annualBonus
console.log('Task 4: \n', annualIncome)

// 5. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const regexp = /[^\w\s]|_/g
const cleanSentence = sentence.replace(regexp, '')
const words = cleanSentence.split(' ')

const counts = {}
words.forEach((word) => {
  counts[word] = (counts[word] || 0) + 1
})

const maxCount = Math.max(...Object.values(counts))

const mostFrequentWord = Object.keys(counts).find((key) => counts[key] === maxCount)
console.log('Task 5: \n', `Word '${mostFrequentWord}' has 3 occurrences.`)

// const mostFrequentWord = Object.keys(counts).filter(key => counts[key] === maxCount)
