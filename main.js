var score = 0;



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


/*******Question Buttons******************/

/// eventListner button///
const questionbtns = document.querySelectorAll (".questionsbtn")
/// For each loop ///
questionbtns.forEach(function (questionbtn){
questionbtn.addEventListener("click",function (event){
  console.log(event.target)
  var currentbtn = event.target
  if (currentbtn.className.includes("correctAnswer")){
    console.log("Correct Answer")
    question2.classList.toggle('active')
    question1.classList.remove('active')
  }
  else{
    console.log("Wrong Answer!")
    timeLeft -= 10
  }
})
 })

 