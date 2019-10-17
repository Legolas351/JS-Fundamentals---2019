function orders(product, quantity) {
  let totalPrice = calcTotal();

  function calcTotal() {
    let price;
    switch (product) {
      case "coffee":
        price = quantity * 1.5;
        break;
      case "water":
        price = quantity * 1.0;
        break;

      case "cake":
        price = quantity * 1.4;
        break;
      case "snacks":
        price = quantity * 2.0;
        break;
      default:
        break;
    }
    return price;
  }

  console.log(Number(totalPrice).toFixed(2));
}

orders("aspod", 5);
