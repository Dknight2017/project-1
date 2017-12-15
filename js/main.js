var timer = 3
var points = 150
var speed = 500
var height = 400
var tommy = $("#tommy")
var winningScore = 1200 
var $gameBoard = $("#gameBoard")
var $platform = $("#platform")
var $timer = $('#timer')
var timerInterval;
var score = 0
var player1Score = null
var player2Score = null
// platform.css( {background: "green"})

//Being Game Function 
$("#StartButton").click(function(){
    backgroundSong.play()
    console.log("Starting game...")
    // $("#IntroScreen").hide();
    $("#gameBoard").show();
    startTimer($timer)
});

$(document).keydown(function(e){
    console.log(e)
    switch(e.which){
        case 37: ///left key arrow
            $("#tommy").finish().animate(
                { left: "-=100px"});
            break;
        case 39: ///right key arrow
            $("#tommy").finish().animate(
                { left: "+=100px"});
            break;
        case 32: ///space key
            $("#tommy").finish().animate(
                { top: "-=100px"});
        break;
        
    }
});
function createRubies() {
    for (var i = 0; i < 10; i++) {
        $gameBoard.append('<div class="ruby" id="ruby' + i + '"><img class="ruby-image" src="New Piskel (1).gif"></div>')
    }
}
createRubies()
// Animate Rubies
function animateRuby(ruby) {
    setInterval(function(){
        ruby.animate({top: Math.floor(Math.random()*height)}, 4000)
    }, speed)
}

for(var i = 0; i < $('.ruby').length; i ++) {
    animateRuby($('.ruby').eq(i))
}
function createSkulls() {
    for (var i=0; i < 10; i++) {
        $gameBoard.append('<div class="skull" id="skull' + i + '"><img src="74bc0f1e-e062-11e7-a535-67884cb02f4b.gif"></div>')
    }
}
createSkulls() 
// Animate Skulls
function animateSkull(skull) {
    setInterval(function(){
        skull.animate({top: Math.floor(Math.random()*height)}, 400)
    }, speed)
}
        
for(var i = 0; i < $('.skull').length; i ++) {
    animateSkull($('.skull').eq(i))
}

function startTimer(display) {
    timerInterval = setInterval(function(){
        if (timer <= 0) {
            clearInterval(timerInterval)
            console.log("Game over...")
            // make sure we assign the score to the right player:
            if(player1Score === null) {
                player1Score = score
            } else {
                player2Score = score
            }

        } else {
            console.log(timer, display)
            timer -= 1
            display.text(timer + ' seconds')
        }
    }, 1000)
};


    
 $('.ruby').on('click', function() {
     console.log("You got a ruby.")
     $(this).hide()
     score = score + 150
     console.log("The score is now " + score)
     $("#score").text( score + " points")
})

$('.skull').on('click', function() {
     console.log("You are hurt.")
     $(this).hide()
     score = score - 100
     console.log("The score is now " + score)
     $("#score").text( score + " points")
})

//background music
var backgroundSong = new Audio("theroomsong.mp3")


// function addScore(score)
     //eventListener()

    /// increase score 

  // remove the ruby that just got clicked...
//   function winGame(){
//       if (points => 1200 && timer <= 3) {
//           console.log("You win")
//           alert("You win the game")
//       } else {
//           console.log("You lose!!!")
//         alert("You lose the game.")
//       }
// end game function win or lose

  


