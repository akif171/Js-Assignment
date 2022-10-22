function compare(num) {
  if (num === 9) {
    console.log("The given number is equal to 9.");
  } else {
    throw Error("The given number is not equal to 9.");
  }
}

compare(7); //comment this
// compare(9); //Uncomment this
