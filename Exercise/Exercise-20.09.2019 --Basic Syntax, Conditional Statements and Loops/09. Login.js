function login(data) {
  let username = String(data.shift());
  let password = username
    .split("")
    .reverse()
    .join("");

  for (let i = 0; i < data.length; i++) {
    const temppass = data[i];
    if (i == 3) {
      console.log(`User ${username} blocked!`);
    } else if (temppass == password) {
      console.log(`User ${username} logged in.`);
      break;
    } else {
      console.log("Incorrect password. Try again.");
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
