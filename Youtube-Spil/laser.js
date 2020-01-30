// Så jeg kopier ved at bruge spos. så den laver en ny vector med smame x og y
function Laser(spos) {
    this.pos = createVector(spos.x, spos.y);
    this.vel = createVector();

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

}
