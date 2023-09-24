let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  moverB = new Mover((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
}

function draw() {
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyforce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyforce(wind);
  }
  if (moverA.contactEdge()) {
    let c = 0.5;
    // let friction=createVector(moverA.vel.x,moverA.vel.y);
    let friction = moverA.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyforce(friction);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  let gravityB = createVector(gravity.x, gravity.y);
  gravityB.mult(moverB.mass);

  moverB.applyforce(gravityB);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyforce(wind);
  }
  if (moverA.contactEdge()) {
    let c = 0.9;
    // let friction=createVector(moverB.vel.x,moverB.vel.y);
    let friction = moverB.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    moverA.applyforce(friction);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
