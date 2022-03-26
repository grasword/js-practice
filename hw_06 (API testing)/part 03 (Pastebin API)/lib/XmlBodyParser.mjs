/* eslint-disable */
import { DOMParser } from 'xmldom'

class XmlBodyParser {
  static async getPropValue(httpResponseBody, key, propTag) {
    const documentObject = new DOMParser().parseFromString(httpResponseBody, 'text/xml')
    const pasteList = documentObject.getElementsByTagName('paste')
    let foundPaste
    for (let k = 0; k < pasteList.length; k++) {
      const pasteNodes = pasteList.item(k).childNodes
      for (let i = 0; i < pasteNodes.length; i++) {
        const prop = pasteNodes.item(i)
        if (prop.nodeName === 'paste_key' && prop.textContent === key) {
          foundPaste = pasteNodes
        }
      }
    }

    for (let i = 0; i < foundPaste.length; i++) {
      const property = foundPaste.item(i)
      if (property.nodeName === propTag) {
        return property.textContent
      }
    }
  }
}

export default XmlBodyParser
