//Variabler
let ship;
function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
}

// I draw skal man altid kalde en function op for at den ville kunne fungere
function draw() {
    background(0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
}

// Det tilføjet jeg så man kunne holde knapperne i bund
function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}

// Her styrer jeg hvordan man skal bevæge skibet
function keyPressed() {
    if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}

function Ship() {
    this.pos = createVector(width/2, height/2)
    this.r = 20;
    this.heading = 0; 
    this.rotation = 0;
    this.vel = createVector(1, 0);
    this.isBoosting = false;

    this.boosting = function(b) {
        this.isBoosting = b;
    }
// Jeg laver boost og styrre hvor meget den skal glide efter i mult(0.99)
    this.update = function() {
        if (this.isBoosting)  {
        this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }
// Her styrer jeg hvor meget kraft boosten skal være
    this.boost = function() {
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1);
        this.vel.add(force);    
    } 

    this.render = function() {
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2)
        noFill(0);
        stroke(225);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)

    }

    // Trekanten kan nu køre ud af siden og komme ind
this.edges = function() {
    if (this.pos.x > width + this.r) {
        this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
        this.pos.x = width + this.r;
    } // Bytter x ud med y og width ud med height så den kan køre ud af toppen og komme ind i bunden
    if (this.pos.y > height + this.r) {
        this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
        this.pos.y = height + this.r;
    }

}

    this.setRotation = function(a) {
        this.rotation = a;
    }

this.turn = function() {
    this.heading += this.rotation;

}
// Sidste update var ved 18:21 i videon
}