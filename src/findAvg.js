export default function findAvg(numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0)
  let result = sum / numbers.length
  return result;
}
