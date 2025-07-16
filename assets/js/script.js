let optionsContainer = document.getElementById("options-container")
let homeWindow = document.getElementById("home-window")
let answerWindow = document.getElementById("answer-window")
let questionHeading = document.querySelector("#question-heading h2")

// choice of answer for questions
let choice = document.getElementsByClassName("answer")
let choiceBoxArray = Array.from(choice)

// options when chosing a topic 
let options = document.getElementsByClassName("option")
let optionsArray = Array.from(options)

// score and heading elements
let score = document.getElementById("score")
let heading = document.querySelector("#heading h2")

// variables from questionListjs

const question = generalKnowledgeQuestions[0].question;
const answers = generalKnowledgeQuestions[0].answers;
// let correct = generalKnowledgeQuestions[0].correct[0];
console.log(answers, question)

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

function correctAnswer(choice, index) {
  console.log(correctAnswer)
  for (let i = 0; i < choiceBoxArray.length; i++) {

    let correctQuestionAnswer = generalKnowledgeQuestions[0].answers[index].correct;

    if (correctQuestionAnswer){
      choice.classList.add("correct-answer")
      console.log("CORRECT!")
    } else {
      choice.classList.add("incorrect-answer")
      console.log("incorrect!")
    }

    Array.from(options).forEach(option => {
      options.style.pointerEvents = "none";
    });

  }
}


function showGeneralKnowledgeQuestion(optionChoice) {
  
  if (optionChoice === optionsArray[0]) {
    questionHeading.textContent = question;
    homeWindow.classList.add("hidden")
    answerWindow.classList.remove("hidden")
    
    for (let i = 0; i < choiceBoxArray.length; i++) {
      let correctQuestionAnswer = generalKnowledgeQuestions[0].answers[i].correct;
      choiceBoxArray[i].textContent = answers[i].option;

      choiceBoxArray[i].addEventListener("click", function() {
      correctAnswer(this, i)
    })
    }
  }
}