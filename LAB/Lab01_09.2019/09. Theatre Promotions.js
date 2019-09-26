function promo(day, age) {
  let price = "";
  if (age < 0 || age > 122) {
    price = "Error!";
  }

  switch (day) {
    case "Holiday":
      if (age >= 0 && age <= 18) {
        price = "5$";
      }
      if (age > 18 && age <= 64) {
        price = "12$";
      }
      if (age > 64 && age <= 122) {
        price = "10$";
      }

      break;
    case "Weekend":
      if (age >= 0 && age <= 18) {
        price = "15$";
      }
      if (age > 18 && age <= 64) {
        price = "20$";
      }
      if (age > 64 && age <= 122) {
        price = "15$";
      }

      break;

    default:
      if (age >= 0 && age <= 18) {
        price = "12$";
      }
      if (age > 18 && age <= 64) {
        price = "18$";
      }
      if (age > 64 && age <= 122) {
        price = "12$";
      }
      break;
  }

  console.log(price);
}
promo("Holiday", 15);
