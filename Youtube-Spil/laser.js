// Så jeg kopier ved at bruge spos. så den laver en ny vector med smame x og y. Jeg tilføjer angle for styre den vinkel mine skud skal skydes
function Laser(spos, angle) {
    this.pos = createVector(spos.x, spos.y);
    // Her får jeg mine skud til skyde i samme vinkel som mit skib peger
    this.vel = p5.Vector.fromAngle(angle);
    // Her styrer jeg hvor hurtig mine skud er
    this.vel.mult(10);


    this.update = function () {
        this.pos.add(this.vel);
    }
    this.render = function () {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    // Jeg sætter colide på min laser. Det kan man gøre ved at afgøre hvor langt radius er fra asteroid. Det vil ikke blive helt præcist men det går så hurtigt man ikke ligger mærke til det
    this.hits = function (asteroid) {
        // this.pos. x og this.pos.y er laseren og det anden er positionen for asteroids
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        // asteroiden skal explodere når afstanden til laseren er mindre end asteroidens radius
        if (d < asteroid.r) {
            // Jeg laver en if over hvilket betyder sandt eller falsk og jeg vil have den laver en hit alså true hvis det jeg har sagt over passer
            return true;
        } else {
            return false;
        }

    }

}
