// pass an array of strings cities
// do an api call for each one
// return an array of objects with the name & temp
// sort
import axios from 'axios';
import Bluebird from 'bluebird';

export default function sortHottestCities(cities) {
  return Bluebird.map(cities, (city) => {
    return axios({
      method: 'get',
      url: `http://api.wunderground.com/api/${process.env.WUNDERGROUND_KEY}/conditions/q/CA/${city.replace(' ', '_')}.json`
    })
      .then((response) => {
        return {
          city: response.data.current_observation.display_location.full,
          temp: response.data.current_observation.temp_f
        }
      })
  })
  .then((responses) => {
    return responses.sort((a, b) => {
      if (a.temp < b.temp) {
        return -1
      } else if (a.temp > b.temp) {
        return 1
      }
      return 0
    })
  })
}
