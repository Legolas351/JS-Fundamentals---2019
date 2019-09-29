function amazing(data) {
  let str = String(data);
  let sum = 0;

  for (let index = 0; index < str.length; index++) {
    sum += Number(str[index]);
  }
  let result = String(sum).includes("9");
  console.log(`${data} Amazing? ${result ? "True" : "False"}`);
}

amazing(1233);
