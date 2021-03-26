// Global variables //
var scoreTracker = 0;
var resetButton = document.querySelector(".resetTestButton");
var questionTracker = 1 

// button countdown timer//
    const timeLeftDisplay = document.querySelector('#time-left')
    // const startBtn = document.querySelector('#start-button')
    let timeLeft = 60
//function that counts down the time//
    function countDown(){
        var setTimer = setInterval(function(){
            if(timeLeft <= 0 ){
                clearInterval(setTimer)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    } //Action that needs to be activated for the countdown to begin//
    // startBtn.addEventListener('click', countDown)
    countDown()


/***********************************************/

// Questions + Answers from local storage//

var testquestions = document.getElementById("question");
var testanswers = document.getElementById("answer");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedAnswer = document.getElementById("savedAnswer");

function saveLastAnswer() {
    var testResult = {
    testquestions: questions.value,
    testanswers: answers.value,
    comment: comment.value.trim()
};
// setItem to store oject in storage and JSON.stringfy to convert it as a string.//
localStorage.setItem("testResult",JSON.stringify(testResult));
}

function renderLastAnswer () {
    //Use JSON.parse to covert text to Javascript object
    var lastAnswer = JSON.parse(localStorage.getItem("testResult"));
    //Check if data returned is correct or in correct//
    if (lastAnswer !== null){
        document.getElementById("savedAnswer"). innerHTML = lastAnswer.answer;
    } else {
        return;
    }
}

/*********************************************/

//Score Calculator//Friday Class//////



//// If Answer is correct////



//// If Answer is incorrect////Firday Class////


/////Timer Runs Out////
function restartTest (){
  resetTestButton.addEventListener("click",function (){
    count = 60;



  })
}
/// eventListner button///
const questionbtns = document.querySelectorAll (".questionsbtn")
/// For each loop ///
questionbtns.forEach(function (questionbtn){
questionbtn.addEventListener("click",function (event){
  console.log(event.target)
  var currentbtn = event.target
  if (currentbtn.className.includes("correctAnswer")){
    console.log("Correct Answer") 
  }
  else{
    console.log("wrong Answer!")
    timeLeft -= 10
  }
  

  



})


})
