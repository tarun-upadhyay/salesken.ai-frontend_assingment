import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
let loggedUserData = JSON.parse(localStorage.getItem("loggedUser")) || [];
let questNo = 0;
function Display(data) {
    console.log(data)
    const titlquiz = document.getElementById("titlequiz")
   titlquiz.innerText = data[0].mocks[0].title
   
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
document.getElementById("submit").addEventListener("click", () => {
  nextQuestion();
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
  loggedUserData[0].mocks[0].ssc[0].questions[questNo].curransers = curransers;
  loggedUserData[0].mocks[0].ssc[0].isAttempted = true;
  console.log(loggedUserData[0].mocks[0].ssc[0].questions[questNo].ans)
  if(loggedUserData[0].mocks[0].ssc[0].questions[questNo].ans === curransers){
    finalScore++
    loggedUserData[0].mocks[0].ssc[0].finalScore = finalScore
  } 
  questNo++;
  localStorage.setItem("loggedUser", JSON.stringify(loggedUserData))
  console.log(curransers, loggedUserData[0]);
  return Display(loggedUserData);
}
