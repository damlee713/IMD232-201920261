let moverA;
let moverB;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new MoverWithMass(width / 2, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  wind = createVector(0.5, 0);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(255);

  moverA.applyforce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyforce(wind);
  }
  moverA.update();
  moverA.checkEdges();
  moverA.display();
  moverA.displayVectors();

  moverB.applyforce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyforce(wind);
  }
  moverB.update();
  moverB.checkEdges();
  moverB.display();
  moverB.displayVectors();
}
