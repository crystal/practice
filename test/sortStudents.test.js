import assert from 'assert';
import sortStudents from '../src/sortStudents';

describe('sortStudents', function() {
  it('should return 8th grade students, sorted w/ combined names', function() {
    const students = [
      {
        firstname: 'zelia',
        lastname: 'zuniga',
        grade: 8
      },
      {
        firstname: 'benjamin',
        lastname: 'barraza',
        grade: 8
      },
      {
        firstname: 'cory',
        lastname: 'castillo',
        grade: 8
      },
      {
        firstname: 'felicia',
        lastname: 'fernandez',
        grade: 6
      },
      {
        firstname: 'juan',
        lastname: 'juarez',
        grade: 4
      },
    ]
    const result = sortStudents(students, 8);
    const expectedStudents = [
      {
        name: 'benjamin barraza',
        grade: 8
      },
      {
        name: 'cory castillo',
        grade: 8
      },
      {
        name: 'zelia zuniga',
        grade: 8
      }
    ]
    assert.strictEqual(result[0].name, expectedStudents[0].name, `${result[0].name} does not equal${expectedStudents[0].name}`);
    assert.strictEqual(result[1].name, expectedStudents[1].name, `${result[1].name} does not equal ${expectedStudents[1].name}`);
    assert.strictEqual(result[2].name, expectedStudents[2].name, `${result[2].name} does not equal ${expectedStudents[2].name}`);
  })
})
