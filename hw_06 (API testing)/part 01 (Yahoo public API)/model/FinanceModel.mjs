/* eslint-disable semi */
/* eslint-disable indent */
import AppConfig from '../configs/AppConfig.cjs'
import axios from 'axios'

class FinanceModel {
  // TODO: define parameters to be able to get dynamic test data
  static async getFinanceData(paramsPassedToFunction) {
    const { company, ...queryParams } = paramsPassedToFunction
    const baseUrl = AppConfig.baseUrl + company
    //  we dont need defaults actually
    //  const defaults = { lang: 'en-US', includePrePost: 'false', corsDomain: 'finance.yahoo.com', tsrc: 'finance' }
    const params = new URLSearchParams(queryParams)
    const href = new URL(`${baseUrl}?${params}`).href

    try {
      return await axios.get(href)
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
