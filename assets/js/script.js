var startButton = document.querySelector("#start-button");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector("#time");
var title = document.querySelector("#title");
// var yourScore = document.querySelector("#your-score");
// var bestScore = document.querySelector("#best-score");
var questionsContainer = document.querySelector("#questions-container")
var index = 0;
var questionArray = [
    {
        question: "How many days are in December?",
        choices: ["28", "29", "30", "31"],
        answer: "31",
    },
    {
        question: "How many reindeer does Santa have?",
        choices: ["six", "eight", "nine", "twelve"],
        answer: "nine",
    },
    {
        question: "which of the following is not one of Santa's reindeer?",
        choices: ["Dasher", "Dixen", "Comet", "Blitzen"],
        answer: "Dixen",
    },
]



var secondsLeft = 2;


function quizOver(){
questionsContainer.hidden= true;
finalScore.hidden = false

var submit = document.querySelector("submit");
submit.addEventListener("submit", function(){
    var initials = document.querySelector("initials")
    //store score?
    if (!initials === "") {
        initials.textContent = "Please type your initials"
    } else 
    //store the answer?
    lastPage();
});

}



function startQuestions() {
    title.hidden = true;
    questionsContainer.hidden = false;

for (var i = 0; i< questionArray.length; i++){
        var questionTitle = document.querySelector("#question-title");
        var question = questionArray[i];
        questionTitle.innerHTML= question.question;

        var ulEl = document.querySelector("#button");
        var choices = questionArray[i];
        ulEl.innerHTML = choices.choices;
        
        console.log(question);     
        
        checkAnswers()

}
}


function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        se
        quizOver();
    } else {
        startQuestions();
    }

}, 1000);
}

startButton.addEventListener("click", function(event) {
    setTime();
   
})




