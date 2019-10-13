function rotation(arr, num_of_rotations) {
  while (num_of_rotations > 0) {
    arr.push(arr.shift());
    num_of_rotations--;
  }
  console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
