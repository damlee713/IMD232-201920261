let p = {
  add: function (otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
  },
};
let v = {
  x: 3,
  y: 5,
};

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  p.x = width / 2;
  p.y = height / 2;

  console.log('p', p);
  console.log('y', y);
}

function draw() {
  background(255);
  // p.x += v.x;
  // p.y += v.y;
  p.add(v);

  ellipse(p.x, p.y, 50);

  if (p.x < 0 || p.x > width) {
    v.x *= -1;
  }
  if (p.y < 0 || p.y > height) {
    v.y *= -1;
  }
}
