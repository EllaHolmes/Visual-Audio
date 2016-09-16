/**
 * Created by ellaholmes on 8/19/16.
 */

var bubbles = [],
    numberOfBubbles = 1;
const WIDTH = 800;
const HEIGHT = 400;

const MIN_WIDTH = - (WIDTH / 2);
const MAX_WIDTH = WIDTH / 2;
const MIN_HEIGHT = - (HEIGHT / 2);
const MAX_HEIGHT = HEIGHT / 2;


function setup() {
    createCanvas(WIDTH, HEIGHT, WEBGL);
    audioFile.loop();
    for (var i = 0; i < numberOfBubbles; i++) {
        var bubble = new Bubble();
        bubbles.push(bubble);
    }
}

function drawXYZ() {
    line(0,0,10);    
}

function draw() {
    background(250);

    drawXYZ();

    for (var i = 0; i < numberOfBubbles; i++) {
        // bubbles[i].float();
        // bubbles[i].collide();
        // bubbles[i].rotate();
        bubbles[i].display();
    }
}

function Bubble() {
    // this.x = random(MIN_WIDTH, MAX_WIDTH);
    // this.y = random(MIN_HEIGHT, MAX_HEIGHT);
    this.x = MIN_WIDTH;
    this.y = MIN_HEIGHT;
    this.diameter = random(120);
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    this.randomMax = random(10);
    this.randomMin = random(-10);

    this.float = function () {
        this.x += this.speedX * random(this.randomMin,this.randomMax);
        this.y += this.speedY * random(this.randomMin,this.randomMax);
    }

    this.collide = function () {
        if (this.x < MIN_WIDTH) {
            this.x = MAX_WIDTH;
            this.direction = -this.direction;
        }
        else if (this.y < MIN_HEIGHT) {
            this.y = MIN_HEIGHT;
            this.direction = -this.direction;
        }
        else if (this.x > MAX_WIDTH) {
            this.x = MAX_WIDTH;
            this.direction = -this.direction;
        }
        else if (this.y > MAX_HEIGHT) {
            this.y = MAX_HEIGHT;
            this.direction = -this.direction;
        }
    }

    this.rotate = function () {
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
    }

    this.display = function () {
        normalMaterial();
        translate(this.x, this.y);
        sphere(this.diameter);
    }

    return this;

}
