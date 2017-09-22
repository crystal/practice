import assert from 'assert';
import buyTickets from '../src/buyTickets';

describe('buyTickets', function() {
  it('should return an array of objects w/ remaining funds', function() {
    const people = [
      {
        name: 'sally',
        funds: 50.00
      },
      {
        name: 'cindy',
        funds: 150.00
      },
      {
        name: 'jan',
        funds: 30.00
      }
    ];
    const result = buyTickets(people);
    const expectedPerson1Name = 'sally';
    const expectedPerson1Funds = 40.00;
    const expectedPerson2Name = 'cindy';
    const expectedPerson2Funds = 140.00;
    const expectedPerson3Name = 'jan';
    const expectedPerson3Funds = 20.00;
    assert.strictEqual(result[0].name, expectedPerson1Name, `${result[0].name} does not match ${expectedPerson1Name}`);
    assert.strictEqual(result[0].funds, expectedPerson1Funds, `${result[0].funds} does not match ${expectedPerson1Funds}`);
    assert.strictEqual(result[1].name, expectedPerson2Name, `${result[1].name} does not match ${expectedPerson2Name}`);
    assert.strictEqual(result[1].funds, expectedPerson2Funds, `${result[1].funds} does not match ${expectedPerson2Funds}`);
    assert.strictEqual(result[2].name, expectedPerson3Name, `${result[2].name} does not match ${expectedPerson3Name}`);
    assert.strictEqual(result[2].funds, expectedPerson3Funds, `${result[2].funds} does not match ${expectedPerson3Funds}`);
  })
})
