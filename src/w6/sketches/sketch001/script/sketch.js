let ball;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  ball = new Mover(width / 2, height / 2, 50);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, 0);
}

function draw() {
  ball.applyForce(gravity);
  if (mouseIsPressed) {
    ball.applyForce(wind);
  }
  ball.update();
  ball.edgeBounce();
  background('salmon');
  fill('white');
  ball.display();
}
