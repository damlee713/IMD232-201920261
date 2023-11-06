//선언을 밖에서 해줌
let dom;
let htmlDom;

function setup() {
  //선언을 밖에서 해주지 않으면 셋업 안에서만 유효
  dom = select('#hereGoesMyP5Sketch');
  htmlDom = document.querySelector('#hereGoesMyP5Sketch');
  let canvas = createCanvas(600, 400);
  canvas.parent(dom);
  background('black');
}

function draw() {}

function windowResized() {}
