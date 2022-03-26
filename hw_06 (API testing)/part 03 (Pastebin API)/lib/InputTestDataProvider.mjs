/* eslint-disable */
import * as fs from 'fs'
import * as path from 'path'

const DATA_DIR = 'data/post_data/'

class InputTestDataProvider {
  static getTestData(fileName) {
    let data
    const filePath = path.join(DATA_DIR, fileName)
    try {
      const dataString = fs.readFileSync(filePath, 'utf8')
      data = JSON.parse(dataString)
    } catch (e) {
      console.log(e.stack)
    }
    return data
  }
}

export default InputTestDataProvider
