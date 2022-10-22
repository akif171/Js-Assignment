const magician_names = ["David Blaine", "Jerry Sadowitz", "Derren Brown"];

function show_magicians(magicians) {
  magicians.map((mag) => {
    console.log(mag);
  });
}
function make_great() {
  magician_names.map((element, index) => {
    magician_names[index] = "The Great " + element;
  });
}

make_great();
show_magicians(magician_names);
