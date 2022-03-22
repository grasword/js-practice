/* eslint-disable */
import { DOMParser } from 'xmldom'

class XmlBodyParser {
  static async getTitle(httpResponseBody) {
    const documentObject = new DOMParser().parseFromString(httpResponseBody, 'text/xml')
    const channelElement = documentObject.getElementsByTagName('rss')[0].getElementsByTagName('channel')[0]

    const contentPropertiesList = channelElement.childNodes
    for (let k = 0; k < contentPropertiesList.length; k++) {
      const property = contentPropertiesList.item(k)
      if (property.nodeName === 'title') {
        return property.textContent
      }
    }
  }

  static async getItems(httpResponseBody) {
    //TODO: extract and return Item node list
    const documentObject = new DOMParser().parseFromString(httpResponseBody, 'text/xml')
    const channelElement = documentObject.getElementsByTagName('rss')[0].getElementsByTagName('channel')[0]

    const contentPropertiesList = channelElement.childNodes
    const items = []

    for (let i = 0; i < contentPropertiesList.length; i++) {
      const property = contentPropertiesList.item(i)
      if (property.nodeName === 'item') {
        const itemNodes = {}
        const itemChildNodes = property.childNodes

        for (let k = 0; k < itemChildNodes.length; k++) {
          const prop = itemChildNodes.item(k)
          if (prop.nodeName === 'guid') {
            const permalinkValue = prop.getAttribute('isPermaLink')
            itemNodes[prop.nodeName] = { text: prop.textContent, isPermaLink: permalinkValue }
          } else {
            itemNodes[prop.nodeName] = prop.textContent
          }
        }
        items.push(itemNodes)
      }
    }

    // console.log(items)
    return items
  }
}

export default XmlBodyParser
