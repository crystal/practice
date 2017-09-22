import assert from 'assert'
import getAverage from '../src/getAverage';

describe('getAverage', function() {
  it('should return letter grade based on avg', function() {
    const grades = [95, 83, 70, 99, 100, 80];
    const expected = 'B';
    const result = getAverage(grades);
    assert.strictEqual(expected, result, `${expected} does not equal ${result}`)
  })
})
