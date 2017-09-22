// do an api call to get the weather

import axios from 'axios';

export default function getWeather() {
  return axios({
    method: 'get',
    url: `http://api.wunderground.com/api/${process.env.WUNDERGROUND_KEY}/conditions/q/CA/San_Francisco.json`
  })
    .then((response) => {
      console.log(response.data.current_observation.temp_f,response.data.current_observation.relative_humidity);
      return {
        temp: response.data.current_observation.temp_f,
        humidity: response.data.current_observation.relative_humidity
      }
    })
}
