var startButton = document.querySelector("#start-button");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector("#time");
var title = document.querySelector("#title");
// var yourScore = document.querySelector("#your-score");
// var bestScore = document.querySelector("#best-score");
var questionsContainer = document.querySelector("#questions-container")
var index = 0;
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

    // choicesEl.innerHTML = "";

    var a = document.querySelector("#0");
    var b = document.querySelector("#1");
    var c = document.querySelector("#2");
    var d = document.querySelector("#3");

for (var i = 0; i< questionArray.choices.length; i++){
a.innerHTML = questionArray.choices[i];
b.innerHTML = questionArray.choices[i];
c.innerHTML = questionArray.choices[i];
d.innerHTML = questionArray.choices[i];
      
      
}


}

function saveScore() {
    var highScore = document.querySelector("#high-score");
    finalScore.hidden = true;
    highScore.hidden = false;
//how to combine the score and the initials???? - into a new array, stringify then parse
}



function quizOver(){
    questionsContainer.hidden= true;
    finalScore.hidden = false;
    
    // var submit = document.querySelector("#submit");

    submit.addEventListener("click", function(){
        var initialsEl = document.querySelector("#initials")
        var initials = initialsEl.value;
        if (initials === "") {
            window.alert("Please type your initials")
        } else {
            //do i need to save the score here since initials was defined within this function?
        saveScore();
        
    } });
    
    }

    

function nextQuestion(){
    if (this.value !== questionArray[index].answer){
        secondsLeft -= 10;
        timeEl.innerHTML = secondsLeft;
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




