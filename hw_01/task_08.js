import { countries } from '../data/countries_data'

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const getPrice = (p) => p.price
const hasPrice = (p) => typeof p === 'number' && !Number.isNaN(p)
const sum = (p, c) => p + c

const findTotalPrice = (arr) => arr.map(getPrice).filter(hasPrice).reduce(sum, 0)

console.log(findTotalPrice(products))

// 2. Find the sum of price of products using only reduce reduce(callback))

const implementation = (p, c) => (hasPrice(c.price) ? p + c.price : p)

const getSum = (arr) => arr.reduce(implementation, 0)

getSum(products)

// 3. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries = (c) => c.splice(0, 9)

console.log(getFirstTenCountries(countries))

// 4. Declare a getLastTenCountries function which returns the last ten countries in the countries array
const getLastTenCountries = (c) => c.reverse().splice(0, 9)
//  Todo rewrite using Array.length

console.log(getLastTenCountries(countries))

// 5. Use the countries information, in the data folder. Sort countries by name, by capital, by population
const sortBy = (sortBy, arr) => {
  if (sortBy === 'population') {
    return arr.sort((a, b) => a[sortBy] - b[sortBy])
  } else {
    return arr.sort((a, b) => a[sortBy].localeCompare(b[sortBy], 'en'))
  }
}

console.log(sortBy('name', countries))

// 6. *** Find the 10 most spoken languages
const mostSpokenLanguages = (arr, num) => {
  const map = new Map()

  arr.forEach((c) => {
    const languages = c.languages

    languages.forEach((l) => {
      let count = map.get(l)
      count = count ? count + 1 : 1
      map.set(l, count)
    })
  })
  const sortedArr = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 9)
  return sortedArr.map(([a, b]) => ({ country: a, count: b }))
}

console.log(mostSpokenLanguages(countries, 10))

// v2

// const mostSpokenLanguages = (arr, num) => {
//   const languages = []
//   for (const c of arr) {
//     for (const language of c.languages) {
//       languages.push(language)
//     }
//   }
//   const langSet = new Set(languages)
//   const counts = []

//   for (const language of langSet) {
//     const filteredLang = languages.filter((lang) => lang === language)
//     counts.push({ country: language, count: filteredLang.length })
//   }
//   const sorted = counts.sort((a, b) => b.count - a.count)
//   return sorted.splice(0, num)
// }

// frequency map
// const languages = countries.reduce((p, {languages}) => [...p, ...languages], [])
// const frequency = languages.reduce((map, n) => {
//   return map.set(n, (map.get(n) || 0) + 1)
// }, new Map())

// 7. *** Use countries_data.js file create a function which create the ten most populated countries
const mostPopulatedCountries = (num) => {
  return countries
    .map((c) => ({ name: c.name, population: c.population }))
    .sort((a, b) => b.population - a.population)
    .slice(0, num)
}

console.log(mostPopulatedCountries(10))
