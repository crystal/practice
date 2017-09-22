import assert from 'assert';
import canBuyTickets from '../src/canBuyTickets';

describe('canBuyTickets', function() {
  it('should return false because not everyone can buy their own ticket', function() {
    const people = [
      {
        name: 'chris',
        funds: 200.00
      },
      {
        name: 'charlie',
        funds: 20.00
      },
      {
        name: 'bets',
        funds: 9.00
      }
    ]
    const result = canBuyTickets(people);
    const expected = false
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return true because everyone can buy their own ticket', function() {
    const people = [
      {
        name: 'chris',
        funds: 200.00
      },
      {
        name: 'charlie',
        funds: 20.00
      },
      {
        name: 'bets',
        funds: 19.00
      }
    ]
    const result = canBuyTickets(people);
    const expected = true
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  })
})
