// button countdown timer//
document.addEventListener('DOMContentLoaded',() => {
    const timeLeftDisplay = document.querySelector('#time-left')
    const startBtn = document.querySelector('#start-button')
    let timeLeft = 60
//function that counts down the time//
    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ){
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    } //Action that needs to be activated for the countdown to begin//
    startBtn.addEventListener('click', countDown)
})


var  userAnswers = [];
var answered = 0;
var questions = [question1, question2, question3, question4,question5]
var answers =[q1a,q1b,q1c,q1d,q2a,q2b,q2c,q2d,q3a,q3b,q3c,q3d,q4a,q4b,q4c,q4d,q5a,q5b,q5c,q5d,];

var submitAnswer = function(){
    console.log('submitted answer!');
};
var questionCount = answered.length;
var correct = 0;
var incorrect = 0;
for (var i = 0; i < questionCount; i++) {
    if (userAnswers [i] == answered[i])
    correct++;
    else
    incorrect++;
}




