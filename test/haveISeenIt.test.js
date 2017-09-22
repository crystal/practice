import assert from 'assert';
import haveISeenIt from '../src/haveISeenIt';

describe('haveISeenIt', function() {
  it.skip('should BOOLS for each movie', function() {
    const moviesIveSeen = ['IT', 'The Nightmare Before Christmas', 'Hocus Pocus', 'Beetlejuice'];
    const expected = true
    return haveISeenIt(moviesIveSeen)
      .then((result) => {
        assert.strictEqual(result, )
      })


  })
})
