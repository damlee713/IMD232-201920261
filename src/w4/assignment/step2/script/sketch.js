let moverA;
let moverB;
let gravity;
let wind;
let mVec;
let pVec;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new Mover(width / 3, height / 2, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(0.5, 0);
  mVec = createVector();
  pVec = createVector();
}

function draw() {
  mVec.set(mouseX, mouseY);
  pVec.set(pmouseX, pmouseY);
  const sVec = p5.Vector.sub(mVec, pVec);
  sVec.setMag(10);
  background(255);

  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(moverA.mass);
  moverA.applyforce(gravityA);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyforce(sVec);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
}
