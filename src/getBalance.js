// input float curr balance
// input arr objects transactions w/ amount & type (debit or add funds / credit)
// output float new balance after all transactions are complete

export default function getBalance(transactions, currentBalance) {
  return transactions.reduce((accum, b) => {
    return b.type === 'credit' ? accum + b.amount : accum - b.amount
  }, currentBalance)
}
