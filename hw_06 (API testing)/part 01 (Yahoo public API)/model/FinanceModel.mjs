/* eslint-disable */
import AppConfig from '../configs/AppConfig.cjs'
import axios from 'axios'

class FinanceModel {
  // TODO: define parameters to be able to get dynamic test data
  static async getFinanceData(paramsPassedToFunction) {
    const { company, ...queryParams } = paramsPassedToFunction
    const url = new URL(company, AppConfig.baseUrl)
    //  we dont need defaults actually
    //  const defaults = { lang: 'en-US', includePrePost: 'false', corsDomain: 'finance.yahoo.com', tsrc: 'finance' }
    // append all search params to url without worrying about `?` symbol
    for (const [key, value] of Object.entries(queryParams)) {
      url.searchParams.append(key, value.toString())
    }

    try {
      return await axios.get(url.href)
    } catch (e) {
      return e.response
    }
  }
}

test('200 for a valid range', async () => {
  //TODO: replace this method with FinanceModel.getFinanceData(...) method
  // to be able to define different test conditions:
  // - company
  // - region
  // - interval
  // - range
  const { status } = await FinanceModel.getFinanceData({ company: 'EPAM', region: 'UK', interval: '1mo', range: '1d' })
  expect(status).toBe(200)
})

export default FinanceModel
