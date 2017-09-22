// input funds available
// an array of objects with items and prices
// return funds remaning

export default function spendCash(funds, stuffBought) {
  const total = stuffBought
    .reduce((accum, item) => {
      return accum + item.cost
    }, 0)
  return funds - total
}
