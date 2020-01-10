// name DOM variables 

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
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
        
        if(secondsLeft < 1) {
            clearInterval(timerInterval);
            console.log("time ended")
            // TODO: call game over function
        }
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left."
    }, 1000)
}

// TODO: function sendMessage() {
  // TODO: Show score and game over
//}
// create a function to display questions one at a time 
function displayQuestion (){
// clear out qbox
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
      })
      
}
// create a function that will check the answr to see if it is correct or incorrect
function checkAnswer(event){
    //console.log(event.target.textContent)
    if(questions[index].answer === event.target.textContent){
        score++;
        alert("Correct!")
    var scoreBox= document.getElementById("scoreBox");
    console.log 
    scoreBox.innerHTML= "Score: " + score;
        
    } else {
        //aka:secondsLeft = secondsLeft - 15;
        secondsLeft -= 15;
        alert("Wrong. -15 seconds")
    }
    index++
    //if else check if next question is there, else 
    // function gameover displaying score, stop timer
    displayQuestion()
}
// TODO: function storeScores() {
//   var highScore = localStorage.getItem("score");

//   if (score === null) {
//     return;
//   }

// }
//I DONT THINK THIS WORKS..
document.getElementById("start").addEventListener("click", gameStart)

//Allow user to "View Highscore" & "Time" value set at 0
// Make a timer that starts at 75 minutes and goes down to 0 
// For correct answers increase the score by 1
// For any incorrect answers notify player and subtract 15 seconds 
// At the end of the game, display final score 
// prompt user to input their initials 
// store the scores and initials in localStorage 