/**
 * Created by ellaholmes on 8/19/16.
 */

var bubbles = [],
    numberOfBubbles = 15;

function setup() {
    createCanvas(507, 338, WEBGL);
    audioFile.loop();
    for (var i = 0; i < numberOfBubbles; i++) {
        bubbles.push(new Bubble());
    }
}

function draw() {
    background(250);

    for( var i = 0; i < numberOfBubbles; i++){
        bubbles[i].float();
        bubbles[i].roate();
        bubbles[i].display();
    }
}

function Bubble() {
    this.x = random(10);
    this.y = random(10);
    this.diameter = random(120);


    this.float = function(){
        this.x += random(1);
        this.y += random(1);
    }

    this.roate = function(){
        rotateZ(frameCount * 0.01);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
    }

    this.display = function(){
        normalMaterial();
        translate(this.x, this.y);
        sphere(this.diameter);
    }

}
