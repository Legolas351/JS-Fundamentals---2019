// function triangle(data) {
//     let output = " ";
//   for (let row = 1; row <= data; row++) {
//     for (let col = 1; col <= row; col++) {
//       output += row + " "
//     }
//     output += "\n "
//   }
//   console.log(output);

// }
// triangle(6);

function triangle(data) {
  for (let i = 1; i <= data; i++) {
    console.log(`${i} `.repeat(i));
  }
}
triangle(10);
