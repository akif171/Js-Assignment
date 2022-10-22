const magician_names = ["David Blaine", "Jerry Sadowitz", "Derren Brown"];

function show_magicians(magicians) {
  magicians.map((mag) => {
    console.log(mag);
  });
}

show_magicians(magician_names);

function make_great() {
  const new_magicians = magician_names.map((element, index) => {
    return (magician_names[index] = "The Great " + element);
  });
  console.log(new_magicians);
}

make_great();
show_magicians(magician_names);
