function tripples(n) {
    let str = "";
  for (let i = 0; i < n; i++) {
    let letter = String.fromCharCode(97 + i);
    str += letter
    for (let j = 0; j < i; j++) {
        let letter = String.fromCharCode(97 + j);
        str += letter
      for (let l = 0; l < j; l++) {
        let letter = String.fromCharCode(97 + l);
        str += letter
        console.log(str);

      }
    }
  }
}
tripples(3);
