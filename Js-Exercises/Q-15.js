const guestList = [ "Furqan", "Owais", "Ameen"]

guestList.map((guest) => {
  console.log(`Hi ${guest}! We are gladly inviting you to join us for dinner.`)
})

const outOfList = guestList.shift()
guestList.unshift("salman")

console.log(`${outOfList} can't come for dinner.`)

guestList.map((guest) => {
  console.log(`Hi ${guest}! We are gladly inviting you to join us for dinner.`)
})
