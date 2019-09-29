function place(missing, cahr, check) {
  let replace = missing.replace("_", cahr);
  let output = replace === check ? "Matched" : "Not Matched";

  console.log(output);
}
place("Str_ng", "I", "Strong");
