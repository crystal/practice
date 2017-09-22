import assert from 'assert';
import isGolden from '../src/golden.js';

describe('isGolden', function() {
  it('should return golden ticket index', function() {
    const tickets = [
      {
        ticketNumber: 1,
        golden: true
      },
      {
        ticketNumber: 2,
        golden: false
      },
      {
        ticketNumber: 3,
        golden: false
      }
    ];
    const result = isGolden(tickets);
    const expected = 0;
    assert.strictEqual(result, expected, `${result} is not equal to ${expected}`)
  });
  it('should return -1 in no golden ticket is found', function() {
    const tickets = [
      {
        ticketNumber: 1,
        golden: false
      },
      {
        ticketNumber: 2,
        golden: false
      },
      {
        ticketNumber: 3,
        golden: false
      }
    ];
    const result = isGolden(tickets);
    const expected = -1;
    assert.strictEqual(result, expected, `${result} is not equal to ${expected}`);
  })
})
