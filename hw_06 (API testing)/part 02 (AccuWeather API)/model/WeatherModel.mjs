import AppConfig from '../configs/AppConfig';

import axios from 'axios';

class WeatherModel {

    static async getWeatherData() {
        const params = 'locCode=10001';
        try {
            return await axios.get(AppConfig.baseUrl + params);
        } catch (e) {
            return e.response;
        }
    }
}

export default WeatherModel;
