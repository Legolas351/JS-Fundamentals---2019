function intOrFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let output = sum % 1 === 0 ? "Integer" : "Float";

  //console.log((sum%10).toFixed(2));

  console.log(`${sum} - ${output}`);
}

intOrFloat(100, 200, 303);
