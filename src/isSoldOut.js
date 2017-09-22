export default function isSoldOut(tickets) {
  const result = tickets.every((ticket) => {
  return ticket.sold === true
  })
  return result;
}
