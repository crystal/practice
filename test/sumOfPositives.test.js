import assert from 'assert';
import sumOfPositives from '../src/sumOfPositives';

describe('sumOfPositives', function () {
  it('should return sum of only positive numbers', function() {
    const array = [10, 20, 30, -15];
    const result = sumOfPositives(array);
    const expected = 60;
    assert.strictEqual(result, expected,`${result} does not equal ${expected}`)
  });
})
