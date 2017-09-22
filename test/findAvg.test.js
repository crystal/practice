import assert from 'assert';
import findAvg from '../src/findAvg';

describe('findAvg', function() {
  it('should return average', function () {
    const numbers = [10, 31, 86, 4, 22, 86];
    const result = findAvg(numbers);
    const expected = 239 / 6
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  })
})
