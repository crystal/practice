import assert from 'assert';
import sellSweets from '../src/sellSweets';

describe('sellSweets', function() {
  it('should return true if all sweets are sold', function() {
    const sweets = [
      {
        item: 'cookie',
        sold: true
      },
      {
        item: 'donut',
        sold: true
      },
      {
        item: 'cake',
        sold: true
      },
      {
        item: 'brownie',
        sold: true
      }
    ];
    const result = sellSweets(sweets);
    const expected = true;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  })
})
