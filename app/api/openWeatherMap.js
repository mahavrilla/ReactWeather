var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=bfea3851bd59a2a14d5c98a077fa9eab';

module.exports = {
  getTemp: (location) => {
    var encodedLocation = encodeURIComponent(location);
    var reqUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(reqUrl).then((res) => {
      if( res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (err) => {
      throw new Error(err.data.message);
    });

  }
}
