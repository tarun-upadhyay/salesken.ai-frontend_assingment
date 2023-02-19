import nav from "./navbar.js"
document.getElementById("navbar").innerHTML = nav()

const userData = JSON.parse(localStorage.getItem("loggedUser")) || [];
const isAuth = localStorage.getItem("isAuth") || false;
const { name } = userData[0];
if (isAuth) {
  document.getElementById("login").innerHTML = `<h3 id="username"></h3>`;
  document.getElementById("username").innerText = name;
  document.getElementById("singup_nav").innerText = "Log out";
}
document.getElementById("username").addEventListener("click", ()=>{
    window.location.href = "../userpanel.html"
})
document.getElementById("singup_nav").addEventListener("click", ()=>{
    localStorage.removeItem("loggedUser")
    localStorage.removeItem("isAuth")
   return window.location.href = "../login.html";
})
document.getElementById("logo_nav").addEventListener("click",()=>{
    if(isAuth){
         window.location.href = "../userpanel.html"
    }
})
document.getElementById("startlearning").addEventListener("click", ()=>{
    if(isAuth){
      return  window.location.href = "../userpanel.html"
   }else{
    return  window.location.href = "../login.html"
   }
})