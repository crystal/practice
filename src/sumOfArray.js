// input array ints
// output int sum of ints

export default function sumOfArray(array) {
  const result = array.reduce((a, b) => {
    if (typeof b !== 'number') {
      return NaN
    }
    return a + b
  }, 0);
  return result;
}
