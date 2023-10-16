function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  background(255);

  for (let i = 0; i < width; i += 10) {
    line(i + 10, 10, i + 10, height - 10);
  }
  for (let i = 0; i < 20; i++) {
    circle(i * 20, height / 2, 20);
  }
}
function draw() {}
