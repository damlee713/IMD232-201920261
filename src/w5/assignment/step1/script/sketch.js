const cNum = 8;
const rNum = 8;
let gridC;
let gridR;
let angleBegin = 0;
let angleBeginVel;
let angleStep;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  colorMode(HSL, 360, 100, 100, 100);
  background(360, 0, 100);
  angleBeginVel = (TAU / 360) * 15;
}

function draw() {
  background(360, 0, 100);

  for (let r = 0; r < rNum; r++) {
    for (let c = 0; c < cNum; c++) {
      push();
      let x = ((r + 1) * width) / (cNum + 1);
      let y = ((c + 1) * width) / (rNum + 1);
      elipse(x, y, 10);
      rotate();
      pop();
    }
  }

  angleBegin += angleBeginVel;
}
