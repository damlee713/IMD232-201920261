let traffic;
// traffic 함수 선언
let infiniteOffset = 80;
// infiniteOffset 함수 선언

function setup() {
  // 스케치 초기화
  setCanvasContainer('canvas', 3, 2, true);
  // 캔버스를 'canvas' ID에 넣고 크기설정
  colorMode(HSL, 360, 100, 100, 100);
  // 컬러모드 HSL로
  background('white');
  // 배경 흰색
  traffic = new Traffic();
  // traffic에 Traffic 클래스 넣기
  for (let n = 0; n < 10; n++) {
    // 0~9  동안 반복
    traffic.addVehicle(random(width), random(height));
    // 무작위 넓이 안에서 x,높이 안에서 y 설정
  }
}
function draw() {
  // 그리는 함수
  background('white');
  // 배경 흰색
  traffic.run();
  // traffic의 run함수 실행
}

function mouseDragged() {
  // 마우스 드래그 하는 동안
  traffic.addVehicle(mouseX, mouseY);
  // traffic의 addVehicle함수를 마우스 위치를 받아 실행
}
