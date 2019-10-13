function common(arr1, arr2) {
  arr1.forEach(element => {                                 // forEach - съкратен For loop , имам деклариран element по който ще итерирам
    let includes = arr2.includes(element);                  // правя си променлива за да я принтирам после, а в нея съхранявам True/False дали в arr2 има element

    if (includes) {
      console.log(element);                                 // ако елемента го има , го принтирам.
    }
  });
}
common(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
