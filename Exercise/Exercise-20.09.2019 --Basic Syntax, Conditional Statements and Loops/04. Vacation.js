function vac_price_calc(num, type, day) {
  let price = 0;
  let people = num;

  switch (day) {
    case "Saturday":
      if (type == "Students") {
        price += people * 9.8;
        if (people >= 30) {
          price -= price * 0.15;
        }
      } else if (type == "Business") {
        if (people >= 100) {
          people -= 10;
        }
        price += people * 15.6;
      } else {
        price += people * 20;
        if (people >= 10 && people <= 20) {
          price -= price * 0.05;
        }
      }
      break;
    case "Sunday":
      if (type == "Students") {
        price += people * 10.46;
        if (people >= 30) {
          price -= price * 0.15;
        }
      } else if (type == "Business") {
        if (people >= 100) {
          people -= 10;
        }
        price += people * 16;
      } else {
        price += people * 22.5;
        if (people >= 10 && people <= 20) {
          price -= price * 0.05;
        }
      }
      break;
    default:
      if (type == "Students") {
        price += people * 8.45;
        if (people >= 30) {
          price -= price * 0.15;
        }
      } else if (type == "Business") {
        if (people >= 100) {
          people -= 10;
        }
        price += people * 10.9;
      } else {
        price += people * 15;
        if (people >= 10 && people <= 20) {
          price -= price * 0.05;
        }
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}
vac_price_calc(30, "Students", "Sunday");
vac_price_calc(40, "Regular", "Saturday");
vac_price_calc(150, "Business", "Saturday");
