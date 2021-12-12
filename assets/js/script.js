var startButton = document.querySelector("start-button");
var end = document.querySelector("end");
var finalScore = document.querySelector("final-score");
var timeEl = document.querySelector(".time");
var main = document.querySelector("main");

// var answers = {
    // questionOne = question1
    // questionTwo = question2
    // questionThree = question3
    // questionFour = question4
// }
var secondsLeft = 60;

startButton.addEventListener("click", function() {
    
}));

function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

}, 1000);
}

function startQuestions() {
    var questions = document.querySelector("questions");
    questions.textContent = questionArray[i];
    for (var i = 0; questionArray.length; i++){
        
    }
}