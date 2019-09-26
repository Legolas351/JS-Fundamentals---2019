function print_and_sum(start, end) {
  let a = Number(start);
  let b = Number(end);
  let sum = 0;
  let log = "";

  for (let i = a; i <= b; i++) {
    log += i + " ";
    sum += i;
  }
  console.log(log);

  console.log(`Sum: ${sum}`);
}
print_and_sum(0, 26);
