let pos;
let vel;
let acc;
let mouse;
let vis;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  vis = createVector();
  acc = createVector();
  acc.mult(0.01);
}

function draw() {
  background('white');
  update();
  if (mouseIsPressed && isMouseInsideCanvas()) {
    vis *= -1;
  }
  mouse = createVector(mouseX, mouseY);
  vis = p5.Vector.sub(mouse, pos);
  displayVis();
  display();
  displayAcc();
  displayVel();
}

function update() {
  acc = createVector(vis.x, vis.y);
  acc.mult(0.001);
  vel.add(acc);
  vel.limit(10);
  pos.add(vel);
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}

function displayAcc() {
  stroke('red');
  line(pos.x, pos.y, pos.x + acc.x * 100, pos.y + acc.y * 100);
}
function displayVel() {
  stroke('blue');
  line(pos.x, pos.y, pos.x + vel.x * 10, pos.y + vel.y * 10);
}
function displayVis() {
  stroke('black');
  line(pos.x, pos.y, vis.x + pos.x, vis.y + pos.y);
}
