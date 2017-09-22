// can all individuals buy tickets

export default function canBuyTickets(people) {
  const ticketPrice = 10.00
  const result = people.every((person) => {
    return person.funds >= ticketPrice
  })
  return result;
}
