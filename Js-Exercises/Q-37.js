function make_shirt(size, message = "I love Javascript.") {
  console.log(
    `This sentence "${message}" will print on your shirt and your shirt size is ${size}.`
  );
}

make_shirt("Large");
make_shirt("Medium");
make_shirt("Small", "I love Typescript.");
