var timer = 10
var points = 150
var speed = 250
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
var currentPlayer = null

//Being Game Function 
$("#StartButton").click(function(){
    backgroundSong.play()
    console.log("Starting game...")
    // $("#IntroScreen").hide();
    $("#gameBoard").show();
    startTimer($timer)
    createRubies()
    for(var i = 0; i < $('.ruby').length; i ++) {
        animateRuby($('.ruby').eq(i))
    }
    createSkulls()
    for(var i = 0; i < $('.skull').length; i ++) {
        animateSkull($('.skull').eq(i))
    }
});

function clearBoard() {
    $gameBoard.html('')
}
function createRubies() {
    for (var i = 0; i < 10; i++) {
        $gameBoard.append('<div class="ruby" id="ruby' + i + '"><img class="ruby-image" src="New Piskel (1).gif"></div>')
    }
}

// Animate Rubies
function animateRuby(ruby) {
    setInterval(function(){
        ruby.animate({top: Math.floor(Math.random()*height)}, 4000)
    }, speed)
}



function createSkulls() {
    for (var i = 0; i < 10; i++) {
        $gameBoard.append('<div class="skull" id="skull' + i + '"><img class="skull-image" src="74bc0f1e-e062-11e7-a535-67884cb02f4b.gif"></div>')
    }
}

// Animate Skulls
function animateSkull(skull) {
    setInterval(function(){
        skull.animate({top: Math.floor(Math.random()*height)}, 4000)
    }, speed)
}





function setCurrentPlayer() {
    if(currentPlayer == null || currentPlayer == 'player2') {
        currentPlayer = 'player1'

    } else if (currentPlayer == 'player1'){
        currentPlayer = 'player2'
    }
}

function clearSkulls() {
    $('.skull').remove()
}

setCurrentPlayer()

function startTimer(display) {
    console.log("Current Player:", currentPlayer)
    timerInterval = setInterval(function(){
        if (timer <= 0) {
            clearInterval(timerInterval)
            clearBoard()
            backgroundSong.pause()
            console.log("Game over...")
            // make sure we assign the score to the right player:
            if (currentPlayer == 'player1') {
                player1Score = score
                console.log(currentPlayer, player1Score)

            } else if (currentPlayer == 'player2') {
                player2Score = score
                console.log(currentPlayer, player2Score)
                alert(currentPlayer + ': ' + score + ' points')     
            }

            setCurrentPlayer()
            timer = 10
            score = 0
            $("#score").text( score + " points")
            if (player1Score !== null && player2Score !== null) {
                checkWinner()                            
            }

        }
        else {
            console.log(timer, display)
            timer -= 1
            display.text(timer + ' seconds')            
        }
    }
    , 1000)
}


function checkWinner() {
    if (player1Score > player2Score) {
        alert('player 1 wins')
    } else if (player2Score > player1Score) {
        alert('player 2 wins')
    } else if (player1Score == player2Score) {
        alert('its a tie')
    }
}



    
//  $('.ruby').on('click', function() {
//      console.log("You got a ruby.")
//      $(this).hide()
//      score = score + 150
//      console.log("The score is now " + score)
//      $("#score").text( score + " points")
// })

//event delegation
$('#gameBoard').on('click', '.ruby', function() {
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

// function checkWinner() {
//     if (player1Score > player2Score) {
//         alert('player 1 wins')
//     } else if (player2Score > player1Score) {
//         alert('player 2 wins')
//     } else if (player1Score == player2Score) {
//         alert('its a tie')
//     }
// }



  


