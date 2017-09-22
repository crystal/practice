import assert from 'assert';
import spendCash from '../src/spendCash.js';

describe('spendCash', function() {
  it('should return remaining cash', function() {
    const funds = 400.00
    const stuffBought = [
      {
        item: 'shoes',
        cost: 50.00
      },
      {
        item: 'makeup',
        cost: 30.00
      },
      {
        item: 'game',
        cost: 25.00
      }
    ]
    const result = spendCash(funds, stuffBought);
    const expected = 295.00;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`)
  })
})
