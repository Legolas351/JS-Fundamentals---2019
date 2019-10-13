function magic_sum(arr, num) {
  let array = arr;
  let magicSum = Number(num);

  for (let i = 0; i < array.length; i++) {
    const element_a = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const element_b = array[j];

      if (element_a + element_b === magicSum) {
        console.log(`${element_a} ${element_b}`);
      }
    }
  }
}
magic_sum([1, 7, 6, 2, 19, 23], 8);
