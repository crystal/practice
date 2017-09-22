import assert from 'assert';
import countAnimals from '../src/countAnimals.js';

describe('countAnimals', function() {
  it.only('should return object w/ mammal and reptile count', function() {
    const animals = ['dog', 'rabbit', 'lizard', 'snake', 'hampster', 'gecko'];
    const result = countAnimals(animals);
    const expected = {
      mammalCount: 3,
      reptileCount: 3
    };
    assert.strictEqual(result.mammalCount, expected.mammalCount, `${result.mammalCount} does not equal ${expected.mammalCount}`);
    assert.strictEqual(result.reptileCount, expected.reptileCount, `${result.reptileCount} does not equal ${expected.reptileCount}`);
  });
})
