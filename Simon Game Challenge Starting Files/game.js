const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let gameStart = false;
let level = 0; 

$(document).keydown(function(event) {
    if(event.key == 'a' && !gameStart) {
        gameStart = true;
        nextSequence();
    }
})

let buttons = $(".btn");
buttons.each(function(button) {
    $(this).click(function() {
        let userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);
        buttonSelect(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    });
});

function endGame() {
    gamePattern = [];
    userClickedPattern = [];
    gameStart = false;
    level = 0;
    let audio = new Audio("./sounds/wrong.mp3");
    $("body").addClass("game-over");
    audio.play();
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("GAME OVER! Press A to Restart");
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
        console.log("failure");
        console.log("User: " + userClickedPattern);
        console.log("Game: " + gamePattern);
        endGame();
        return;
    }

    if (userClickedPattern.length === gamePattern.length) {
        console.log(userClickedPattern);
        console.log(gamePattern);
        setTimeout(function() {
            nextSequence();
        }, 1000);
        userClickedPattern = [];
    }
}

function changeLevel() {
    $("h1").text("Level " + level);
}

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4); 
    let randomChosenColor = buttonColors[randomNumber];
    level += 1;

    gamePattern.push(randomChosenColor);

    buttonSelect(randomChosenColor);
    changeLevel();
}

function buttonSelect(color) {
    let chosenButton = $("#" + color);
    chosenButton.fadeOut(100).fadeIn(100);
    playSound(color);
}

function playSound(color) {
    let audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();
}
