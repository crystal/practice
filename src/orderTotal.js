export default function orderTotal(items, taxRate = 0.10) {
  const subtotal = items.reduce((itemTotal, item) => {
    return itemTotal + (item.price * item.qty)
  }, 0.00)
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  const result = {
    subtotal: subtotal.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2)
  }
  return result;
}
