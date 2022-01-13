

// defines the Event (click), on which the Game starts to run, n = 0 is used to determine rounds
let n = 0;
let playerWins = 0;
let computerWins = 0;
let startGame = function() {
    const button = Array.from(document.querySelectorAll('.button-style'));
    button.forEach(kekW => kekW.addEventListener("click", contain));

};


// the contain function fires, when a button from startGame is clicked. it cant be in a variable
let contain = function(event) {

    // increment function keeps track of the game round. increments +1 each click.
    increment();
    
    // if the game round is 1 to 4, a playRound gets exectuted. If it is 5, playRoudn gets exectuted and overall winner gets alerted.
    if (n < 5) {
        return playRound();
    }
    else if (n === 5) {
        return playRound(), endResult();
    };
};

// +1 for each playerWin. needs to do yellow balken
let incrPlayerWins = function() {
    playerWins++;
    return playerWins;
    
};
// +1 for each computerWin. needs to do yellow balken
let incrComputerWins = function() {
    computerWins++;
    return computerWins;
    
};

// function that alerts if you won, lost or tied. needs to make a new window with a refresh button.
let endResult = function() {
    window.location.href = "index.html";
    if (playerWins > computerWins) {
        return 1
    }
    else if (playerWins < computerWins) {
        return 2
    }
    else {
        return 3
    }
}

let increment = function increment() {
    n++;
    return n;
};
// the playRound function determines a winner between player and computer
let playRound = function() {

    let targetId = event.target.id;
    let random = computerSelect();

    if (targetId === random) {
        return playerImg(targetId), 
            computerImg(random), 
            tieResult(),
            console.log("Tie: " + targetId + " & " + random);
    } 

    else if (targetId === "rock" && random === "scissors" || targetId === "paper" && random === "rock" || 
            targetId === "scissors" && random === "paper") {
        return playerImg(targetId), 
            computerImg(random), 
            winResult(targetId),
            console.log("Win: " + targetId + " & " + random + " = " + targetId);
    }

    else {
        return playerImg(targetId), 
            computerImg(random), 
            loseResult(targetId),
            console.log("Loss: " + targetId + " & " + random + " = " + random);
    }
};

// chooses a hand for the computer randomly
let computerSelect = function() {
    let computerArray = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * computerArray.length);
    return computerArray[randomNumber];
};

// changes the playerImg to match the chosen one
let playerImg = function(a) {

    let playerImage = document.getElementById("player");

    if (playerImage.classList.contains("tie-img") || playerImage.classList.contains("rock-img") || playerImage.classList.contains("paper-img") ||
    playerImage.classList.contains("scis-img")) {
        playerImage.classList.remove("scis-img");
        playerImage.classList.remove("rock-img");
        playerImage.classList.remove("paper-img");
        playerImage.classList.remove("tie-img");
    }

    if (a === "rock") {
        return playerImage.classList.add("rock-img");
    }
        else if (a === "paper") {
            return playerImage.classList.add("paper-img");
        }
        else {
            return playerImage.classList.add("scis-img");
        };
};

// changes the computerImg to match the chosen one from the computer
let computerImg = function(a) {

    let computerImage = document.getElementById("computer");

    if (computerImage.classList.contains("tie-img") || computerImage.classList.contains("rock-img") || computerImage.classList.contains("paper-img") ||
    computerImage.classList.contains("scis-img")) {
        computerImage.classList.remove("scis-img");
        computerImage.classList.remove("rock-img");
        computerImage.classList.remove("paper-img");
        computerImage.classList.remove("tie-img");    
    }

    if (a === "rock") {
        return computerImage.classList.add("rock-img");
    }
        else if (a === "paper") {
        return computerImage.classList.add("paper-img");
        }
        else {
        return computerImage.classList.add("scis-img");
        };
};

// shows tie symbol in the middle, if player/computer tied
let tieResult = function() {

    let tie = document.getElementById("winner");
    
    if (tie.classList.contains("tie-img") || tie.classList.contains("rock-img") || tie.classList.contains("paper-img") ||
    tie.classList.contains("scis-img")) {
        tie.classList.remove("scis-img");
        tie.classList.remove("rock-img");
        tie.classList.remove("paper-img");
        tie.classList.remove("tie-img");
    };
    return tie.classList.add("tie-img");
};

// shows winning image symbol in the middle, if player/computer won

let winResult = function(a) {
    incrPlayerWins();
    let win = document.getElementById("winner");
    if (win.classList.contains("tie-img") || win.classList.contains("rock-img") || win.classList.contains("paper-img") ||
    win.classList.contains("scis-img")) {
        win.classList.remove("scis-img");
        win.classList.remove("rock-img");
        win.classList.remove("paper-img");
        win.classList.remove("tie-img");
    }

    if (a === "rock") {
        return win.classList.add("rock-img");
    }
    else if (a === "paper") {
        return win.classList.add("paper-img");

    }
    else if (a === "scissors") {
        return win.classList.add("scis-img");

    };
};

// shows won symbol in the middle, based on who lost
let loseResult = function(a) {

    incrComputerWins();
    let win = document.getElementById("winner");

    if (win.classList.contains("tie-img") || win.classList.contains("rock-img") || win.classList.contains("paper-img") ||
    win.classList.contains("scis-img")) {
        win.classList.remove("scis-img");
        win.classList.remove("rock-img");
        win.classList.remove("paper-img");
        win.classList.remove("tie-img");
    }

    if (a === "rock") {
        return win.classList.add("paper-img");
    }
    else if (a === "paper") {
        return win.classList.add("scis-img");

    }
    else if (a === "scissors") {
        return win.classList.add("rock-img");

    };
};
startGame();
