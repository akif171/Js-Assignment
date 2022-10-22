const current_users = ["akif", "ali", "ameen", "owais", "adnan"];
const new_users = ["Akif", "saleem", "furqan", "rizwan", "OWAIS"];

new_users.map((newUser) => {
  current_users.map((curUser) => {
    const capitalized = curUser.toUpperCase();
    const first_word = curUser[0];
    const other_words = curUser.slice(1);
    const titleCase = `${first_word.toUpperCase()}${other_words}`;
    if (
      newUser === curUser ||
      newUser === capitalized ||
      newUser === titleCase
    ) {
      console.log(`${newUser} is already taken.`);
    }
  });
});
