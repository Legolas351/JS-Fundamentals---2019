function SpecNum(data) {                                                        // 2 for loop-a sys edna proverka kym pyrviqt
  let result = Boolean;
  for (let i = 1; i <= data; i++) {
    let num = i;
    let sum = 0;

    for (let e = 0; e < String(i).length; e++) {
      sum += parseInt(num % 10);                                                // parseInt() ---> mnogo vajno
      num /= 10;
    }
    if (sum == 5 || sum == 7 || sum == 11) {
      result = true;
      console.log(`${i} -> ${result ? "True" : "False"}`);
    } else {
      result = false;
      console.log(`${i} -> ${result ? "True" : "False"}`);
    }
  }
}

SpecNum(15);
