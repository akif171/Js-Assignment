const user_names = ["admin", "akif", "owais", "ali", "ameen"];

console.log(user_names);
for (let i = 0; (i = user_names.length); i++) {
  user_names.shift();
}

if (user_names.length === 0) {
  console.log("We need to find some users!");
}
