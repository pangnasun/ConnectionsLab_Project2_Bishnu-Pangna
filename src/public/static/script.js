let root, gameInit, gamePlay, gameOver;
let newGameBtn, joinGameBtn;
let gameIdInput, playerNameInput;
const gameChannel = new GameChannel();
let game;

window.onload = function () {
    root = document.getElementById("root");
    gameInit = document.getElementById("game-init");
    gamePlay = document.getElementById("game-play");
    gameOver = document.getElementById("game-over");
    newGameBtn = document.getElementById("new-game-btn");
    joinGameBtn = document.getElementById("join-game-btn");
    gameIdInput = document.getElementById("game-id-input");
    playerNameInput = document.getElementById("player-name-input");

    // Display Game Init
    WelcomeScreen();

    // Listen to new game button click
    newGameBtn.addEventListener("click", () => {
        gameChannel.createRoom();
    });

    // Listen to join game button click
    joinGameBtn.addEventListener("click", () => {
        gameChannel.joinGame(gameIdInput.value, playerNameInput.value);
    });

    // Game Channel Events
    hookEventHandler("init", (data) => {
        gameIdInput.value = data;
    });
    hookEventHandler("player-join", (data) => {
        console.log("Player added to game");
        console.log(data);
        game = new Game(data);
        GamePlayScreen();
    });
    hookEventHandler("game-start", (data) => {
        console.log("Game started");
        console.log(data);
    });

    // Error handling
    hookEventHandler("error", (err) => {
        alert(err);
    });
};

function WelcomeScreen() {
    toggleScreen("game-init");
}

function GamePlayScreen() {
    toggleScreen("game-play");
}

function GameOverScreen() {
    toggleScreen("game-over");
}

function toggleScreen(ID) {
    // Display none gamePlay
    gamePlay.style.display = "none";
    // Display none gameOver
    gameOver.style.display = "none";
    // Display none gameInit
    gameInit.style.display = "none";
    // Display ID
    document.getElementById(ID).style.display = "block";
}
