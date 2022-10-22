const guestList = ["Furqan", "Owais", "Ameen"];
const nonInvited = [];

guestList.unshift("Akif");

const middle = guestList.length / 2;
guestList.splice(middle, 0, "saleem");
guestList.push("Adnan");

guestList.map((guest) => {
  console.log(`Hi ${guest}! We are gladly inviting you to join us for dinner.`);
});

console.log("Sorry! I can't invite more than two people.");
// console.log(guestList.length);

for (let i = 0; (i = guestList.length - 2); i++) {
  const outOfList = guestList.shift();
  nonInvited.push(outOfList);
}

nonInvited.map((guest) => {
  console.log(
    `Sorry ${guest}, you can't come to dinner because I don't have table for more than two people. `
  );
});

guestList.map((guest) => {
  console.log(`Hi ${guest}! We are gladly inviting you to join us for dinner.`);
});

for (let i = 0; (i = guestList.length); i++) {
  const outOfList = guestList.shift();
  nonInvited.push(outOfList);
}
console.log(guestList);
