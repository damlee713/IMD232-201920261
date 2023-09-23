let pos;
let vel = [3, 5];

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = [width / 2, height / 2];

  console.log('pos', pos);
  console.log('vel', vel);
}

function draw() {
  background(20);

  pos[0] += vel[0];
  pos[1] += vel[1];

  ellipse(pos[0], pos[1], 50);

  if (pos[0] < 0 || pos[0] > width) {
    vel[0] *= -1;
  }
  if (pos[1] < 0 || pos[1] > heigth) {
    vel[1] *= -1;
  }
}
