import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
import { ssc ,prog} from "./mocks.js";

const userData = JSON.parse(localStorage.getItem("userData")) || [];
const isAuth = localStorage.getItem("isAuth") || false;

let { name } = userData[0] || ""
if (isAuth) {
  document.getElementById("login").innerHTML = `<h3 id="username"></h3>`;
  document.getElementById("username").innerText = name;
  document.getElementById("singup_nav").innerText = "Log out";
 
   window.location.href = "../index.html"
}

document.getElementById("singup_nav").addEventListener("click", ()=>{
  localStorage.removeItem("loggedUser")
  localStorage.removeItem("isAuth")
  localStorage.removeItem("result")
 return   window.location.href = "../login.html"
})
document.getElementById("logo_nav").addEventListener("click",()=>{
    if(isAuth){
         window.location.href = "../userpanel.html"
    }else{
        window.location.href = "../index.html"
    }
})
function handleSubmit() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const exam = document.getElementById("exam").value;
  if (exam.length < 2 || name.length < 3 || password.length < 7) {
    if (password.length < 7) {
      return alert("Password Length more than 8 Characters");
    }
    return alert(
      "Please fill all the details and Password length minium 8 Charc"
    );
  }
  const id = userData.length + 1;
  let student = new User(name, email, password, exam, ssc,prog, id);

  let finalSubmit = userData.filter((el) => el.email === student.email);

  if (finalSubmit.length) {
    alert("You had already registred Plz login");
    return (window.location.href = "../login.html");
  } else {
    userData.push(student);
    alert("Signup Succeed");
    localStorage.setItem("userData", JSON.stringify(userData));

    return (window.location.href = "../login.html");
  }
}

document.getElementById("form_data").addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

class User {
  constructor(name, email, password, exam, ssc, id) {
    this.studen_Id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.exam = exam;
    this.mocks = [{mock:1, ssc, title:"Basic Questions"}]
    
  }
}
