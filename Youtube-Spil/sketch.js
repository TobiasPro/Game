//Variabler
let ship;
let asteroids = [];
let lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    // Laver 5 astoroids
    for (let i = 0; i < 5; i++) {

        asteroids.push(new Asteroid());
    }
}

// I draw skal man altid kalde en function op for at den ville kunne fungere
function draw() {
    background(0);

    for (let i = 0; i < asteroids.length; i++) {
        if (ship.hits(asteroids[i])) {
            console.log('oops');
        }
        asteroids[i].render();
        asteroids[i].update();
        asteroids[i].edges();
    }
    // Her gør jeg lige som ved asteroids, hvilket er at få lasers til loop 
    // jeg laver en - så den loader det omvendt fordi ellers når jeg skyder en asteroids og der kommer 2 nye vil laseren også dræbte de 2 nye på stedet
    for (let i = lasers.length - 1; i >= 0; i--) {
        lasers[i].render();
        lasers[i].update();
        if (lasers[i].offscreen()) {
            lasers.splice(i, 1);
         } else {
        // Her bruger jeg j fordi, hvis jeg bruger i, i 2 loops kan programmet ikke finde ud af det. Jeg bruger -1 og -- fordi lave mit loop så når jeg tilføjet noget checker den dem ikke så den ikke tilføjer igen
        for (let j = asteroids.length - 1; j >= 0; j--) {

            // Her går jeg i gang med gøre så laser kan ramme asteroids
            if (lasers[i].hits(asteroids[j])) {
                // Hvis asteroid har en radius mindre en 25 skal den fjernes
                if (asteroids[j].r > 25) {
                    // Her vil jeg have at mine asteroids splitter når de bliver ramt
                    let newAsteroids = asteroids[j].breakup();
                    // Concat tilføjer de 2 nye asteroids 
                    asteroids = asteroids.concat(newAsteroids);
                }
                asteroids.splice(j, 1);
                // Her gør jeg så laseren bliver fjernet når den har ramt en asteroid
                lasers.splice(i, 1);
                // Break gør at loopen stopper så programmet ikke går tilbage og checker den laser som jeg lige har fjernet
                break;
            }
        }
    }
    }



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


function keyPressed() {
    // Her gør jeg så man skal trykke på space for at skyde. Jeg skriver ship.pos i min laser for at få laseren til starte der.
    if (key == ' ') {
        // I new laser () styrer jeg hvor skudene skal spawnene
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if (keyCode == RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode == UP_ARROW) {
        ship.boosting(true);
    }
}