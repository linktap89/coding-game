//Global Variables//

var timerElement = document.querySelector(".timer-out");
var submiteButton = document.querySelector(".button-submit");
var buttonClear = document.querySelector (".button-submit");
var main = document.querySelector("main");
console.log (main)

var questionSelction = document.querySelector(".questions");
var questionsElement = document.querySelector(".questions-text");
var choicesElement = document.querySelector(".choices-buttons");
var highScoreElements = document.querySelector(".high-scores");
var highScoresList = document.querySelector(".list-high-scores");

var userInput = document.querySelector(".user-text");
var userForm = document.querySelector(".user-form");

//Variables//
var currentQuestion = 1
var questLimit;
var questIndex;
var buttons;
var UserName;
var correct;

///Questions///

var users = [];
var scores = [];

const questions = [
  {
    question: 'Which of these is not a primitive data type:',
    choices: ['1.strings', '2.booleans', '3.alerts', '4.object'],
    correctAnswer: "object"
  },
  {
    question: 'Which company developed JavaScript?',
    choices: ['1.Netscape', '2.Bell Labs', '3.Sun Micro Systems', '4.IBM'],
    correctAnswer:"Netscape"
  },
  {
    question: 'What method do you use to check and verify a stack is empty ?',
    choices: [
      '1.isEmpty',
      '2.checkstackstatus',
      '3.checkstackvalue',
      '4.isEmpty()',
      correctAnswer:"isEmpty()"
    ],
  },
  {
    question: 'What function sets or returns the HTML content of an element?',
    choices: ['1.insideHTML', '2.InnerHTML', '3..innerHTML', '4.innerhtml()'],
    correctAnswer:"innerHTML"
  },
  {
    question: 'How long did it take to build Javascipt',
    choices: ['1.3 years', '2.18 weeks', '3..10 days', '4.242 hrs'],
    correctAnswer:".10 days"
  },
];

//Question Builder//
function questionBuilder(){
  const template = `
  <section id ="question1" class="active">
  <div class="copy">Question ${currentQuestion+1}</div>
  <!--Answer is 4-->
  <div class="copy">${questions[currentQuestion].question}</div>
  <button class="questionsbtn">${questions[currentQuestion].choices[0]}</button>
  <button class="questionsbtn">${questions[currentQuestion].choices[1]}</button>
  <button class="questionsbtn">${questions[currentQuestion].choices[2]}</button>
  <button class="questionsbtn">${questions[currentQuestion].choices[3]}</button>
  <div score class ="copy"></div>
</section>
  `
main.innerHTML += template
}
questionBuilder()

// //Correct Check Answer//
// function checkAnswer () {
//   if (this.value == currentQuestion.includes.choices.correctAnswer){
//     correct++;
//   }
//   else{
//     timeLeft -=10;
//   }
// }

  



// Button countdown timer//
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
