let optionsContainer = document.getElementById("options-container")
let options = document.getElementsByClassName("option")
let optionsArray = Array.from(options)
let score = document.getElementById("score")
let heading = document.querySelector("#heading h2")

document.addEventListener("DOMContentLoaded", function() {

  for (let option of options) {
    option.addEventListener("click", function() {
      hideHomepage();
      goodLuckMessage(option);
      setTimeout(() => {
        // heading.textContent = "";
      }, 2000);
      showGeneralKnowledgeQuestion(option);
    })
  }
});


function goodLuckMessage(optionChoice) {
  if (optionChoice === optionsArray[0]) {
    heading.textContent = "Good Luck! You chose General Knowledge"
  }
}

function selectTopic() {

}
function hideHomepage() {
  optionsContainer.classList.remove("options-container")
  optionsContainer.classList.add("hidden")
  score.classList.add("hidden")
}
function increamentScore() {}
function correctAnswer() {}


function showGeneralKnowledgeQuestion(optionChoice) {
  setTimeout(() => {
    console.log(generalKnowledgeQuestions[0].question); 
    console.log("hello")
    if (optionChoice === optionsArray[0]) {
      let question = generalKnowledgeQuestions[0].question;
      heading.textContent = question;
    }
  }, 2000);
}