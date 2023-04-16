import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
let loggedUserData = JSON.parse(localStorage.getItem("loggedUser")) || [];
const userData = JSON.parse(localStorage.getItem("loggedUser")) || [];
const isAuth = localStorage.getItem("isAuth") || false;
const { name } = userData[0];
if (isAuth) {
  document.getElementById("login").innerHTML = `<h3 id="username"></h3>`;
  document.getElementById("username").innerText = name;
  document.getElementById("singup_nav").innerText = "Log out";
}
document.getElementById("username").addEventListener("click", ()=>{
    window.location.href = "/userpanel.html"
})
document.getElementById("singup_nav").addEventListener("click", ()=>{
    localStorage.removeItem("loggedUser")
    localStorage.removeItem("isAuth")
    localStorage.removeItem("result")
  return  window.location.href = "../login.html"
})
document.getElementById("logo_nav").addEventListener("click",()=>{
    if(isAuth){
         window.location.href = "../userpanel.html"
    }else{
        window.location.href = "../index.html"
    }
})
let questNo = 0;
function Display(data) {
 
  let checkd = document.querySelectorAll("input");
  checkd.forEach((ele) => (ele.checked = false));

  const titlquiz = document.getElementById("titlequiz");
  titlquiz.innerText = data[0].mocks[0].title;

  const question = document.getElementById("question");
  question.innerText = data[0].mocks[0].ssc[0].questions[questNo].Question;

  const option1 = document.getElementById("option_lable_1");
  option1.innerText = data[0].mocks[0].ssc[0].questions[questNo].a;

  const option2 = document.getElementById("option_lable_2");
  option2.innerText = data[0].mocks[0].ssc[0].questions[questNo].b;

  const option3 = document.getElementById("option_lable_3");
  option3.innerText = data[0].mocks[0].ssc[0].questions[questNo].c;

  const option4 = document.getElementById("option_lable_4");
  option4.innerText = data[0].mocks[0].ssc[0].questions[questNo].d;
}
Display(loggedUserData);
document.getElementById("submitandnext").addEventListener("click", () => {
  if (questNo < loggedUserData[0].mocks[0].ssc[0].questions.length - 1) {
   
    nextQuestion();
  } else {
    alert("Completed the test");
  
   
    window.location.href = "../userpanel.html";
  }
});

const answers = document.querySelectorAll(".options");
let finalScore = 0;
function nextQuestion() {
  let curransers;
  answers.forEach((el) => {
    if (el.checked) {
      curransers = el.id;
    }
  });
  if (!curransers) {
    curransers = "option_0";
  }
  loggedUserData[0].mocks[0].ssc[0].questions[questNo].curransers = curransers;
  loggedUserData[0].mocks[0].ssc[0].isAttempted = true;

  if (loggedUserData[0].mocks[0].ssc[0].questions[questNo].ans === curransers) {
    finalScore++;
    loggedUserData[0].mocks[0].ssc[0].finalScore = finalScore;
  }
  questNo++;

  localStorage.setItem("loggedUser", JSON.stringify(loggedUserData));
  if(questNo == loggedUserData[0].mocks[0].ssc[0].questions.length){
    return
  }
  
  return Display(loggedUserData);
}

document.getElementById("clear_question").addEventListener("click", () => {
  let checkd = document.querySelectorAll("input");
  checkd.forEach((ele) => (ele.checked = false));
});
document.getElementById("skip_question").addEventListener("click", () => {
  let checkd = document.querySelectorAll("input");
  checkd.forEach((ele) => (ele.checked = false));
  if (questNo < loggedUserData[0].mocks[0].ssc[0].questions.length - 1) {
    console.log(loggedUserData[0].mocks[0].ssc[0].questions.length, questNo);
    nextQuestion();
  } else {
    alert("Completed the test");
    window.location.href = "../userpanel.html";
  }
  
});
