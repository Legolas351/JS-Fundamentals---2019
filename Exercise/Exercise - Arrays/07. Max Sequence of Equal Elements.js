function max_sequence(arr) {
  let array = arr;

  let take_the_numbers_from = 0;
  let del_everything_after = 0;

  let current_item = 0;
  let current_possition;

  for (let i = 0; i < array.length; i++) {
    current_item = i;
    current_possition = 0;
    const base_element = Number(array[i]);

    for (let j = i; j < array.length; j++) {
      const element = Number(array[j]);

      if (base_element === element) {
        current_possition++;
      } else {
        break;
      }
    }
    if (current_possition > del_everything_after) {
      del_everything_after = current_possition;
      take_the_numbers_from = current_item;
    }
  }

  let output = array.splice(take_the_numbers_from, del_everything_after);

  console.log(output.join(" "));
}
max_sequence([1, 1, 1, 2, 3, 1, 3, 3]);
