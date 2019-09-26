// function odd_nums(num) {
//     let sum = 0;
//     for (let i = num; i >= 1; i--) {
//         if (i%2 != 0) {
//             console.log(i);
//             sum += i
//         }
//     }
//     console.log(`Sum =${sum}`);

// }
// odd_nums(5)

function odd_nums1(num) {
  let number = num;
  let sum = 0;
  let counter = 0;

  while (number > 0) {
    if (counter % 2 != 0) {
      console.log(counter);
      number--;
      sum += counter;
    }

    counter++;
  }
  console.log(`Sum: ${sum}`);
}
odd_nums1(5);
