// selectors
var startButton = document.querySelector("#start-button");
var finalScore = document.querySelector("#final-score");
var timeEl = document.querySelector("#time");
var title = document.querySelector("#title");
var yourScore = document.querySelector("#your-score");
var questionsContainer = document.querySelector("#questions-container");
var questionChoices = document.querySelector("#question-choices");
var submitBtn = document.querySelector("#submit");

// variables
var index = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval;

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
    question: "Which of the following is not one of Santa's reindeer?",
    choices: ["Dasher", "Dixen", "Comet", "Blitzen"],
    answer: "Dixen",
  },
];

function renderQuestions() {
  title.hidden = true;
  questionsContainer.hidden = false;

  var activeQuestion = questionArray[index];
  var questionTitle = document.querySelector("#question-title");
  questionTitle.innerHTML = activeQuestion.question;

  questionChoices.innerHTML = "";

  activeQuestion.choices.forEach(function (choice) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.style.width = '400px';
    choiceBtn.style.height = '50px';
    choiceBtn.style.background = 'white';
    choiceBtn.style.color = 'red';
    choiceBtn.style.fontSize = '15px';
    choiceBtn.style.display = 'block';
    choiceBtn.style.marginTop = '20px';
  
    
    

    choiceBtn.textContent = choice;
    questionChoices.appendChild(choiceBtn);

    choiceBtn.onclick = checkAnswer;
  });
}

function checkAnswer() {
  if (this.value !== questionArray[index].answer) {
    secondsLeft -= 10;
  } else {
    score++;
  }

  index++;

  if (index === questionArray.length) {
    quizOver();
  } else {
    renderQuestions();
  }
}

function quizOver() {
  clearInterval(timerInterval);
  questionsContainer.hidden = true;
  finalScore.hidden = false;

  yourScore.textContent = score;
}

function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeEl.innerHTML = 0;
      quizOver();
    }
  }, 1000);
}

startButton.addEventListener("click", function (event) {
  setTime();
  renderQuestions();
});

submitBtn.addEventListener("click", function () {
  var initialsEl = document.querySelector("#initials");
  var initials = initialsEl.value;
  
  if (initials === "") {
    window.alert("Please type your initials");
  } else {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
        score,
        initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    window.location.href = "scores.html"
  }



  
});
