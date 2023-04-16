import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
import { ssc } from "./mocks.js";
let userData = JSON.parse(localStorage.getItem("userData")) || [];
document.getElementById("form_data").addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});
let isAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
if(isAuth) window.location.href = "../index.html"

function handleSubmit() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let auth = authentication(email, password);
  
  
  if(auth[1]){
    localStorage.setItem("loggedUser", JSON.stringify(auth[0]))
    localStorage.setItem("isAuth", true)
    window.location.href = "../userpanel.html";
  }else{
    return alert("Wrong Credential or You can resigter")
  }
}

function authentication(email, password) {
  let checked = userData.filter((el) => {
    return el.email === email && el.password === password;
  });

  if (checked.length){
    return [checked, true]}
  return false;
}
