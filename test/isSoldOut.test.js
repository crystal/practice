import assert from 'assert';
import isSoldOut from '../src/isSoldOut';

describe('isSoldOut', function() {
  it('should return false if not sold out', function() {
    const tickets = [
      {
        ticketNumber: 1,
        sold: true
      },
      {
        ticketNumber: 2,
        sold: false
      },
      {
        ticketNumber: 3,
        sold: true
      }
    ];
    const result = isSoldOut(tickets);
    const expected = false
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`)
  })
  it('should return true if sold out', function() {
    const tickets = [
      {
        ticketNumber: 1,
        sold: true
      },
      {
        ticketNumber: 2,
        sold: true
      },
      {
        ticketNumber: 3,
        sold: true
      }
    ];
    const result = isSoldOut(tickets);
    const expected = true
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`)
  })
})
