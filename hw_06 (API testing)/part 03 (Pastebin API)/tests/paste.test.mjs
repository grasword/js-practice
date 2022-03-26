/* eslint-disable */
import PasteModel from '../model/PasteModel'
import InputTestDataProvider from '../lib/InputTestDataProvider'
import XmlBodyParser from '../lib/XmlBodyParser.mjs'

describe('As a Paste API user', () => {
  describe('I need to be able to create Paste and get', () => {
    test('200 for a valid data', async () => {
      const { status, data } = await PasteModel.postPastePlainData('test', 'pastbin_token_1')
      // TODO: received data contains URL of created Paste: "https://pastebin.com/C3ZZxfm7"
      // put your verifications here

      expect(status).toBe(200)
    })
  })

  describe('I need to be able to create Paste with', () => {
    test.only('10 min expiration time', async () => {
      // TODO: Develop "getTestData" method to extract file content from files located on "<projectDir>/data/post_data" directory
      // to be able to define POST body dynamically
      const testData = InputTestDataProvider.getTestData('case1.json')
      const { data: url } = await PasteModel.postPaste(testData, 'pastbin_token_1')
      const key = PasteModel.getKeyFromUrl(url)

      const listData = InputTestDataProvider.getTestData('case2.json')
      const { data } = await PasteModel.postPaste(listData, 'pastbin_token_1')

      const expirationDate = await XmlBodyParser.getPropValue(data, key, 'paste_expire_date')
      const creationDate = await XmlBodyParser.getPropValue(data, key, 'paste_date')

      const expirationTime = parseInt(expirationDate) - parseInt(creationDate)
      const TEN_MINUTES = 600
      // put your verifications here. You need to verify that the created Paste has been created with 10 min
      // expiration timeout
      expect(expirationTime).toBe(TEN_MINUTES)
    })
  })
})
