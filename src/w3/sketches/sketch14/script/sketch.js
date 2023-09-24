// let x;
// let y;
let pos;
// let xAdd = 5;
// let yAdd = 3;
let vel;
let radious = 50;
let acc;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  // x = width / 2;
  // y = height / 2;
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 1);
  vel.rotate(random(TAU));
  acc = createVector(1, 0.1);
}

function draw() {
  background('white');
  // x += xAdd;
  // y += yAdd;
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
  // if (x < 0) {
  //   x += width;
  // } else if (x >= width) {
  //   x -= width;
  // }
  // if (y < 0) {
  //   y += height;
  // } else if (y >= height) {
  //   y -= height;
  // }
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }

  ellipse(pos.x, pos.y, 2 * radious);
}
