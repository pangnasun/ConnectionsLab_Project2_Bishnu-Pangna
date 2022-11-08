class GameChannel {
    // Create room
    createRoom() {
        socket.emit("init", {});
    }

    // Join game
    joinGame(gameID, playerName) {
        socket.emit("player-join", {
            gameID: gameID,
            playerName: playerName,
        });
    }

    // Start game
    startGame() {
        socket.emit("game-start", {
            gameID: this.gameID,
        });
    }
}
