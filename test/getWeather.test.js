import assert from 'assert';
import getWeather from '../src/getWeather';

describe.skip('getWeather', function() {
  it('should retreive weather object w/ temp & humidity', function() {
    return getWeather()
      .then((result) => {
        assert.ok(typeof result.temp === 'number', 'temp is not a number');
        assert.ok(typeof result.humidity === 'string', 'humidity is not a string');
      })
  })
})
