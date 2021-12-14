var startButton = document.querySelector("#start-button");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector("#time");
var title = document.querySelector("#title");
// var yourScore = document.querySelector("#your-score");
// var bestScore = document.querySelector("#best-score");
var questionsContainer = document.querySelector("#questions-container")
var index = 0;
var choicesEl = document.querySelector("#choices");
var critiqueEl = document.querySelector("#critique");
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

function renderQuestions() {
    title.hidden = true;
    questionsContainer.hidden = false;

    var activeQuestion = questionArray[index];
    var questionTitle = document.querySelector("#question-title");
    questionTitle.innerHTML = activeQuestion.question;

    choicesEl.innerHTML = "";

for (var i = 0; i< questionArray.choices.length; i++){
       var choiceBtn = document.createElement("button");
       choiceBtn.setAttribute("class", "pick");
      
}
}

function saveScore() {
    var highScore = document.querySelector("#high-score");
    finalScore.hidden = true;
    highScore.hidden = false;
}


function quizOver(){
    questionsContainer.hidden= true;
    finalScore.hidden = false;
    
    // var submit = document.querySelector("#submit");

    submit.addEventListener("click", function(){
        var initialsEl = document.querySelector("submit")
        var initials = initialsEl.value();
        if (!initials === "") {
            initials.textContent = "Please type your initials"
        } else {
        //store the answer?
        saveScore();
        //how to combine the score and the initials???? - into a new array, stringify then parse
    } });
    
    }

    

function click(){
    if (this.value !== questionArray[index].answer){
        secondsLeft -= 10;
        critiqueEl.innerHTML = "incorrect";
        timeEl.innerHTML = secondsLeft;
} else {
        critiqueEl.innerHTML = "correct";
    }

    if (secondsLeft < 0) {
        secondsLeft = 0;
        timeEl.innerHTML = secondsLeft;
    }

    index ++;
    if (index === questionArray.length){
        quizOver();
    } else {
        renderQuestions();
    }
}


function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        timeEl.innerHTML = 0;
        quizOver();
    } else {
        renderQuestions();
    }

}, 1000);
}

startButton.addEventListener("click", function(event) {
    setTime();
   
})




