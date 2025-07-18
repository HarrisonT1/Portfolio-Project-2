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
let correctScore = 0;
let heading = document.querySelector("#heading h2")

// variables from questionListjs

let questionIndex = 0;
let questionArray = []


let optionChoice = false;

document.addEventListener("DOMContentLoaded", function() {

  for (let option of options) {
    option.addEventListener("click", function() {
      if (optionChoice) return;
      questionIndex = 0;
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
  for (let option of optionsArray) {
    if (optionChoice === option) {
      heading.textContent = `Good Luck! You chose ${optionChoice.textContent}`;
    }
  }
}

function showTopic(optionChoice) {

  if (optionChoice === optionsArray[0]) {
    questionArray = generalKnowledgeQuestions;
  } else if (optionChoice === optionsArray[2]) {
    questionArray = bossingQuestions;
  } else if (optionChoice === optionsArray[1]) {
    questionArray = skillingQuestions;
  } else if (optionChoice === optionsArray[3]) {
    questionArray = itemsQuestions;
  }

  score.classList.remove("hidden")
  score.textContent = `Correct answers: ${correctScore}/5`
  // selects question once one of the above is met 
  newQuestion()
}

function hideHomepage() {
  optionsContainer.classList.remove("options-container")
  optionsContainer.classList.add("hidden")
}

function newQuestion() {
  choiceBoxArray.forEach(option => {
    option.style.pointerEvents = "auto";
  });

  if (questionIndex < questionArray.length || questionIndex < 4) {
    let newQ = questionArray[questionIndex];
    questionHeading.textContent = newQ.question;
    console.log(questionIndex)
  

    let mainQuestion = questionArray[questionIndex];

    questionHeading.textContent = mainQuestion.question;
    homeWindow.classList.add("hidden");
    answerWindow.classList.remove("hidden");

    for (let i = 0; i < choiceBoxArray.length; i++){

      let option = choiceBoxArray[i]

      option.classList.add("option-background")
      option.classList.remove("correct-answer")

      let btn = choiceBoxArray[i];
      let answer = questionArray[questionIndex].answers[i];
      
      btn.textContent = answer.option;

      btn.onclick = function() {
        correctAnswer(btn, i)
      }
    }
  }
}

function increamentScore() {
  correctScore++
}

function finishQuiz() {
  if (questionIndex = 4) {
    console.log("test")
    let option = choiceBoxArray[i]
    option.classList.remove("options-container")
    score.textContent = `congratulations you finished the quiz. Your score was ${correctScore}`
  }
}

function correctAnswer(btn, i) {
  let correctQuestionAnswer = questionArray[questionIndex].answers[i].correct;
  let option = choiceBoxArray[i]
  choiceBoxArray.forEach(option => {
    option.style.pointerEvents = "none";
  });
  
  if (correctQuestionAnswer){
    option.classList.remove("option-background")
    option.classList.add("correct-answer")
    increamentScore();
    score.textContent = `Correct answers: ${correctScore}/5`
  } else {
    option.classList.remove("option-background")
    option.classList.add("incorrect-answer")
  }

  setTimeout(() => {
    questionIndex++
    newQuestion();
  }, 2000)
}