//Variabler
let ship;
let asteroids = [];
let lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    // Laver 5 astoroids
    for (let i = 0; i < 50; i++) {

        asteroids.push(new Asteroid());
    }
}

// I draw skal man altid kalde en function op for at den ville kunne fungere
function draw() {
    background(0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();


    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    // Her gør jeg lige som ved asteroids, hvilket er at få lasers til loop
    for (let i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
    }
}

// Det tilføjet jeg så man kunne holde knapperne i bund
function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}


function keyPressed() {
    // Her gør jeg så man skal trykke på space for at skyde. Jeg skriver ship.pos i min laser for at få laseren til starte der.
    if (key == ' ') {
        lasers.push(new Laser(ship.pos));
    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}