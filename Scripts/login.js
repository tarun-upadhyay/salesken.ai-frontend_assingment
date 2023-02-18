import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
import { ssc } from "./mocks.js";
let userData = JSON.parse(localStorage.getItem("userData")) || [];
document.getElementById("form_data").addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

function handleSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let auth = authentication(email, password);
  console.log(auth);
}

function authentication(email, password) {
  let checked = userData.filter((el) => {
    return el.email === email && el.password === password;
  });

  if (checked.length) return true;
  return false;
}
