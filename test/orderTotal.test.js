import assert from 'assert';
import orderTotal from '../src/orderTotal';

describe('orderTotal', function() {
  it('should return an object with subtotal, tax and total', function() {
    const items = [
      {
        name: 'banana',
        price: 3.00,
        qty: 3
      },
      {
        name: 'apple',
        price: 2.00,
        qty: 1
      },
      {
        name: 'kiwi',
        price: 1.50,
        qty: 2
      }
    ]
    const result = orderTotal(items);
    const expectedSubtotal = '14.00';
    const expectedTax = '1.40';
    const expectedTotal = '15.40';
    assert.strictEqual(result.subtotal, expectedSubtotal, `${result.subtotal} does not equal ${expectedSubtotal}`)
    assert.strictEqual(result.tax, expectedTax, `${result.tax} does not equal ${expectedTax}`)
    assert.strictEqual(result.total, expectedTotal, `${result.total} does not equal ${expectedTotal}`)
  });
  it('should take 2 params and return an object with subtotal, tax and total', function() {
    const items = [
      {
        name: 'banana',
        price: 3.00,
        qty: 3
      },
      {
        name: 'apple',
        price: 2.00,
        qty: 1
      },
      {
        name: 'kiwi',
        price: 1.50,
        qty: 2
      }
    ]
    const taxRate = .25
    const result = orderTotal(items, taxRate);
    const expectedSubtotal = '14.00';
    const expectedTax = '3.50';
    const expectedTotal = '17.50';
    assert.strictEqual(result.subtotal, expectedSubtotal, `${result.subtotal} does not equal ${expectedSubtotal}`)
    assert.strictEqual(result.tax, expectedTax, `${result.tax} does not equal ${expectedTax}`)
    assert.strictEqual(result.total, expectedTotal, `${result.total} does not equal ${expectedTotal}`)
  })

})
