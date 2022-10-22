function car_info(manufacturerName, modelName, color, airBags) {
  const car = {
    Manufacturer: manufacturerName,
    Model: modelName,
  };

  if (color) {
    car.Color = color;
  } 
  if (airBags) {
    car.AirBags = airBags;
  }

  return car;
}

console.log(car_info("Suzuki", "Mehran"));
console.log(car_info("Toyota", "Camry", "White"));
console.log(car_info("Cadillac", "Escalade", "Black", 6));
