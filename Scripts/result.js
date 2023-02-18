import nav from "./navbar.js";
document.getElementById("navbar").innerHTML = nav();
let result = JSON.parse(localStorage.getItem("result")) || [];

function display(data) {

  document.getElementById("result_totalmarks").innerText =
   `Maximum Marks: ${data.questions.length}`;
  document.getElementById("scored_marks").innerText = `Scored Marks: ${data.finalScore}`;
  data.questions.forEach((el)=>{
    let div = document.createElement("div")
    div.setAttribute("class", "result_child")

    let title = document.createElement("h4");
    
    title.innerText = `${el.ques}. ${el.Question} `;
     div.style.backgroundColor = el.ans === el.curransers ? "#08bd80" : "#D61355"
    
    let optiondiv = document.createElement("div");
    optiondiv.setAttribute("class", "result_option")
    let markedPrint = el.curransers.length-1
markedPrint = el.curransers[markedPrint]

let print = el.ans.length-1

    print = el.ans[print]
    let a = document.createElement("h5")
    a.innerText = `1:  ${el.a}`
   
    
    
    let b = document.createElement("h5")
    b.innerText = `2:  ${el.b}`
    

        let c = document.createElement("h5")
        c.innerText = `3: ${el.c}`
        
        let d = document.createElement("h5")
        d.innerText = `4: ${el.d}`
        
        let correct = document.createElement("h4")
        let mark = document.createElement("h4");
        let addedMark = document.createElement("h5")
        if(el.ans == el.curransers){
            mark.innerText = `You Marked option: ${print} `
            addedMark.innerText = "Correct Answer"
        }else{
            mark.innerText =`You Marked option: ${markedPrint} `
            addedMark.innerText = "Worng Answer"
        }
        
        correct.innerText = `Correct Option is : ${print}`
        optiondiv.append(a,b,c,d,mark,correct,addedMark)
    

    div.append(title, optiondiv)
    document.getElementById("result_questions").append(div)
  })
}
display(result[0]);
