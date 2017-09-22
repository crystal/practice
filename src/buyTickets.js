// array of objects w/ name & funds
// returns an array of objects with name & remaining funds

export default function getTickets(people) {
  const ticketPrice = 10.00;
  return people.map((person) => {
    const change = person.funds - ticketPrice;
    const updatedPerson = {
      ...person,
      funds: change
    }
  return updatedPerson;
  })
}
