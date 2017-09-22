import assert from 'assert';
import findRecipes from '../src/findRecipes';

describe('findRecipes', function() {
  it('should return arr of recipes I can make w/ existing ingredients', function() {
    const ingredientsIHave = [
      {
        name: 'beans'
      },
      {
        name: 'tortillas'
      },
      {
        name: 'potatoes'
      },
      {
        name: 'lettuce'
      },
      {
        name: 'tomatoes'
      }
    ];
    const result = findRecipes(ingredientsIHave);
    const expected = [
      {
        name: 'bean tacos'
      },
      {
        name: 'potato tacos'
      },
      {
        name: 'chalupas'
      },
    ]
    assert.ok(result.find((recipe) => recipe.name === expected[0].name), `${expected[0].name} not returned`);
    assert.ok(result.find((recipe) => recipe.name === expected[1].name), `${expected[1].name} not returned`);
    assert.ok(result.find((recipe) => recipe.name === expected[2].name), `${expected[2].name} not returned`);
  })
})
