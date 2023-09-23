let pos;
let vel;
let acc;
let radius = 25;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  acc = createVector();
  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background(255);
  acc = p5.Vector.random2D();
  acc.mult(2);
  vel.add(acc);
  pos.add(vel);

  // if (pos.x < radius || pos.x > width - radius) {
  //   vel.x *= -1;
  // }
  // if (pos.y < radius || pos.y > height - radius) {
  //   vel.y *= -1;
  // }
  if (pos.x < 0) {
    pos.x = width;
  } else if (pos.x > width) {
    pos.x = 0;
  }
  if (pos.y < 0) {
    pos.y = height;
  } else if (pos.y > height) {
    pos.y = 0;
  }
  vel.limit(30);
  ellipse(pos.x, pos.y, 2 * radius);
}
