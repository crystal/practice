import assert from 'assert';
import transform from '../src/transform';

describe('transform', function() {
  it('should transform their names to their vehicle', function() {
    const transformerNames = ['bumblebee', 'optimus prime', 'jazz', 'grimlock', 'inferno'];
    const result = transform(transformerNames);
    const expectedVehicle1 = 'vw beetle'
    const expectedVehicle2 = 'semitruck'
    const expectedVehicle3 = 'porsche'
    const expectedVehicle4 = 't-rex'
    const expectedVehicle5 = 'fire engine'
    assert.strictEqual(result[0], expectedVehicle1, `${result[0]} does not equal ${expectedVehicle1}`)
    assert.strictEqual(result[1], expectedVehicle2, `${result[1]} does not equal ${expectedVehicle2}`)
    assert.strictEqual(result[2], expectedVehicle3, `${result[2]} does not equal ${expectedVehicle3}`)
    assert.strictEqual(result[3], expectedVehicle4, `${result[3]} does not equal ${expectedVehicle4}`)
    assert.strictEqual(result[4], expectedVehicle5, `${result[4]} does not equal ${expectedVehicle5}`)
  })
})
