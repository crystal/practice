// return true if all sweets are sold

export default function sellSweets(sweets) {
  return sweets.every((sweet) => {
    return sweet.sold === true
  })
}
