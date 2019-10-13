function add_or_subtract(arr) {
  let modified_arr = [];
  let sum_original = 0;
  let sum_modified = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    sum_original += element;
    if (element % 2 === 0) {
      element += i;
      modified_arr.push(element);
    } else {
      element -= i;
      modified_arr.push(element);
    }
  }

  arr = modified_arr;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum_modified += element;
  }

  console.log(arr);
  console.log(sum_original);
  console.log(sum_modified);
}
add_or_subtract([5, 15, 23, 56, 35]);
