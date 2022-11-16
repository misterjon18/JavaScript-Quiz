let Car = {
  Manufacturer: `Toyota`,
  MakeAndModel: `Corolla AE101`,
  Engine: `1,3 2E`,
  BodyStyle: `Sedan`,
};

document.getElementById(
  "Manufacturer"
).innerHTML = `Manufacturer: ${Car.Manufacturer}`;
document.getElementById(
  "MakeAndModel"
).innerHTML = `Make And Model: ${Car.MakeAndModel}`;
document.getElementById("Engine").innerHTML = `Engine: ${Car.Engine}`;
document.getElementById("BodyStyle").innerHTML = `Body Style: ${Car.BodyStyle}`;
