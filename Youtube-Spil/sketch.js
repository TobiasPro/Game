//Variabler
var = ship;
function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new ship();
}

function draw() {
    background(0);
}

function ship() {
    this.pos = createVector(width/2, height/2)
    this.r = 10;
    this.render = function() {
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)

    }
}