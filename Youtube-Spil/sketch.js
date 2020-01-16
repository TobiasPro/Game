//Variabler
let ship;
function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
}

function draw() {
    background(0);
    ship.render();
    ship.turn();
}

function keyReleased() {
    ship.setRotation(0);
}

function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    }
}

function Ship() {
    this.pos = createVector(width/2, height/2)
    this.r = 20;
    this.heading = PI / 2; 
    this.rotation = 0;

    this.render = function() {
        translate(this.pos.x, this.pos.y);
        noFill(0);
        rotate(this.heading);
        stroke(225);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)

    }

    this.setRotation = function(a) {
        this.rotation = a;
    }

this.turn = function() {
    this.heading += this.rotation;

}

}