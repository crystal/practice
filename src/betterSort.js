export default function betterSort(numbers) {
  const result = numbers.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    }
    return 0
  })
  return result
}
