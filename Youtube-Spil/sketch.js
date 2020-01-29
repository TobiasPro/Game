//Variabler
let ship;
let asteroids = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
// Laver 10 astoroids
    for (let i = 0; i < 10; i++) {

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

    for (let i = 0; i <asteroids.length; i++)  {
        asteroids[i].render();
        
    }
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