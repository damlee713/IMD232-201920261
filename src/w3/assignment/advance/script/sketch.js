function setup() {
  let canvas;
  canvas = createCanvas(400, 300);
  let canvasparent;
  canvasparent = select('#canvas-goes-here');
  canvas.parent(canvasparent);
  background(200);
}

function draw() {
  rectMode(CORNER);
  colorMode(RGB);
  noStroke();

  //배경
  fill('#424242');
  rect(0, 0, 400, 10);
  fill('#979797');
  rect(0, 200, 400, 300);
  fill('#bdbdbd');
  rect(0, 210, 400, 300);

  //창문
  fill('#979797');
  rect(0, 70, 90, 100);
  fill('#979797');
  rect(0, 170, 100, 5);
  fill('#797979');
  rect(0, 175, 95, 5);

  //바깥풍경
  fill('#99ccff');
  rect(0, 75, 85, 95);

  //-구름
  fill('#ffffff');
  ellipse(0, 90, 20);
  ellipse(10, 100, 30);
  ellipse(20, 90, 10);
  ellipse(25, 95, 10);
  ellipse(30, 110, 30);
  rect(0, 110, 37, 13);
  ellipse(60, 100, 20);
  ellipse(75, 100, 15);
  ellipse(70, 90, 20);

  //-땅
  fill('#7bb35d');
  rect(0, 150, 85, 20);

  //-창틀
  fill('#979797');
  rect(0, 140, 90, 5);

  //문
  fill('#979797');
  rect(300, 50, 80, 150);
  fill('#797979');
  rect(305, 55, 70, 155);
  fill('#979797');
  rect(300, 80, 80, 5);
  ellipse(370, 150, 5);

  //정물
  fill('#a82424');
  ellipse(170, 170, 20);
  ellipse(200, 170, 20);
  fill('#c23e3e');
  ellipse(185, 167, 20);
  fill('#7bb35d');
  ellipse(183, 162, 3);
  fill('#2a3f29');
  rect(155, 170, 60, 15);

  //테이블
  fill('#dfa967');
  rect(110, 180, 180, 6);
  rect(120, 186, 160, 10);
  rect(120, 186, 6, 60);
  rect(274, 186, 6, 60);
  fill('#c38941');
  rect(120, 186, 160, 4);

  //의자
  fill('#808000');
  rect(60, 203, 40, 5);
  fill('#dfa967');
  rect(60, 205, 40, 5);
  rect(60, 205, 5, 40);
  rect(100, 205, 5, 40);
  rect(60, 155, 5, 50);
}
