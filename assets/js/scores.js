function getScores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    highscores.sort(function(x,y){
        return y.score - x.score;
    })

    highscores.forEach(person => {
        var liTag = document.createElement("li");
        liTag.textContent = person.initials + " - " + person.score;
        var players = document.querySelector("#players");
        players.appendChild(liTag);
    });

}

function clear() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

document.querySelector("#clear-scores").addEventListener("click", clear)

getScores();






