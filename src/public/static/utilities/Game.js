class Game {
    constructor() {
        this.state = "waiting";

        this.s = (sketch) => {
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;
            let x = 100;
            let y = 100;
            sketch.setup = () => {
                let canvas = sketch.createCanvas(windowWidth, windowHeight);
                canvas.parent("game-play");
            };
            sketch.draw = () => {
                if (this.state == "waiting") {
                    this.waitingScreen(sketch);
                } else if (this.state == "playing") {
                    sketch.background(0);
                    sketch.fill(255);
                    sketch.rect(x, y, 50, 50);
                } else if (this.state == "gameover") {
                    this.gameOverScreen(sketch);
                }
            };
        };

        this.p5Instance = new p5(this.s);
    }

    waitingScreen(sketch) {
        sketch.background(0);
        sketch.fill(255);
        sketch.text("Waiting for other player", 10, 10);

        // Start game button (center of screen)
        let button = sketch.createButton("Start Game");
        button.position(sketch.width / 2, sketch.height / 2);
        button.mousePressed(() => {
            this.startGame();
        });
    }        
}
