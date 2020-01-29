
// position for asteroid vi laver random
function Asteroid() {
    this.pos = createVector(random(width), random(height))
// Laver radius på den cirkel vi tegner
    this.r = 50;
    // this.total laver forskllige punkter i hvordan cirklen skal tegnes
    this.total = floor(random(5,15));

    // Man laver push og pop rundt om for at gøre hver asteroids alene så de ikke er connected
this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    // Vi ganger raidus med 2 fordi vi skal bruge diameter for lave en cirkel.
    // ellipse(0, 0, this.r * 2);

    // I stedet for at lave en helt rund cirkel vælger vi lave en mere asteroids agtig form ved at lave en cirkel i punkter og så connect dem. Man lurker cirkel ved skrive (CLOSE) i endshape
    beginShape();
    for (let i = 0; i < this.total; i++) {
        let angle = map(i, 0, this.total, 0, TWO_PI);
        let x = this.r*cos(angle);
        let y = this.r*sin(angle);
        vertex(x, y)
    }
    endShape(CLOSE);

    pop();
}

}