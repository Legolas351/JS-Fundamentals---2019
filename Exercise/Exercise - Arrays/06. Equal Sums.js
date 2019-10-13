function equal_sums(arr) {
  let output;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let left_Nums = arr.slice(0, i).reduce((a, b) => a + b, 0);
    let right_Nums = arr.slice(i + 1).reduce((a, b) => a + b, 0);

    if (left_Nums === right_Nums) {
      output = i;
      break;
    } else {
      output = "no";
    }
  }
  console.log(output);
}
equal_sums([1]);
