// First we get all the pieces on the board and cache them.
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var scorecard = document.getElementById("scorecard");
var playerxscore = document.getElementById("playerxscore");
var playeroscore = document.getElementById("playeroscore");

var winners = document.getElementById("winner");
var replayButton = document.getElementById("button");

var game = {
    "playerX": "X",
    "playerO": "O",
    "boardplaces": [one, two, three, four, five, six, seven, eight, nine],
    "currentPlayer": "X",
    "moves": 0,
    "playerXcount": 0,
    "playerOcount": 0
};

function setCurrentPlayer(current) {
    game.currentPlayer = current;
}

function play(piece) {
    if (game.currentPlayer == game.playerX) {
        piece.innerHTML = game.playerX;
        trackGameStatus();
        setCurrentPlayer(game.playerO);
    } else if (game.currentPlayer == game.playerO) {
        piece.innerHTML = game.playerO;
        trackGameStatus();
        setCurrentPlayer(game.playerX);
    }
    game.moves++;
    draw();
}

function trackGameStatus() {
    var playerTracker;

    if (game.currentPlayer == 'X') {
        playerTracker = game.playerX;
    } else if (game.currentPlayer == 'O') {
        playerTracker = game.playerO;
    }

    switch (true) {
        case one.innerHTML === playerTracker && two.innerHTML === playerTracker && three.innerHTML === playerTracker:
            winner(one, two, three);
            break;
        case four.innerHTML === playerTracker && five.innerHTML === playerTracker && six.innerHTML === playerTracker:
            winner(four, five, six);
            break;
        case seven.innerHTML === playerTracker && eight.innerHTML === playerTracker && nine.innerHTML === playerTracker:
            winner(seven, eight, nine);
            break;
        case one.innerHTML === playerTracker && four.innerHTML === playerTracker && seven.innerHTML === playerTracker:
            winner(one, four, seven);
            break;
        case two.innerHTML === playerTracker && five.innerHTML === playerTracker && eight.innerHTML === playerTracker:
            winner(two, five, eight);
            break;
        case three.innerHTML === playerTracker && six.innerHTML === playerTracker && nine.innerHTML === playerTracker:
            winner(three, six, nine);
            break;
        case one.innerHTML === playerTracker && five.innerHTML === playerTracker && nine.innerHTML === playerTracker:
            winner(one, five, nine);
            break;
        case three.innerHTML === playerTracker && five.innerHTML === playerTracker && seven.innerHTML === playerTracker:
            winner(three, five, seven);
            break;
        default:
            draw();
    }
};


function draw() {
    if (game.moves === 9) {
        setTimeout(clear, 2500);
    }
}

function scoreCard() {
    if (game.currentPlayer == "X") {
        game.playerXcount++;
        playerxscore.innerHTML = "Player X :- " + game.playerXcount;
    } else if (game.currentPlayer == "O") {
        game.playerOcount++;
        playeroscore.innerHTML = "Player O :- " + game.playerOcount;
    }
}

function winner(a, b, c) {
    winners.innerHTML = "The winner is Player " + game.currentPlayer;
    setTimeout(clear, 2500);
    setTimeout(clearWinner, 3000)

    scoreCard();
}

function clearWinner() {
    winners.innerHTML = "";
}
// Here we set the function of the reply button to reset the game when players are done.


function clear() {
    for (var i = 0; i < game.boardplaces.length; i++) {
        game.boardplaces[i].innerHTML = "";
        game.moves = 0;
    }
};

replayButton.addEventListener("click", function () {
    for (var i = 0; i < game.boardplaces.length; i++) {
        game.boardplaces[i].innerHTML = "";
        game.moves = 0;
        game.playerOcount = 0;
        game.playerXcount = 0;
        playerxscore.innerHTML = "Player X :- " + game.playerXcount;
        playeroscore.innerHTML = "Player O :- " + game.playerOcount;
    }
});