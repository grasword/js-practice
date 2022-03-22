/* eslint-disable */
import WeatherModel from '../model/WeatherModel'
import XmlBodyParser from '../lib/XmlBodyParser'

describe('As a Weather API user', () => {
  describe('I have to get HTTP response body', () => {
    test('with [Title] node', async () => {
      const { data } = await WeatherModel.getWeatherData()
      const title = await XmlBodyParser.getTitle(data)

      //  TODO: insert verifications to verify Title node value
      expect(title).toBe('New York, NY - AccuWeather.com Forecast')
    })

    test('with [Channel] items', async () => {
      const { data } = await WeatherModel.getWeatherData()
      const items = await XmlBodyParser.getItems(data)
      //  TODO: insert verifications to check that every item node contains the following child nodes:
      // - title
      // - link
      // - guid
      // - description
      // - pubDate

      //  TODO: the verifications should check that:
      // - link node value contains a href
      // - guid node has "isPermaLink" attribute

      items.forEach((item) => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('link')
        expect(item).toHaveProperty('guid')
        expect(item).toHaveProperty('description')
        expect(item).toHaveProperty('pubDate')

        const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
        expect(item.link).toMatch(urlRegex)
        expect(item.guid).toHaveProperty('isPermaLink')
      })
    })
  })
})
