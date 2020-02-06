// TODO: 
// Ask the user for their initials 
// Store the score and the user's initials in the local storage 
// localStorage.setItem ("score"); 
// TODO: Go back button bring you back to landing page/resets the game

// document.getElementById ("result").innerHTMl = localStorage.getItem("score")
// Be able to retrieve the highscores when the Highscore button is clicked 

// name DOM variables 

var timeEl = document.querySelector(".time");
var secondsLeft = 30;
var index = 0;
var score = 0;
var timerInterval;
var scoreBox = document.getElementById (scoreBox); 

// Create a function that starts game 
function gameStart(){
// After the game starts, so will the timer, and the question display 
    setTime();
        displayQuestion(); 
}
// create a function that will take the timer that will decrement by 1 second 
function setTime() {
    timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left."
        if(secondsLeft < 1) { 
            clearInterval(timerInterval);
            secondsLeft=0;
            
        }
    }, 1000)
}
// create a function to display questions one at a time 
function displayQuestion (){
            if(!questions[index]) {
                displayGameOver()
        
            } else {
        
        var qBox = document.querySelector("#questionBox");
        qBox.textContent = "";
        var title = questions[index].title;

        var titleEl = document.createElement("h2");
        titleEl.textContent = title;
        qBox.appendChild(titleEl);

        var choices = questions[index].choices;
        choices.forEach(function(choice){
            var button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", checkAnswer)
            qBox.appendChild(button);

        });
        }
        }   
// create a function that will check the answer to see if it is correct or incorrect
function checkAnswer(event){
    var answerBox= document.getElementById("answerBox");
    if(questions[index].answer === event.target.textContent){
        answerBox.innerHTML= "Correct"; 
        
// If the question is wrong, implement a -2 second penalty
    } else {
        //aka:secondsLeft = secondsLeft - 2;
        secondsLeft -= 2;
        answerBox.innerHTML= "Incorrect";
    }
    displayQuestion()

};
        

function storeScores() {
  var highScore = localStorage.setItem("score");

  if (score === null) {
    return;
  }

}
//I DONT THINK THIS WORKS..
document.getElementById("start").addEventListener("click", gameStart)

//TODO:Allow user to "View Highscore" & "Time" value set at 0
// Have end of game score = to the # of seconds left 

function displayGameOver() {
    alert ("Game Over");
    clearInterval(timerInterval);
    score = secondsLeft;
    document.getElementById("scoreBox").textContent("Score: "+ score);
    console.log (scoreBox);
};
      