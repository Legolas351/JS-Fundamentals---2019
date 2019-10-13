function max_Num(arr) {
  let new_Array = [];
  for (let i = 0; i < arr.length; i++) {
    let left_element = Number(arr[i]);                  // Взимам първият елемент
    let right_element = arr.slice(i + 1);               // Взимам вторият - slice взима от началото ( i + 1 ) до края всичко

    let is_bigger = true;

    for (let s = 0; s < right_element.length; s++) {        // проверявам всички десни числа дали са по голеи от първият елемент.
      if (left_element <= right_element[s]) {
        is_bigger = false;
        break;
      }
    }

    if (is_bigger) {
      new_Array.push(left_element);
    }
  }
  console.log(new_Array.join(" "));
}
max_Num([41, 41, 34, 20]);
