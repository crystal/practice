import assert from 'assert';
import getBalance from '../src/getBalance';

describe('getBalance', function() {
  it.only('should return new balance', function() {
    const currentBalance = 1000.00;
    const transactions = [
      {
        type: 'credit',
        amount: 200.00
      },
      {
        type: 'debit',
        amount: 300.00
      },
      {
        type: 'debit',
        amount: 10.00
      },
      {
        type: 'credit',
        amount: 10.00
      }
    ];
    const result = getBalance(transactions, currentBalance);
    const expected = 900.00;
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  })
})
