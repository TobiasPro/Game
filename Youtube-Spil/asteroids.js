
// position for asteroid vi laver random
function Asteroid(pos) {
    if (pos) {
        // Jeg laver en copy fordi begge pos er objects og hvis jeg ikke laver en copy vil de komme til bevæge sig mærkeligt
        this.pos = pos.copy;
    } else {
        this.pos = createVector(random(width), random(height))
    }
    this.vel = p5.Vector.random2D();
    // Laver en random radius så asteroidsne har forskellige størelser
    this.r = random(15, 50);
    // this.total laver forskllige punkter i hvordan cirklen skal tegnes
    this.total = floor(random(5, 15));
    this.offset = [];
    for (var i = 0; i < this.total; i++) {
        // Man laver en offset random for at få cirklerne til at se mere asteroids agtig ud med stadig forskellige
        this.offset[i] = random(-15, 15);
    }

    // Jeg laver en function der får 
    this.update = function () {
        this.pos.add(this.vel);

    }

    // Man laver push og pop rundt om for at gøre hver asteroids alene så de ikke er connected
    this.render = function () {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);

        // I stedet for at lave en helt rund cirkel vælger vi lave en mere asteroids agtig form ved at lave en cirkel i punkter og så connect dem. Man lurker cirkel ved skrive (CLOSE) i endshape
        beginShape();
        for (let i = 0; i < this.total; i++) {
            let angle = map(i, 0, this.total, 0, TWO_PI);
            let r = this.r + this.offset[i];
            let x = r * cos(angle);
            let y = r * sin(angle);
            vertex(x, y)
        }
        endShape(CLOSE);
        pop();
    }
    
    this.breakup = function() { 
        console.log("bom " + this.pos.x +" "+ this.pos.y);

        let newA = [];
        // Det skulle skabe 2 nye asteroids når man skyder en
        newA[0] = new Asteroid(this.pos);
        newA[1] = new Asteroid(this.pos);
        return newA;
    }

    // Jeg kopier denne command jeg brugte til få skibet til køre ud af kanterne og komme ind igen så nu gør asteroids også
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
}