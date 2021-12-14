var questionsContainer = document.querySelector("#questions-container")
var questionIndex = 0;
var questionTitle = document.querySelector("#question-title");


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
 questionsContainer.textContent = questionArray


function startQuestions() {
var activeQuestion = questionArray[questionIndex];
questionTitle.textContent = activeQuestion.question;
// questionsContainer.appendChild('questionTitle');

    
    
    console.log(questionTitle);
       // var activeIndex = questionArray[0];
    // questionTitle.textContent = activeIndex;


    // var choice = document.createElement("type", "button");
    // choice.textContent = activeIndex;
    // questionsContainer.appendChild("choice");
    
    // var choices = Object.entries(questionArray)
    // Object.entries(questionArray).forEach
    
    for (var i = 0; i <questionArray.length; i++){
        var choice = document.createElement('button');
        choice.textContent = questionArray.choices
        questionsContainer.appendChild(choice);
        //need to add event listener?
        // choices.textContent = activeQuestion.choices[i];
        // activeIndex++
        // console.log(questionArray.choices);
    }
}
startQuestions();