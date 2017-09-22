// input arr objects ingredients
// func data arr recipes I know
// function returns arr strings - recipes you can make

const recipes = [
  {
    name: 'spaghetti',
    ingredients: ['pasta', 'pasta sauce']
  },
  {
    name: 'bean tacos',
    ingredients: ['tortillas', 'beans']
  },
  {
    name: 'potato tacos',
    ingredients: ['tortillas', 'potatoes']
  },
  {
    name: 'chalupas',
    ingredients: ['tortillas', 'beans', 'tomatoes', 'lettuce']
  }
];

export default function findRecipes(ingredientsIHave) {
  return recipes.filter((recipe) => {
    return recipe.ingredients.every((ingredientName) => {
      if (ingredientsIHave.find((ingredient) => ingredient.name === ingredientName )) {
        return true;
      }
      return false;
    })
  })
}
