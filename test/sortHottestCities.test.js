import assert from 'assert';
import sortHottestCities from '../src/sortHottestCities.js';

describe.skip('sortHottestCities', function() {
  it('should return objects w/ name & temps, sorted by temp', function() {
    const cities = ['berkeley', 'los angeles', 'eureka', 'san diego'];
    return sortHottestCities(cities)
      .then((result) => {
        assert.ok(typeof result[0].city === 'string', 'city name is not a string');
        assert.ok(typeof result[0].temp === 'number', 'temp is not a number')
        assert.ok(typeof result[1].city === 'string', 'city name is not a string');
        assert.ok(typeof result[1].temp === 'number', 'temp is not a number')
        assert.ok(typeof result[2].city === 'string', 'city name is not a string');
        assert.ok(typeof result[2].temp === 'number', 'temp is not a number')
        assert.ok(typeof result[3].city === 'string', 'city name is not a string');
        assert.ok(typeof result[3].temp === 'number', 'temp is not a number')
        assert.ok(result[0].temp <= result[1].temp, 'city 1 is not less than or equal to city 2');
        assert.ok(result[1].temp <= result[2].temp, 'city 2 is not less than or equal to city 3');
        assert.ok(result[2].temp <= result[3].temp, 'city 3 is not less than or equal to city 4');
      })
  })
})
