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
  } else if (optionChoice === optionsArray[1]) {
    questionArray = bossingQuestions;
  } else if (optionChoice === optionsArray[2]) {
    questionArray = skillingQuestions;
  } else if (optionChoice === optionsArray[3]) {
    questionArray = itemsQuestions;
  }

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

  if (questionIndex < questionArray.length) {
    let newQ = questionArray[questionIndex];
    questionHeading.textContent = newQ.question;
  }

  let mainQuestion = questionArray[questionIndex];

  questionHeading.textContent = mainQuestion.question;
  homeWindow.classList.add("hidden");
  answerWindow.classList.remove("hidden");

  for (let i = 0; i < choiceBoxArray.length; i++){
    let btn = choiceBoxArray[i];
    let answer = questionArray[questionIndex].answers[i];
    
    btn.textContent = answer.option;

    btn.onclick = function() {
      correctAnswer(btn, i)
    }
  }
}

function increamentScore() {
  score.classList.remove("hidden")
  correctScore++
  score.textContent = `Correct answers: ${correctScore}`
}

function correctAnswer(btn, i) {
  for (let i = 0; i < choiceBoxArray.length; i++) {

    let correctQuestionAnswer = questionArray[questionIndex].answers[i].correct;
    let option = choiceBoxArray[i]

    choiceBoxArray.forEach(option => {
      option.style.pointerEvents = "none";
    });
    
    if (correctQuestionAnswer){
      option.classList.remove("option-background")
      option.classList.add("correct-answer")
      increamentScore();
    } else {
      option.classList.remove("option-background")
      option.classList.add("incorrect-answer")
    }
    console.log(correctScore)

    setTimeout(() => {
      questionIndex++
      newQuestion();
    }, 2000)
  }
}


// function showGeneralKnowledgeQuestion() {
//   questionIndex = 0;
//   correctScore = 0
//   if (optionChoice === optionsArray[0]) {
//     let mainQuestion = questionArray[questionIndex];

//     questionHeading.textContent = mainQuestion.question;
//     // homeWindow.classList.add("hidden");
//     // answerWindow.classList.remove("hidden");
    
//     for (let i = 0; i < choiceBoxArray.length; i++) {
//       let correctQuestionAnswer = mainQuestion.answers[i].correct;
//       choiceBoxArray[i].textContent = mainQuestion.answers[i].option;

//       choiceBoxArray[i].addEventListener("click", function() {
//       correctAnswer(this, i, generalKnowledgeQuestions)
//     })
//     }
//   }
//   newQuestion(generalKnowledgeQuestions)
// }

// function showBossingQuestion(optionChoice) {
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
// };

// function showSkillingQuestion(optionChoice) {
//   console.log("skilling")
// };

// function showItemsQuestion(optionChoice) {
//   console.log("items")
// };