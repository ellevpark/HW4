var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var index = 0;
var score = 0;
var timerInterval;


function gameStart(){
    setTime();
    displayQuestion();
}

function setTime() {
    timerInterval = setInterval(function(){
        
        if(secondsLeft < 1) {
            clearInterval(timerInterval);
            console.log("time ended")
            //call game over function
        }

        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left."
    }, 1000)
}



function displayQuestion (){

    //clear out qbox
    var title = questions[index].title;
    console.log(title);
    var qBox = document.querySelector("#questionBox");

    var titleEl = document.createElement("h2");
    titleEl.textContent = title;
    console.log(titleEl);
    qBox.appendChild(titleEl);

    var choices = questions[index].choices;
    choices.forEach(function(choice){
        var button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", checkAnswer)
        qBox.appendChild(button);
    })
}

function checkAnswer(event){
    //console.log(event.target.textContent)
    if(questions[index].answer === event.target.textContent){
        score++;
    } else {
        //secondsLeft = secondsLeft - 15;
        secondsLeft -= 15;
    }
    index++
    //if else check if next question is there, else 
    // function gameover displaying score, stop timer
    displayQuestion()
}

document.getElementById("start").addEventListener("click", gameStart)

//Allow user to "View Highscore" & "Time" value set at 0
// Make a timer that starts at 75 minutes and goes down to 0 
// For correct answers increase the score by 1
// For any incorrect answers notify player and subtract 15 seconds 
// At the end of the game, display final score 
// prompt user to input their initials 
// store the scores and initials in localStorage 