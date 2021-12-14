var ulEl = document.querySelector('#options');


// var optionsEl = document.querySelector('#options');

var oneQuestion = "How many days are in December?";
var oneChoices = ["28", "29", "30", "31"];
// var oneAnswer = "31",

// var twoQuestion = "How many reindeer does Santa have?",
// var twoChoices = ["six", "eight", "nine", "twelve"]
// var twoAnswer = "nine",

// var threeQuestion = "which of the following is not one of Santa's reindeer?",
// var threeChoices = ["Dasher", "Dixen", "Comet", "Blitzen"],
// var threeAnswer = "Dixen",


function firstQuestion() {
    var questionTitle = document.querySelector("#question-title");
    questionTitle.textContent = oneQuestion;
    for (var i =0; i <oneChoices.length; i++){
         var choice = document.createElement('button')
         var index = oneChoices[i]
        choice.textContent = index;
        ulEl.appendChild(choice);
    }

    
}
    

firstQuestion();