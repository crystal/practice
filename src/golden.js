// return which index object has the golden ticket
export default function isGolden(array) {
    const result = array.findIndex((ticket) => {
    return ticket.golden === true
  })
  return result
}
