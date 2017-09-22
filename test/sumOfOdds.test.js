import assert from 'assert';
import sumOfOdds from '../src/sumOfOdds';

describe('sumOfOdds', function() {
  it('should return the sum of only odd integers', function(){
    const array = [2, 3, 4, 5, 6];
    const result = sumOfOdds(array);
    const expected = 8;
    assert.strictEqual(result, expected, `${result} should equal ${expected}`)
  });
  it('should return the sum of only odd integers, no floats', function(){
    const array = [2, 3.5, 4, 5, 6];
    const result = sumOfOdds(array);
    const expected = 5;
    assert.strictEqual(result, expected, `${result} should equal ${expected}`)
  });
  it('should return the sum of only odd integers, no negative numbers', function(){
    const array = [2, -3, 4, 5, 6];
    const result = sumOfOdds(array);
    const expected = 5;
    assert.strictEqual(result, expected, `${result} should equal ${expected}`)
  });
})
