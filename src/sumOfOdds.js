export default function sumOfOdds(array) {
  return array
  .filter((int) => int % 2 === 1)
  .reduce((a, b) => a + b, 0)
}
