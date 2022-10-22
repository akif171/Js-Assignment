const magician_names = ["David Blaine", "Jerry Sadowitz", "Derren Brown"];

function show_magicians(magicians) {
  magicians.map((mag) => {
    console.log(mag);
  });
}

show_magicians(magician_names);
