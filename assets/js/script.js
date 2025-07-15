let optionsContainer = document.getElementById("options-container")
let homeWindow = document.getElementById("home-window")
let answerWindow = document.getElementById("answer-window")
let questionHeading = document.querySelector("#question-heading h2")

// choice of answer for questions
let choice = document.getElementsByClassName("answer")
let choiceBoxArray = Array.from(choice)

let choice1 = document.querySelector('[data-number="1"]')
let choice2 = document.querySelector('[data-number="2"]')
let choice3 = document.querySelector('[data-number="3"]')
let choice4 = document.querySelector('[data-number="4"]')

// options when chosing a topic 
let options = document.getElementsByClassName("option")
let optionsArray = Array.from(options)

// score and heading elements
let score = document.getElementById("score")
let heading = document.querySelector("#heading h2")

// variables from questionListjs
let question = generalKnowledgeQuestions[0].question;
let answers = generalKnowledgeQuestions[0].answers;
let correct = generalKnowledgeQuestions[0].correct[0];
console.log(correct, answers, question)

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
  document.addEventListener("click", function() {

    // let correctAnswer = answerBoxArray.value;
    console.log(correct)

    for (let i = 0; i < choiceBoxArray.length; i++) {
      choiceBoxArray[i].textContent = answers[i]
    }

    if (correct === choice){
      correct.classList.add("correct-answer")
      console.log("CORRECT!")
    } else {
      choice.classList.add("incorrect-answer")
    }
  })
}


function showGeneralKnowledgeQuestion(optionChoice) {

  if (optionChoice === optionsArray[0]) {
    questionHeading.textContent = question;
    homeWindow.classList.add("hidden")
    answerWindow.classList.remove("hidden")
    
    for (let i = 0; i < choiceBoxArray.length; i++) {
      choiceBoxArray[i].textContent = answers[i]
    }
    correctAnswer()
  }
}