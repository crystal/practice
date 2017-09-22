import assert from 'assert';
import getPets from '../src/getPets';

describe('getPets', function() {
  it('should combines names and ages in an object', function() {
    const pets = ['Charlie', 'Betsey', 'Chris'];
    const ages = [15, 10, 31];
    const result = getPets(pets, ages);
    const expectedPet1Name = 'Charlie';
    const expectedPet1Age = 15;
    const expectedPet2Name = 'Betsey';
    const expectedPet2Age = 10;
    const expectedPet3Name = 'Chris';
    const expectedPet3Age = 31;
    assert.strictEqual(result[0].name, expectedPet1Name, `${result[0].name} does not equal ${expectedPet1Name}`);
    assert.strictEqual(result[0].age, expectedPet1Age, `${result[0].age} does not equal ${expectedPet1Age}`);
    assert.strictEqual(result[1].name, expectedPet2Name, `${result[1].name} does not equal ${expectedPet2Name}`);
    assert.strictEqual(result[1].age, expectedPet2Age, `${result[1].age} does not equal ${expectedPet2Age}`);
    assert.strictEqual(result[2].name, expectedPet3Name, `${result[2].name} does not equal ${expectedPet3Name}`);
    assert.strictEqual(result[2].age, expectedPet3Age, `${result[2].age} does not equal ${expectedPet3Age}`);
  })
})
