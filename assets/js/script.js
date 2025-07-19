let optionsContainer = document.getElementById("options-container");
let homeWindow = document.getElementById("home-window");
let answerWindow = document.getElementById("answer-window");
let questionHeading = document.querySelector("#question-heading h2");
let removeBtn = document.getElementById("answer-container");
let resetBtn = document.getElementById("reset-btn");
let resetBtnContainer = document.getElementById("reset-btn-container");

// form
let openForm = document.getElementById("open-form")
let form = document.getElementById("form")
let formSuccess = document.getElementById("form-success")
let sumbitBtn = document.getElementById("sumbit-btn")

// rules tab
let openRules = document.getElementById("open-rules")
let rulesTab = document.getElementById("rules")

// choice of answer for questions
let choice = document.getElementsByClassName("answer");
let choiceBoxArray = Array.from(choice);

// options when chosing a topic 
let options = document.getElementsByClassName("option");
let optionsArray = Array.from(options);

// score and heading elements
let score = document.getElementById("score");
let correctScore = 0;
let heading = document.querySelector("#heading h2");

// variables from questionListjs

let questionIndex = 0;
let questionArray = [];


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
    });
  }
  resetBtn.addEventListener("click", restartQuiz);
  openRules.addEventListener("click", displayRules);
  openForm.addEventListener("click",  displayForm);
  form.addEventListener("submit",  stopPageRefresh);
  form.addEventListener("submit",  sendEmail);
});

function displayRules() {
  homeWindow.classList.add("hidden");
  answerWindow.classList.add("hidden");
  form.classList.add("hidden");
  rulesTab.classList.remove("hidden");
}

function displayForm() {
  homeWindow.classList.add("hidden");
  answerWindow.classList.add("hidden");
  rulesTab.classList.add("hidden");
  form.classList.remove("hidden");
}

function stopPageRefresh(event){
  event.preventDefault()
  formSuccess.textContent = "Your form submission was a success";
}


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

  score.classList.remove("hidden");
  score.textContent = `Correct answers: ${correctScore}/5`;
  // selects question once one of the above is met 
  newQuestion();
}

function hideHomepage() {
  optionsContainer.classList.remove("options-container");
  optionsContainer.classList.add("hidden");
}

function newQuestion() {
  choiceBoxArray.forEach(option => {
    option.style.pointerEvents = "auto";
  });

  removeBtn.classList.add("options-container");
  removeBtn.classList.remove("hidden");
  resetBtnContainer.classList.add("hidden");

  if (questionIndex < questionArray.length) {
    let newQ = questionArray[questionIndex];
    questionHeading.textContent = newQ.question;

    let mainQuestion = questionArray[questionIndex];

    questionHeading.textContent = mainQuestion.question;
    homeWindow.classList.add("hidden");
    answerWindow.classList.remove("hidden");

    for (let i = 0; i < choiceBoxArray.length; i++){

      let option = choiceBoxArray[i];

      option.classList.add("option-background");
      option.classList.remove("correct-answer");

      let btn = choiceBoxArray[i];
      let answer = questionArray[questionIndex].answers[i];
      
      btn.textContent = answer.option;

      btn.onclick = function() {
        correctAnswer(btn, i)
      }
    }

  }   
  finishQuiz()
}

function increamentScore() {
  correctScore++
}

function finishQuiz(i) {
  if (questionIndex === 5) {
    let option = choiceBoxArray[i];
    removeBtn.classList.remove("options-container");
    removeBtn.classList.add("hidden");
    resetBtnContainer.classList.remove("hidden");
    questionHeading.textContent = 'Would you like to select a new topic?';
    score.textContent = `congratulations you finished the quiz. Your score was ${correctScore}.`;
  }
}

function restartQuiz() {
  correctScore = 0;
  questionIndex = 0;

  optionChoice = false;

  homeWindow.classList.remove("hidden");
  answerWindow.classList.add("hidden");
  optionsContainer.classList.add("options-container");
  optionsContainer.classList.remove("hidden");
  heading.textContent = 'Please select the topic you would like to do!';

}

function correctAnswer(btn, i) {
  let correctQuestionAnswer = questionArray[questionIndex].answers[i].correct;
  let option = choiceBoxArray[i];
  choiceBoxArray.forEach(option => {
    option.style.pointerEvents = "none";
  });
  
  if (correctQuestionAnswer){
    option.classList.remove("option-background");
    option.classList.add("correct-answer");
    increamentScore();
    score.textContent = `Correct answers: ${correctScore}/5`;
  } else {
    option.classList.remove("option-background");
    option.classList.add("incorrect-answer");
  }

  setTimeout(() => {
    questionIndex++;
    newQuestion();
  }, 2000);
}


emailjs.init("0AAPMhtZXrBnJhuK7");

function sendEmail() {

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let textArea = document.getElementById("text-area").value

  let parameters = {
    name: name, 
    email: email, 
    textArea: textArea
  };

  emailjs.send("service_5tiv1bh","template_oeeanua", parameters);

}  