var startButton = document.querySelector("#start-button");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector("#time");
var title = document.querySelector("#title");
// var yourScore = document.querySelector("#your-score");
// var bestScore = document.querySelector("#best-score");
var questionsContainer = document.querySelector("#questions-container")
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

function lastPage() {
    var highScore = document.querySelector()
}


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

// var yourScore = document.querySelector("your-score");
// yourScore.textContent = //whatever variable i define that calculates the score

}



function startQuestions() {
    title.hidden = true;
    questionsContainer.hidden = false;

    // var questionTitle = document.querySelector("#question-title");
    // var activeIndex = questionArray[0];
    // questionTitle.textContent = activeIndex;


    // var choice = document.createElement("type", "button");
    // choice.textContent = activeIndex;
    // questionsContainer.appendChild("choice");
    
    // var choices = Object.entries(questionArray)
    // Object.entries(questionArray).forEach
    
    for (var i = 0; i <questionArray.length; i++){
        var choice = document.createElement('type', 'button');
        choice.textContent = questionArray.choices
        questionsContainer.appendChild(choice);
        //need to add event listener?
        // choices.textContent = activeQuestion.choices[i];
        // activeIndex++
        // console.log(questionArray.choices);
    }
}


function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        quizOver();
    } else {
        startQuestions();
    }

}, 1000);
}

startButton.addEventListener("click", function(event) {
    setTime();
   
})




