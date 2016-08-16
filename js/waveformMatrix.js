/**
 * Created by ellaholmes on 8/12/16.
 */
const WIDTH = 800;
const HEIGHT = 800;
const CELL_DIM = 16;
const CELL_SIZE = WIDTH / CELL_DIM;

var rotation;
var analyser;


function setup() {
    createCanvas(WIDTH, HEIGHT);
    audioFile.loop();
    analyzer = new p5.FFT(1, CELL_DIM * CELL_DIM);

    rotation = 0;
}

function draw() {
    var waveform = analyzer.waveform();
    background(0);
    fill(255);
    rectMode(CENTER);

    var direction = 1;
    for (var j = 0; j < CELL_DIM; j++) {
        direction = direction * -1
        for (var i = 0; i < CELL_DIM; i++) {
            var index = i + (j * CELL_DIM);
            var squareSize = waveform[index] * (CELL_SIZE * 0.8);

            var xPos = i * CELL_SIZE;
            var yPos = j * CELL_SIZE;

            push();
            translate(xPos, yPos);
            rotate((rotation / 360) * TWO_PI * direction);
            rect(0, 0, squareSize, squareSize);
            pop();
        }
    }

    rotation = (rotation + 3) % 360;

}