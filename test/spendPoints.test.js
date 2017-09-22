import assert from 'assert';
import spendPoints from '../src/spendPoints';

describe('spendPoints', function() {
  it('should return student\'s remaining points', function() {
    const studentPoints = 100;
    const rewards = [
      {
        item: 'toy car',
        cost: 5
      },
      {
        item: 'pizza party',
        cost: 20
      },
      {
        item: 'xbox',
        cost: 50
      }
    ]
    const result = spendPoints(studentPoints, rewards);
    const expected = 25;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`)
  })
})
