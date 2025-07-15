let optionsContainer = document.getElementById("options-container")
let homeWindow = document.getElementById("home-window")
let answerWindow = document.getElementById("answer-window")
let questionHeading = document.querySelector("#question-heading h2")

let answersBox = document.querySelectorAll("#answer-container div")
let answerBoxArray = Array.from(answersBox)

let options = document.getElementsByClassName("option")
let optionsArray = Array.from(options)

let score = document.getElementById("score")
let heading = document.querySelector("#heading h2")

let question = generalKnowledgeQuestions[0].question;
let answers = generalKnowledgeQuestions[0].answers;
let correct = generalKnowledgeQuestions[0].correct;

let optionChoice = false;

document.addEventListener("DOMContentLoaded", function() {

  for (let option of options) {
    option.addEventListener("click", function() {
      if (optionChoice) return;
      hideHomepage();
      goodLuckMessage(option);
      setTimeout(() => {
      optionChoice = true;
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
  console.log("showtopic")
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

// function correctAnswer() {
//   if (answers === correct){
//     correct.classList.add("correct-answer")
//     console.log("CORRECT!")
//   } else {
//     answers.classList.add("incorrect-answer")
//   }
// }


function showGeneralKnowledgeQuestion(optionChoice) {
  console.log(generalKnowledgeQuestions[0].question); 

  if (optionChoice === optionsArray[0]) {
    questionHeading.textContent = question;
    homeWindow.classList.add("hidden")
    answerWindow.classList.remove("hidden")
    
    for (let i = 0; i < answerBoxArray.length; i++) {
      answerBoxArray[i].textContent = answers[i]
      console.log(answers)
    }
    correctAnswer()
  }
}