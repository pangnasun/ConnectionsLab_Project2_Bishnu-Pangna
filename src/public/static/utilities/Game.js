class Game {
    constructor() {
        this.state = "waiting";
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;

        this.players = [];

        // Waiting screen buttons
        this.startButton;
        this.waitingButton;
        this.readyButton;

        this.s = (sketch) => {
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;
            let x = 100;
            let y = 100;

            sketch.setup = () => {
                let canvas = sketch.createCanvas(windowWidth, windowHeight);
                canvas.parent("game-play");

                this.initWaitingScreen(sketch);
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

            // on click events
            sketch.mouseClicked = () => {
                this.startButton.onClick(this.onStartClick);
            };
        };

        this.p5Instance = new p5(this.s);
    }

    waitingScreen(sketch) {
        sketch.background(0);
        sketch.fill(255);

        if (this.players.length == 2) {
            this.readyButton.draw();
        } else {
            this.waitingButton.draw();
        }
        this.startButton.draw();
    }

    initWaitingScreen(sketch) {
        this.readyButton = new Button(
            sketch,
            this.windowWidth / 2,
            this.windowHeight / 2,
            200,
            100,
            "Ready!",
            "#FFFFFF",
            "#000000"
        );

        this.waitingButton = new Button(
            sketch,
            this.windowWidth / 2,
            this.windowHeight / 2,
            200,
            100,
            "Waiting...",
            "#FFFFFF",
            "#000000"
        );

        this.startButton = new Button(
            sketch,
            this.windowWidth / 2,
            this.windowHeight / 2 + 150,
            200,
            100,
            "Start",
            "green",
            "white"
        );
    }

    onStartClick() {
        console.log("Start button clicked");
    }
}
