let optionsContainer = document.getElementById("options-container")
let options = document.getElementsByClassName("option")
let homeWindow = document.getElementById("home-window")
let answerWindow = document.getElementById("answer-window")
let answersBox = document.querySelectorAll("#answer-container div")
let questionheading = document.getElementById("answer-window")
let answerBoxArray = Array.from(answersBox)
let optionsArray = Array.from(options)
let score = document.getElementById("score")
let heading = document.querySelector("#heading h2")

document.addEventListener("DOMContentLoaded", function() {

  for (let option of options) {
    option.addEventListener("click", function() {
      hideHomepage();
      goodLuckMessage(option);
      setTimeout(() => {
      showTopic(option);
      }, 2000);
    })
  }
});


function goodLuckMessage(optionChoice) {
  if (optionChoice === optionsArray[0]) {
    console.log("goodluck")
    heading.textContent = "Good Luck! You chose General Knowledge"
  }
}

function showTopic(optionChoice) {
  console.log("hello")
  if (optionChoice === optionsArray[0]) {
    showGeneralKnowledgeQuestion(optionChoice)
  }
}

function hideHomepage() {
  optionsContainer.classList.remove("options-container")
  optionsContainer.classList.add("hidden")
  score.classList.add("hidden")
}
function increamentScore() {}

function correctAnswer() {
  let correct = generalKnowledgeQuestions[0].correct;
  if (answers === correct){
    options.classList.add("correct-answer")
  } else {
    options.classList.add("incorrect-answer")
  }
}


function showGeneralKnowledgeQuestion(optionChoice) {
  console.log(generalKnowledgeQuestions[0].question); 
  console.log("showGKQ")
  if (optionChoice === optionsArray[0]) {
    console.log("showGKQ")
    let question = generalKnowledgeQuestions[0].question;
    let answers = generalKnowledgeQuestions[0].answers;
    let correct = generalKnowledgeQuestions[0].correct;
    questionheading.textContent = question;
    homeWindow.classList.add("hidden")
    answerWindow.classList.remove("hidden")
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = answers[i]
    }
  }
}