// input array of ints
// output int sum of positives

export default function sumOfPositives(array) {
  return array
    .filter((int) => int > 0)
    .reduce((a, b) => a + b, 0)
}
