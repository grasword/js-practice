import * as fs from 'fs'
import * as path from 'path'

const DATA_DIR = 'data/post_data/'

class InputTestDataProvider {
  static getTestData(fileName) {
    let data
    const filePath = path.join(DATA_DIR, fileName)
    try {
      data = fs.readFileSync(filePath, 'utf8')
    } catch (e) {
      console.log(e.stack)
    }
    return data
  }
}

export default InputTestDataProvider
