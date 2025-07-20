// general variables

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

/**
 * this event listener waits for the dom to load before starting the quiz
*/

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

/**
 * Once the 'rules' button is pressed in the navigation bar, the rules are shown and everything else is hidden
*/
function displayRules() {
  homeWindow.classList.add("hidden");
  answerWindow.classList.add("hidden");
  form.classList.add("hidden");
  rulesTab.classList.remove("hidden");
}

/**
 * Once the 'contact us' button is pressed in the navigation bar, the form are shown and everything else is hidden
*/

function displayForm() {
  homeWindow.classList.add("hidden");
  answerWindow.classList.add("hidden");
  rulesTab.classList.add("hidden");
  form.classList.remove("hidden");
}

/**
 * this stops the page from refreshing after the submit button is pressed to allow the submit message to be shown
*/

function stopPageRefresh(event){
  event.preventDefault()
  formSuccess.textContent = "Your form submission was a success";
}

/**
 * This displays a good luck message once a topic is selected
*/

function goodLuckMessage(optionChoice) {
  for (let option of optionsArray) {
    if (optionChoice === option) {
      heading.textContent = `Good Luck! You chose ${optionChoice.textContent}`;
    }
  }
}

/**
 * This displays a topic once user has selected one
*/

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

/**
 * This hides the homepage once a topic or navigation element is selected 
*/

function hideHomepage() {
  optionsContainer.classList.remove("options-container");
  optionsContainer.classList.add("hidden");
}

/**
 * This displays a new question once the last one is answered
*/

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

/**
 * This increments the score once the selected answer is correct
*/

function incrementScore() {
  correctScore++
}

/**
 * This displays a screen after the quiz is completed to congratulate the user and display their final score
*/

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

/**
 * This restarts the quiz once the user uses the reset button at the end of the quiz
*/

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

/**
 * This detects if the users answer is correct 
*/

function correctAnswer(btn, i) {
  let correctQuestionAnswer = questionArray[questionIndex].answers[i].correct;
  let option = choiceBoxArray[i];
  choiceBoxArray.forEach(option => {
    option.style.pointerEvents = "none";
  });
  
  if (correctQuestionAnswer){
    option.classList.remove("option-background");
    option.classList.add("correct-answer");
    incrementScore();
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

// This function adds an automatic email submission to the form to allow users to give feedback on the quiz using Emailjs


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