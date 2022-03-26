/* eslint-disable */
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
    const postData = new URLSearchParams(`api_dev_key=${token}`)

    for (const [key, value] of Object.entries(data)) {
      postData.append(key, value.toString())
    }

    try {
      return await axios.post(AppConfig.baseUrl, postData.toString())
    } catch (e) {
      return e.response
    }
  }

  static getKeyFromUrl(url) {
    const newUrl = new URL(url)
    return newUrl.pathname.substring(1)
  }

export default PasteModel
