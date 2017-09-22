import assert from 'assert';
import sumOfArray from '../src/sumOfArray';

describe('sumOfArray', function() {
  it('should return sum of an array', function() {
    const array = [2, 4, 6, 8, 10];
    const result = sumOfArray(array);
    const expected = 30;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return sum of an array with negative numbers', function() {
    const array = [2, -4, 6, -8, 10];
    const result = sumOfArray(array);
    const expected = 6;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return sum of an array with all negative numbers', function() {
    const array = [-2, -4, -6, -8, -10];
    const result = sumOfArray(array);
    const expected = -30;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return sum of an array with all floats', function() {
    const array = [2.5, 4.1, 6.2, 8.0, 10.1];
    const result = sumOfArray(array);
    const expected = 30.9;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return sum of an array with all letters and numbers', function() {
    const array = [2, 4, 6, 8, 10, 'A', 'B', 'C'];
    const result = sumOfArray(array);
    assert.ok(isNaN(result), `${result} is not NaN`);
  });
})
