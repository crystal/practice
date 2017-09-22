import assert from 'assert';
import scores from '../src/scores';

describe('scores', function() {
  it('should return very poor if average is 300', function(){
    const equifax = 250;
    const experian = 300;
    const transunion = 350;
    const result = scores(equifax, experian, transunion);
    const expected = 'very poor';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return poor if average is 420', function(){
    const equifax = 400;
    const experian = 420;
    const transunion = 440;
    const result = scores(equifax, experian, transunion);
    const expected = 'poor';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return okay if average is 550', function(){
    const equifax = 550;
    const experian = 500;
    const transunion = 600;
    const result = scores(equifax, experian, transunion);
    const expected = 'okay';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return good if average is 650', function(){
    const equifax = 600;
    const experian = 700;
    const transunion = 650;
    const result = scores(equifax, experian, transunion);
    const expected = 'good';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return very good if average is 715', function(){
    const equifax = 715;
    const experian = 730;
    const transunion = 700;
    const result = scores(equifax, experian, transunion);
    const expected = 'very good';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
  it('should return perfect if average is 800', function(){
    const equifax = 800;
    const experian = 800;
    const transunion = 800;
    const result = scores(equifax, experian, transunion);
    const expected = 'perfect';
    assert.strictEqual(result, expected, `${result} does not equal ${expected}`);
  });
})
