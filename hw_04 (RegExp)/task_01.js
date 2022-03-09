// 1. Calculate the total annual income of the person from the following text.
const text = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`
const calculateAnnualIncome = (text) => {
  const regex = /\d+/g
  const numsArr = text.match(regex)
  return numsArr ? numsArr.reduce((a, v) => parseInt(a) + parseInt(v)) : 'No numbers in the string'
}
console.log('Task 1: Annual Income is ', calculateAnnualIncome(text))

// 2. Write a pattern which identify if a string is a valid JavaScript variable

const isValidVariable = (name) => {
  const regex = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/g
  return regex.test(name)
}
console.log('Task 2: isValidVariable - should be true : ', isValidVariable('first_name'))
console.log('Task 2: isValidVariable - should be false : ', isValidVariable('first-name'))
console.log('Task 2: isValidVariable - should be false : ', isValidVariable('1first_name'))
console.log('Task 2: isValidVariable - should be true : ', isValidVariable('firstname'))

// 3. Write a function called tenMostFrequentWords which get the ten most frequent word from a string:
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const mostFrequentWords = (text, num) => {
  const regexp = /\w+/g
  const words = text.match(regexp)

  const frequency = words.reduce((map, w) => {
    w = w.toLowerCase()
    return map.set(w, (map.get(w) || 0) + 1)
  }, new Map())

  const arrayOfWords = Array.from(frequency, ([word, count]) => ({ word, count }))

  return arrayOfWords.sort((a, b) => b.count - a.count).slice(0, num)
}
console.log('Task 3: Ten Most Frequent Words ', mostFrequentWords(paragraph, 10))

// 4. Write a function which cleans text. After cleaning, count three most frequent words in the string.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (text) => {
  const regexp = /[^\w\s]|_/g
  return text.replace(regexp, '')
}

console.log('Task 4: Clean Text: \n', cleanText(sentence))
console.log('Task 4: Three most frequent words: \n', mostFrequentWords(cleanText(sentence), 3))
