import { DOMParser } from 'xmldom';

class XmlBodyParser {

    static async getTitle(httpResponseBody) {
        const documentObject = new DOMParser().parseFromString(httpResponseBody, 'text/xml');
        const channelElement = documentObject.getElementsByTagName('rss')[0]
            .getElementsByTagName('channel')[0];

        const contentPropertiesList = channelElement.childNodes;
        for (let k = 0; k < contentPropertiesList.length; k++) {
            const property = contentPropertiesList.item(k);
            if (property.nodeName === 'title') {
                return property.textContent;
            }
        }
    }

    static async getItems(httpResponseBody) {
        //TODO: extract and return Item node list
    }
}

export default XmlBodyParser;
