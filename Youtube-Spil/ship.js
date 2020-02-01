function Ship() {
    this.pos = createVector(width / 2, height / 2)
    this.r = 20;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(1, 0);
    this.isBoosting = false;

    this.boosting = function (b) {
        this.isBoosting = b;
    }
    // Jeg laver boost og styrre hvor meget den skal glide efter i mult(0.99)
    this.update = function () {
        if (this.isBoosting) {
            this.boost();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.99);
    }
    // Her styrer jeg hvor meget kraft boosten skal være
    this.boost = function () {
        let force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1);
        this.vel.add(force);
    }


    this.hits = function(asteroid) {
        // Dist udregner forskellen mellem de 2. 
        let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
        // Hvis asteroid kommer ind på ships posistion skal den return true ellers return false
        if (d < this.r + asteroid.r) {
            return true;
        } else {
            return false;
        }
    }

    // Jeg putter push og pop rundt om min render så den ikke har en effekt på asteroiderne. (Hvis jeg ikke gør det connecter de 2 translates og asteroids vil følge mit skib)
    this.render = function () {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2)
        // 0 betyder det skal være sort
        fill(0);
        stroke(225);
        triangle(-this.r, this.r, this.r, this.r, 0, -this.r)
        pop();

    }

    // Trekanten kan nu køre ud af siden og komme ind
    this.edges = function () {
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

    this.setRotation = function (a) {
        this.rotation = a;
    }

    this.turn = function () {
        this.heading += this.rotation;

    }
}