function gassMoney(S, X, Y) {
  let fuelneeded = (S / 100) * 7 + X * 0.1;
  let moneyNeeded = fuelneeded * Y;

  console.log(`Needed money for that trip is ${moneyNeeded}lv.`);
}

gassMoney(90, 14, 2.88);
