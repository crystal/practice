import assert from 'assert';
import takeItem from '../src/takeItem';

describe('takeItem', function() {
  it('should return altered player stats', function() {
    const player = {
      name: 'Chris',
      health: 50,
      maxHealth: 100,
      hunger: 90,
      maxHunger: 100,
      thirst: 75,
      maxThirst: 100
    };
    const item = {
      name: 'water',
      thirstPoints: 25
    }
    const result = takeItem(player, item);
    const expectedThirst = 100;
    const expectedHealth = 50;
    const expectedHunger = 90;
    assert.strictEqual(result.thirst, expectedThirst, `${result.thirst} does not equal ${expectedThirst}`)
    assert.strictEqual(result.health, expectedHealth, `${result.health} does not equal ${expectedHealth}`)
    assert.strictEqual(result.hunger, expectedHunger, `${result.hunger} does not equal ${expectedHunger}`)
  })
  it('should not exceed max hunger stats', function() {
    const player = {
      name: 'Chris',
      health: 50,
      maxHealth: 100,
      hunger: 90,
      maxHunger: 100,
      thirst: 75,
      maxThirst: 100
    };
    const item = {
      name: 'whole pizza',
      hungerPoints: 500
    }
    const result = takeItem(player, item);
    const expectedThirst = 75;
    const expectedHealth = 50;
    const expectedHunger = 100;
    assert.strictEqual(result.thirst, expectedThirst, `${result.thirst} does not equal ${expectedThirst}`)
    assert.strictEqual(result.health, expectedHealth, `${result.health} does not equal ${expectedHealth}`)
    assert.strictEqual(result.hunger, expectedHunger, `${result.hunger} does not equal ${expectedHunger}`)
  })
})
