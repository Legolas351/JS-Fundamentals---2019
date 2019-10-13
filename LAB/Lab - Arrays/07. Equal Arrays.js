function equal_arr(arr1, arr2) {
  let sum = 0;
  let are_equal = true;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      are_equal = false;
      break;
    }
    if (arr1[i] === arr2[i]) {
      element = Number(arr1[i]);
      sum += element;
      
    }
    
  }
  if (are_equal === true) {
    console.log(`Arrays are identical. Sum: ${sum}`)
  }
}
equal_arr(['1'], ['10']);
