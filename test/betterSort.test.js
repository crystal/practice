import assert from 'assert';
import betterSort from '../src/betterSort';

describe('betterSort', function() {
  it('should return sorted array', function() {
    const numbers = [11, 6, 3, 8, 2, 5, 7, 1, 4, 10, 9];
    const result = betterSort(numbers).toString();
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].toString();
    assert.strictEqual(result, expected, `${result} does not match ${expected}`);
  })
})
