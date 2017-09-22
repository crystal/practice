// input arr strings - animal types
// function will parse out the animal types
// output object property that has mammal count int & reptile count int

export default function countAnimals(animals) {
  const mammals = ['hampster', 'dog', 'rabbit'];
  const reptiles = ['lizard', 'gecko', 'snake'];
  return animals.reduce((accum, b) => {
    if (mammals.includes(b)){
      return {
        ...accum,
        mammalCount: accum.mammalCount + 1
      }
    }
    return {
      ...accum,
      reptileCount: accum.reptileCount + 1
    }
  }, {
    mammalCount: 0,
    reptileCount: 0
  })
}
