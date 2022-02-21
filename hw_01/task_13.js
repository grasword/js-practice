const countriesAPI = 'https://restcountries.com/v3.1/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area
const getCountries = async () => {
  try {
    const response = await fetch(countriesAPI).json()
    const countries = await response.json()
    return countries.map((c) => ({
      name: c.name.common,
      capital: `${c.capital}`,
      languages: c.languages ? Object.values(c.languages) : [],
      population: c.population
    }))
  } catch (err) {
    console.log(err)
  }
}

getCountries().then(console.log)

// 2. Print out all the cat names in to catNames variable
const getCatNames = async () => {
  try {
    const response = await fetch(catsAPI)
    const cats = await response.json()
    return cats.map((cat) => cat.name)
  } catch (err) {
    console.log(err)
  }
}

getCatNames().then(console.log)

// 3. Read the countries api and find out the 10 largest countries
const getLargestCountries = async (num) => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    return countries
      .map((c) => ({ name: c.name.common, population: c.population }))
      .sort((a, b) => b.population - a.population)
      .slice(0, num)
  } catch (err) {
    console.log(err)
  }
}

getLargestCountries(10).then(console.log)

// 4. Read the countries api and count total number of languages in the world used as officials
const getOfficialLanguages = async (num) => {
  try {
    const response = await fetch(countriesAPI)
    const countries = await response.json()
    const languages = new Set(countries.flatMap((c) => (c.languages ? Object.values(c.languages) : [])))
    return languages.size
  } catch (err) {
    console.log(err)
  }
}

getOfficialLanguages().then((response) =>
  console.log(`Total number of languages in the world used as officials: ${response}`)
)
