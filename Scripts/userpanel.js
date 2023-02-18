import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
const userData = JSON.parse(localStorage.getItem("loggedUser")) || [];
const isAuth = localStorage.getItem("isAuth") || false;
const { name } = userData[0];
if (isAuth) {
  document.getElementById("login").innerHTML = `<h3 id="username"></h3>`;
  document.getElementById("username").innerText = name;
  document.getElementById("singup_nav").innerText = "Log out";
}

function Display(data) {
  let allquizes = document.getElementById("allquizes");
  allquizes.innerHTML = null;
  data.forEach((el, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "child_allquizes");
    div.style.backgroundColor = i % 2 === 0 ? "#FFB84C" : "#E96479";

    let title = document.createElement("h3");
    title.innerText = el.title;

    let status = document.createElement("button");
    status.addEventListener("click", ()=>{
        if(el.ssc[0].isAttempted){
            console.log(el.ssc)
            localStorage.setItem("result", JSON.stringify(el.ssc))
            window.location.href = "/result.html"
        }else{
            window.location.href = "/quiz.html"
        }
    })

    status.innerText = el.ssc[0].isAttempted ? "Result" : "Start";
    div.append(title, status);
    allquizes.append(div);
  });
}

Display(userData[0].mocks);
