let x;
let y;
let velocityx = 3;
let velocityy = 5;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  x = width / 2.0;
  y = height / 2.0;
}

function draw() {
  background(255);
  x += velocityx;
  y += velocityy;
  ellipse(x, y, 50);

  // if (x < 0) {
  //   velocityx *= -1;
  // } else if (x > width) {
  //   velocityx *= -1;
  // }
  if (x < 0 || x > width) {
    velocityx *= -1;
  }
  if (y < 0) {
    velocityy *= -1;
  } else if (y > height) {
    velocityy *= -1;
  }
}
