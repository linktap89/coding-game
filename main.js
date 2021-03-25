// button countdown timer//
document.addEventListener('DOMContentLoaded',() => {
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
})

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
    if (lastAnswer == true){
        document.getElementById("savedAnswer"). innerHTML = lastAnswer.answer;
    } else {
        return;
    }
}

saveButton.addEventListener("click", function(event){
event.preventDefault();
saveLastAnswer();
renderLastAnswer();
});

//Init function to come//

// var  userAnswers = [];
// var answered = 0;
// var questions = [question1, question2, question3, question4,question5]
// var answers =[q1a,q1b,q1c,q1d,q2a,q2b,q2c,q2d,q3a,q3b,q3c,q3d,q4a,q4b,q4c,q4d,q5a,q5b,q5c,q5d,];

// var submitAnswer = function(){
//     console.log('submitted answer!');
// };
// var questionCount = answered.length;
// var correct = 0;
// var incorrect = 0;
// for (var i = 0; i < questionCount; i++) {
//     if (userAnswers [i] == answered[i])
//     correct++;
//     else
//     incorrect++;
// }




