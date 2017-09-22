// array string names
// array int ages
// returns an array of objects

export default function getPets(pets, ages) {
  const result = pets.map((pet, index) => {
    return {
      name: pet,
      age: ages[index]
    }
  })
  return result
}
