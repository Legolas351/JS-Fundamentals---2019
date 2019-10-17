function simpleCalc(numOne, numTwo, operator) {
  let result = calculate();

  function calculate() {
      let sum
    switch (operator) {
      case 'multiply':
          sum = numOne * numTwo;
        break;
      case 'divide':
          sum = numOne / numTwo;
        break;
      case 'add':
          sum = numOne + numTwo;
        break;
      case 'subtract':
          sum = numOne - numTwo;
        break;
      default:
        break;
    }
    return sum
  }
  console.log(result);
  
}
simpleCalc(40,
    8,
    'divide'
    )
