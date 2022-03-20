/* eslint-disable no-useless-escape */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable indent */
import FinanceModel from '../model/FinanceModel'

describe('As a FinanceModel API user', () => {
  describe('I have to get HTTP response code', () => {
    //TODO: replace this method with FinanceModel.getFinanceData(...) method
    // to be able to define different test conditions:
    // - company
    // - region
    // - interval
    // - range
    test('200 for a valid company', async () => {
      const { status } = await FinanceModel.getFinanceData({ company: 'TSLA' })
      expect(status).toBe(200)
    })

    test('200 for a valid region', async () => {
      const { status } = await FinanceModel.getFinanceData({ company: 'TSLA', region: 'US' })
      expect(status).toBe(200)
    })

    test('200 for a valid interval', async () => {
      const { status } = await FinanceModel.getFinanceData({ company: 'TSLA', interval: '1m' })
      expect(status).toBe(200)
    })

    test('200 for a valid range', async () => {
      const { status } = await FinanceModel.getFinanceData({ company: 'TSLA', range: '1d' })
      expect(status).toBe(200)
    })

    test('422 for a invalid range', async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ company: 'TSLA', range: '10y' })

      //  TODO: insert verifications
      expect(status).toBe(422)
    })

    test('404 for a nonexistent company', async () => {
      // TODO: put required parameter to simulate the required test condition
      const { status } = await FinanceModel.getFinanceData({ company: 'OLEG' })

      //  TODO: insert verifications
      expect(status).toBe(404)
    })
  })

  describe('I have to get values for response headers', () => {
    test('content-type', async () => {
      const { headers } = await FinanceModel.getFinanceData({ company: 'TSLA' })
      expect(headers['content-type']).toBe('application/json;charset=utf-8')
    })

    test('x-request-id', async () => {
      const { headers } = await FinanceModel.getFinanceData({ company: 'TSLA', interval: '1m', range: '1m' })

      //  TODO: insert verifications for "x-request-id" header
      //  You have to use regular expression to verify a headers unique value:
      //  "d5f838b8-fe84-4f2a-b950-7a07f13264a7"
      const regex = /^[a-zA-Z\d]{8}-[a-zA-Z\d]{4}-[a-zA-Z\d]{4}-[a-zA-Z\d]{4}-[a-zA-Z\d]{12}/g
      expect(headers['x-request-id']).toMatch(regex)
    })
  })
})
