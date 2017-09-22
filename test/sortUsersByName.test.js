import assert from 'assert';
import sortUsersByName from '../src/sortUsersByName';

describe('sortUsersByName', function() {
  it('should sort users by name', function() {
    const users = [
      {
        name: 'chris'
      },
      {
        name: 'charlie'
      },
      {
        name: 'betsey'
      }
    ]
    const result = sortUsersByName(users);
    const expectedUsers = [
      {
        name: 'betsey'
      },
      {
        name: 'charlie'
      },
      {
        name: 'chris'
      }
    ]
    assert.strictEqual(result[0].name, expectedUsers[0].name, `${result[0].name} does not equal ${expectedUsers[0].name}`)
    assert.strictEqual(result[1].name, expectedUsers[1].name, `${result[1].name} does not equal ${expectedUsers[1].name}`)
    assert.strictEqual(result[2].name, expectedUsers[2].name, `${result[2].name} does not equal ${expectedUsers[2].name}`)
  })
})
