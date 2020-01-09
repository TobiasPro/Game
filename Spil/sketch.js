let x = 100;
let y = 100;
let z = 100
//Yeet hvad mener du?
function setup() {
  createCanvas(1280, 720);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255)
  fill(0)
  // head
    if (keyIsDown(LEFT_ARROW)) {
      x -= 5;
    }
  
    if (keyIsDown(RIGHT_ARROW)) {
      x += 5;
    }
  
    if (keyIsDown(UP_ARROW)) {
      y -= 5;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      y += 5;
    }
  
    clear();
    triangle(30, 75, 58, 20, 86, 75);;
  }
