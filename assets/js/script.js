document.addEventListener("DOMContentLoaded", function() {

  for (let option of options) {
    option.addEventListener("click", function() {
      selectTopic();
      goodLuckMessage();
    })
  }
});

let optionsContainer = document.getElementById("options-container")
let options = document.getElementsByClassName("option")
let score = document.getElementById("score")
let heading = document.getElementById("heading")

function goodLuckMessage() {
  // if (option === )
}
function selectTopic() {
  optionsContainer.classList.remove("options-container")
  optionsContainer.classList.add("hidden")
  score.classList.add("hidden")
}
function hideHomepage() {}
function increamentScore() {}
function correctAnswer() {}