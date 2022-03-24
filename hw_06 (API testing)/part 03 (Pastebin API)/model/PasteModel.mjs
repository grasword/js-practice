import AppConfig from '../configs/AppConfig'
import TokenProvider from '../lib/TokenProvider'

import axios from 'axios'

class PasteModel {
  static async postPastePlainData(data, tokenName) {
    const token = TokenProvider.getToken(tokenName)
    try {
      return await axios.post(AppConfig.baseUrl, `api_dev_key=${token}` + '&api_paste_code=test' + '&api_option=paste')
    } catch (e) {
      return e.response
    }
  }

  static async postPaste(data, tokenName) {
    //TODO: develop the method to be able to get data in object format
    // and define HTTP POST options
    const token = TokenProvider.getToken(tokenName)
    const apiOption = data.api_option
    console.log(apiOption) // undefined
    try {
      return await axios.post(AppConfig.baseUrl, `api_dev_key=${token}` + '&api_paste_code=test' + '&api_option=paste')
    } catch (e) {
      return e.response
    }
  }
}

export default PasteModel
