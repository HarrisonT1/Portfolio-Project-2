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

const question = generalKnowledgeQuestions[0].question;
const answers = generalKnowledgeQuestions[0].answers;

const selectedTopic = [
  showGeneralKnowledgeQuestion,
  showBossingQuestion,
  showSkillingQuestion,
  showItemsQuestion,
]

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
  for (let option of optionsArray) {
    if (optionChoice === option) {
      heading.textContent = `Good Luck! You chose ${optionChoice.textContent}`;
    }
  }
  }

function showTopic(optionChoice) {
  for (let i = 0; i < optionsArray.length; i++) {
    if (optionChoice === optionsArray[i]) {
      selectedTopic[i](optionChoice);
      break;
    }
  }
  correctScore = 0;
  score.classList.remove("hidden")
}

function hideHomepage() {
  optionsContainer.classList.remove("options-container")
  optionsContainer.classList.add("hidden")
}
function increamentScore() {
  if (correctAnswer) {
    correctScore++
    score.textContent = `Correct answers: ${correctScore}`
  }
}

function correctAnswer(choice, index) {
  for (let i = 0; i < choiceBoxArray.length; i++) {

    let correctQuestionAnswer = generalKnowledgeQuestions[0].answers[index].correct;

    choiceBoxArray.forEach(option => {
      option.style.pointerEvents = "none";
    });
    
    if (correctQuestionAnswer){
      choice.classList.remove("option-background")
      choice.classList.add("correct-answer")
      increamentScore()
    } else {
      choice.classList.remove("option-background")
      choice.classList.add("incorrect-answer")
    }
    console.log(correctScore)
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

function showBossingQuestion(optionChoice) {
  //   if (optionChoice === optionsArray[2]) {
  //   questionHeading.textContent = question;
  //   homeWindow.classList.add("hidden")
  //   answerWindow.classList.remove("hidden")
    
  //   for (let i = 0; i < choiceBoxArray.length; i++) {
  //     let correctQuestionAnswer = bossingQuestions[i].answers[i].correct;
  //     choiceBoxArray[i].textContent = answers[i].option;

  //     choiceBoxArray[i].addEventListener("click", function() {
  //     correctAnswer(this, i)
  //   })
  //   }
  // }
};

function showSkillingQuestion(optionChoice) {
  console.log("skilling")
};

function showItemsQuestion(optionChoice) {
  console.log("items")
};