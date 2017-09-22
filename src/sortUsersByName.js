// input array objects (users) w/ name prop to sort alphabetically
// return array of objects sorted by name

export default function sortUsersByName(users) {
  let result = users.sort((a, b) => {
    const nameA = a.name
    const nameB = b.name
    if (nameA < nameB) {
      return -1
    } else if (nameA > nameB) {
      return 1
    }
    return 0
  })
  return result;
}
