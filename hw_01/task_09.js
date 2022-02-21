const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

// 1. Find a union b
const unionAB = new Set([...a, ...b])
const unionArr = [...unionAB]

console.log('A b union -', unionArr)

// 2. Find a intersection b
const A = new Set(a)
const B = new Set(b)
const intersection = a.filter((num) => B.has(num))
console.log('A B intersection -', intersection)

// 3. Find a with b
const difference = a.filter((num) => !B.has(num))
console.log('A B difference -', difference)

// 4. How many languages are there in the countries object file
const getNumberOfLanguages = (arr) => {
  const languages = []
  for (const c of arr) {
    for (const language of c.languages) {
      languages.push(language)
    }
  }
  const langSet = new Set(languages)
  return langSet.size
}

const getNumberOfLanguagesFP = (a) => {
  let unique = new Set(a.map((c) => c.languages).flat())
  return unique.size
}

console.log('Number of Languages - ', getNumberOfLanguages(countries))
console.log('Number of Languages - ', getNumberOfLanguagesFP(countries))
