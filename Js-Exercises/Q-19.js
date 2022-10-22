const guestList = ["Furqan", "Owais", "Ameen"];

guestList.unshift("Akif");

const middle = guestList.length / 2;
guestList.splice(middle, 0, "saleem");
guestList.push("Adnan");

guestList.map((guest) => {
  console.log(`Hi ${guest}! We are gladly inviting you to join us for dinner.`);
});

console.log(`I am inviting ${guestList.length} people to dinner `);
