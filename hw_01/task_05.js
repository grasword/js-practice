const Countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]

// 1. Using the countries array, create an array for countries length'
const countriesArray = [
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

const countCountiesLength = (countries) => {
  return countries.map((country) => country.length)
}

console.log(countCountiesLength(countriesArray))

// 2. Using the countries array, find the country containing only 5 characters
const filterCountriesByLength = (countries, filterLength) => {
  return countries.filter((country) => country.length === filterLength)
}

console.log(filterCountriesByLength(countriesArray, 5))

// 3. Find the longest word in the webTechs array
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

const findLongest = (arr) => {
  return arr.reduce((a, b) => (a.length < b.length ? b : a))
}

console.log(findLongest(webTechs))

// 4. Use the webTechs array to create the following array of arrays
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const createArrayOfArrays = (arr) => {
  return arr.map((el) => [el, el.length])
}

console.log(createArrayOfArrays(webTechs))

// 5. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method
const fruits = ['banana', 'orange', 'mango', 'lemon']

const reverse = (arr) => {
  const reversed = []
  arr.forEach((el) => {
    reversed.unshift(el)
  })
  return reversed
}

console.log(reverse(fruits))

// .6 Copy countries array (avoid mutation)
const copyArray = (arr) => {
  return [...arr]
}

console.log(copyArray(countriesArray))

// 7. Sort the webTechs array

console.log(webTechs.sort((a, b) => a.localeCompare(b, 'en')))

//
//
// Find the country containing the hightest number of characters in the countries array
console.log(findLongest(Countries))

// Extract all the countries contain the word 'land' from the countries array and print it as array
const findLandWord = (arr) => {
  // replace implementation with Array.filter()
  const filteredArr = []
  regexp = /land/g
  arr.forEach((el) => {
    if (el.match(regexp)) {
      filteredArr.push(el)
    }
  })
  return filteredArr
}
console.log(findLandWord(Countries))

// Extract all the countries containing two or more words from the countries array and print it as array
const findMultiWordCountries = (arr) => {
  // replace with .map and .filter
  arr.forEach((el) => {
    const countryArr = el.split(' ')
    if (countryArr.length > 1) {
      console.log(countryArr)
    }
  })
}

findMultiWordCountries(Countries)

// Reverse the countries array and capitalize each country and store it as an array
const formatCountries = (arr) => {
  const capitalizedArr = arr.map((el) => el.toUpperCase())
  capitalizedArr
  const reversedArr = capitalizedArr.reverse()
  return reversedArr.map((el) => {
    const arr = []
    arr.push(el)
    return arr
  })
}

const formatCountriesFP = (arr) => {
  const capitalize = (str) => str.toUpperCase()
  const toArray = (str) => [str]

  return arr.reverse().map(capitalize).map(toArray)
}

console.log(formatCountries(Countries))
console.log(formatCountriesFP(Countries))
