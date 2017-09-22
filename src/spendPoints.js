// input how many points a student has
// input array of objects they want to purchase
// return how many points student has remaining after spending

export default function spendPoints(studentPoints, rewards) {
  const result = rewards.reduce((a, b) => {
    return a + b.cost
  },0)
  const change = studentPoints - result;
  return change;
}
